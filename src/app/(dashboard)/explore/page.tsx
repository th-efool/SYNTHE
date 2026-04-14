"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/ui/cards/ProductCard";
import { Button } from "@/components/ui/elements/Button";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Tag } from "@/components/ui/elements/Tag";
import { Grid } from "@/components/ui/layout/Grid";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { useUserProfile } from "@/hooks/useUserProfile";
import { mockProducts } from "@/lib/mockData";

type Sort = "relevance" | "price_asc" | "price_desc" | "newest";

type Filters = {
  categories: string[];
  priceMin: number;
  priceMax: number;
  location: string;
  inStockOnly: boolean;
};

const itemMeta: Record<string, Pick<CatalogItem, "category" | "brand" | "price" | "location" | "createdAt">> = {
  "1": { category: "Outerwear", brand: "Aster Lane", price: 148, location: "New York", createdAt: "2026-04-05T10:00:00.000Z" },
  "2": { category: "Sets", brand: "Marrow Studio", price: 182, location: "Los Angeles", createdAt: "2026-04-12T10:00:00.000Z" },
  "3": { category: "Tops", brand: "Willow Form", price: 96, location: "Chicago", createdAt: "2026-04-09T10:00:00.000Z" },
  "4": { category: "Bottoms", brand: "Dune North", price: 118, location: "Austin", createdAt: "2026-04-02T10:00:00.000Z" },
  "5": { category: "Dresses", brand: "Elm Theory", price: 164, location: "Seattle", createdAt: "2026-04-14T10:00:00.000Z" },
  "6": { category: "Outerwear", brand: "Cedar Kind", price: 132, location: "Portland", createdAt: "2026-04-07T10:00:00.000Z" },
};

const priceBounds = { min: 0, max: 250 };
const pageSize = 4;

export default function ExplorePage() {
  const profile = useUserProfile();
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<Sort>("relevance");
  const [page, setPage] = useState(1);
  const dq = useDebouncedValue(q, 250);

  const data = useMemo(() => mockProducts, []);
  const priceBounds = useMemo(
    () => ({ min: Math.min(...data.map((p) => p.price)), max: Math.max(...data.map((p) => p.price)) }),
    [data],
  );
  const cats = useMemo(() => [...new Set(data.map((p) => p.category))], [data]);
  const locs = useMemo(() => [...new Set(data.map((p) => p.location))], [data]);

  const defaults = useMemo<Filters>(
    () => ({ categories: [], priceMin: priceBounds.min, priceMax: priceBounds.max, location: "all", inStockOnly: false }),
    [priceBounds.max, priceBounds.min],
  );

  const [filters, setFilters] = useState<Filters>(defaults);

  const clampPrice = (min: number, max: number) => {
    const clampedMin = Math.max(priceBounds.min, Math.min(min, priceBounds.max));
    const clampedMax = Math.max(priceBounds.min, Math.min(max, priceBounds.max));
    return { min: Math.min(clampedMin, clampedMax), max: Math.max(clampedMin, clampedMax) };
  };

  const setPriceMin = (next: string) => {
    const v = Number(next);
    if (Number.isNaN(v)) return;
    const p = clampPrice(v, filters.priceMax);
    setFilters((f) => ({ ...f, priceMin: p.min, priceMax: p.max }));
    setPage(0);
  };

  const setPriceMax = (next: string) => {
    const v = Number(next);
    if (Number.isNaN(v)) return;
    const p = clampPrice(filters.priceMin, v);
    setFilters((f) => ({ ...f, priceMin: p.min, priceMax: p.max }));
    setPage(0);
  };

  const filtered = useMemo(() => {
    const query = dq.trim().toLowerCase();
    const searched = query
      ? data.filter((p) => [p.name, p.description, p.category, p.location, ...(p.tags ?? [])].join(" ").toLowerCase().includes(query))
      : data;
    const byCat = filters.categories.length ? searched.filter((p) => filters.categories.includes(p.category)) : searched;
    const byPrice = byCat.filter((p) => p.price >= filters.priceMin && p.price <= filters.priceMax);
    const byLoc = filters.location === "all" ? byPrice : byPrice.filter((p) => p.location === filters.location);
    const byStock = filters.inStockOnly ? byLoc.filter((p) => p.inStock) : byLoc;

    return [...byStock].sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      const aDate = Date.parse((a as { createdAt?: string }).createdAt ?? "2020-01-01T00:00:00.000Z");
      const bDate = Date.parse((b as { createdAt?: string }).createdAt ?? "2020-01-01T00:00:00.000Z");
      if (sort === "newest") return bDate - aDate;
      const aScore = +(a.name.toLowerCase().includes(query) || a.description?.toLowerCase().includes(query));
      const bScore = +(b.name.toLowerCase().includes(query) || b.description?.toLowerCase().includes(query));
      return bScore - aScore;
    });
  }, [data, filters.categories, filters.inStockOnly, filters.location, filters.priceMax, filters.priceMin, q, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const clearFilters = () => {
    setQ("");
    setFilters(defaults);
    setSort("relevance");
    setPage(1);
  };

  const activeChips = [
    ...filters.categories.map((c) => ({ key: `cat-${c}`, label: `Category: ${c}`, remove: () => setFilters((f) => ({ ...f, categories: f.categories.filter((x) => x !== c) })) })),
    ...(filters.location !== "all"
      ? [{ key: "loc", label: `Location: ${filters.location}`, remove: () => setFilters((f) => ({ ...f, location: "all" })) }]
      : []),
    ...(filters.inStockOnly
      ? [{ key: "stock", label: "In stock", remove: () => setFilters((f) => ({ ...f, inStockOnly: false })) }]
      : []),
    ...(filters.priceMin !== defaults.priceMin || filters.priceMax !== defaults.priceMax
      ? [{ key: "price", label: `$${filters.priceMin}-$${filters.priceMax}`, remove: () => setFilters((f) => ({ ...f, priceMin: defaults.priceMin, priceMax: defaults.priceMax })) }]
      : []),
    ...(q.trim() ? [{ key: "q", label: `Search: ${q.trim()}`, remove: () => setQ("") }] : []),
  ];

  const applyFilters = () => {
    const p = clampPrice(filters.priceMin, filters.priceMax);
    setFilters((f) => ({ ...f, priceMin: p.min, priceMax: p.max }));
    setPage(0);
  };

  return (
    <div className="flow-shell" style={{ display: "flex", flexDirection: "column", gap: spacing.xxl }}>
      <section className="ui-enter" style={{ animationDelay: "0ms" }}>
        <SectionHeader title="Explore" subtitle="Selections shaped by your structure, tone, and presence." />
        <p style={{ ...typography.tag, color: colors.secondaryText, marginTop: spacing.sm }}>
          {profile.kibbe} | {profile.season} | {profile.essence[1]}/{profile.essence[0]}
        </p>
      </section>

      <section className="ui-enter" style={{ animationDelay: "80ms", display: "grid", gap: spacing.lg, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <aside
          style={{
            border: `1px solid ${colors.border}`,
            borderRadius: spacing.lg,
            padding: spacing.md,
            display: "grid",
            gap: spacing.md,
            alignContent: "start",
          }}
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search product, brand, tag"
            style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
          />

          <div style={{ display: "grid", gap: spacing.xs }}>
            <p style={{ ...typography.tag, color: colors.secondaryText }}>Category</p>
            <div style={{ display: "grid", gap: spacing.xs }}>
              {cats.map((c) => {
                const checked = filters.categories.includes(c);
                return (
                  <label key={c} style={{ ...typography.body, display: "flex", alignItems: "center", gap: spacing.xs }}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        setFilters((f) => ({
                          ...f,
                          categories: checked ? f.categories.filter((x) => x !== c) : [...f.categories, c],
                        }));
                        setPage(0);
                      }}
                    />
                    {c}
                  </label>
                );
              })}
            </div>
          </div>

          <div style={{ display: "grid", gap: spacing.xs }}>
            <p style={{ ...typography.tag, color: colors.secondaryText }}>Price</p>
            <div style={{ display: "grid", gap: spacing.xs, gridTemplateColumns: "1fr 1fr" }}>
              <input
                type="number"
                inputMode="numeric"
                min={priceBounds.min}
                max={priceBounds.max}
                value={filters.priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                onBlur={() => applyFilters()}
                style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
              />
              <input
                type="number"
                inputMode="numeric"
                min={priceBounds.min}
                max={priceBounds.max}
                value={filters.priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                onBlur={() => applyFilters()}
                style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gap: spacing.xs }}>
            <p style={{ ...typography.tag, color: colors.secondaryText }}>Location</p>
            <select
              value={filters.location}
              onChange={(e) => {
                setFilters((f) => ({ ...f, location: e.target.value }));
                setPage(0);
              }}
              style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
            >
              <option value="all">All locations</option>
              {locs.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <label style={{ ...typography.body, display: "flex", alignItems: "center", gap: spacing.xs }}>
            <input
              type="checkbox"
              checked={filters.inStockOnly}
              onChange={(e) => {
                setFilters((f) => ({ ...f, inStockOnly: e.target.checked }));
                setPage(0);
              }}
            />
            In stock only
          </label>

          <div style={{ display: "flex", gap: spacing.sm, flexWrap: "wrap" }}>
            <Button onClick={applyFilters}>Apply</Button>
            <Button onClick={clearFilters}>Clear all</Button>
          </div>
        </aside>

        <div style={{ display: "grid", gap: spacing.lg }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: spacing.md, flexWrap: "wrap", alignItems: "center" }}>
            <SectionHeader title="Catalog results" subtitle={`${filtered.length} item${filtered.length === 1 ? "" : "s"} found`} />
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value as Sort);
                setPage(0);
              }}
              style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
            >
              <option value="relevance">Relevance</option>
              <option value="price_asc">Price: Low to high</option>
              <option value="price_desc">Price: High to low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {activeChips.length ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: spacing.sm }}>
              {activeChips.map((chip) => (
                <button
                  key={chip.key}
                  onClick={() => {
                    chip.remove();
                    setPage(0);
                  }}
                  style={{
                    border: `1px solid ${colors.border}`,
                    borderRadius: spacing.md,
                    background: colors.surface,
                    padding: `${spacing.xs}px ${spacing.sm}px`,
                    cursor: "pointer",
                    ...typography.tag,
                    color: colors.secondaryText,
                  }}
                >
                  {chip.label} ×
                </button>
              ))}
            </div>
          ) : null}

          {paged.length ? (
            <>
              <Grid>
                {paged.map((p) => (
                  <ProductCard
                    key={p.id}
                    {...p}
                    tags={[...(p.tags ?? []), p.category, p.location, `$${p.price}`, p.inStock ? "In stock" : "Out of stock"]}
                    description={`${p.description} • ${p.location}`}
                  />
                ))}
              </Grid>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: spacing.sm }}>
                <Button onClick={() => setPage((v) => Math.max(0, v - 1))}>Prev</Button>
                <Tag label={`Page ${currentPage + 1}/${totalPages}`} />
                <Button onClick={() => setPage((v) => Math.min(totalPages - 1, v + 1))}>Next</Button>
              </div>
            </>
          ) : (
            <div
              style={{
                border: `1px dashed ${colors.border}`,
                borderRadius: spacing.lg,
                padding: spacing.xl,
                display: "grid",
                gap: spacing.md,
                justifyItems: "start",
              }}
            >
              <p style={{ ...typography.body, color: colors.secondaryText }}>No results for current filters.</p>
              <Button onClick={clearFilters}>Clear all</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
