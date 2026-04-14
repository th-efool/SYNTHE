"use client";

import { useMemo, useState } from "react";
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

type CatalogItem = (typeof mockProducts)[number] & {
  category: string;
  price: number;
  location: string;
  createdAt: string;
};

const itemMeta: Record<string, Pick<CatalogItem, "category" | "price" | "location" | "createdAt">> = {
  "1": { category: "Outerwear", price: 148, location: "New York", createdAt: "2026-04-05T10:00:00.000Z" },
  "2": { category: "Sets", price: 182, location: "Los Angeles", createdAt: "2026-04-12T10:00:00.000Z" },
  "3": { category: "Tops", price: 96, location: "Chicago", createdAt: "2026-04-09T10:00:00.000Z" },
  "4": { category: "Bottoms", price: 118, location: "Austin", createdAt: "2026-04-02T10:00:00.000Z" },
  "5": { category: "Dresses", price: 164, location: "Seattle", createdAt: "2026-04-14T10:00:00.000Z" },
  "6": { category: "Outerwear", price: 132, location: "Portland", createdAt: "2026-04-07T10:00:00.000Z" },
};

const priceBounds = { min: 0, max: 250 };
const pageSize = 4;

export default function ExplorePage() {
  const profile = useUserProfile();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [price, setPrice] = useState(priceBounds);
  const [loc, setLoc] = useState("all");
  const [sort, setSort] = useState<Sort>("relevance");
  const [page, setPage] = useState(0);

  const data = useMemo<CatalogItem[]>(() => mockProducts.map((p) => ({ ...p, ...itemMeta[p.id] })), []);
  const cats = useMemo(() => ["all", ...new Set(data.map((p) => p.category))], [data]);
  const locs = useMemo(() => ["all", ...new Set(data.map((p) => p.location))], [data]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    const searched = query
      ? data.filter((p) =>
          [p.name, p.description, p.category, p.location, ...(p.tags ?? [])].join(" ").toLowerCase().includes(query),
        )
      : data;
    const byCat = cat === "all" ? searched : searched.filter((p) => p.category === cat);
    const byPrice = byCat.filter((p) => p.price >= price.min && p.price <= price.max);
    const byLoc = loc === "all" ? byPrice : byPrice.filter((p) => p.location === loc);

    return [...byLoc].sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      if (sort === "newest") return +new Date(b.createdAt) - +new Date(a.createdAt);
      const aScore = +(a.name.toLowerCase().includes(query) || a.description?.toLowerCase().includes(query));
      const bScore = +(b.name.toLowerCase().includes(query) || b.description?.toLowerCase().includes(query));
      return bScore - aScore;
    });
  }, [cat, data, loc, price.max, price.min, q, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages - 1);
  const paged = filtered.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const clearFilters = () => {
    setQ("");
    setCat("all");
    setPrice(priceBounds);
    setLoc("all");
    setSort("relevance");
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

      <section className="ui-enter" style={{ animationDelay: "80ms", display: "grid", gap: spacing.md }}>
        <div style={{ display: "grid", gap: spacing.sm, gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}>
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(0);
            }}
            placeholder="Search"
            style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
          />
          <select
            value={cat}
            onChange={(e) => {
              setCat(e.target.value);
              setPage(0);
            }}
            style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
          >
            {cats.map((c) => (
              <option key={c} value={c}>
                {c === "all" ? "All categories" : c}
              </option>
            ))}
          </select>
          <select
            value={loc}
            onChange={(e) => {
              setLoc(e.target.value);
              setPage(0);
            }}
            style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
          >
            {locs.map((l) => (
              <option key={l} value={l}>
                {l === "all" ? "All locations" : l}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: spacing.sm, alignItems: "center" }}>
          <Tag label={`$${price.min}-$${price.max}`} />
          <input
            type="range"
            min={priceBounds.min}
            max={priceBounds.max}
            value={price.max}
            onChange={(e) => {
              setPrice((p) => ({ ...p, max: Number(e.target.value) }));
              setPage(0);
            }}
            style={{ width: 160 }}
          />
          <Button onClick={clearFilters}>Clear filters</Button>
        </div>
      </section>

      <section className="ui-enter" style={{ animationDelay: "140ms", display: "grid", gap: spacing.lg }}>
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

        {paged.length ? (
          <>
            <Grid>
              {paged.map((p) => (
                <ProductCard
                  key={p.id}
                  {...p}
                  tags={[...(p.tags ?? []), p.category, p.location, `$${p.price}`]}
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
            <Button onClick={clearFilters}>Clear filters</Button>
          </div>
        )}
      </section>
    </div>
  );
}
