"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
const sortValues: Sort[] = ["relevance", "price_asc", "price_desc", "newest"];
const pageSizes = [12, 24, 36];

function useDebouncedValue<T>(value: T, delay = 250) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [delay, value]);
  return debounced;
}

type CatalogItem = (typeof mockProducts)[number] & {
  category: string;
  brand: string;
  price: number;
  location: string;
  createdAt: string;
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

function parseIntOr(value: string | null, fallback: number) {
  if (!value) return fallback;
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export default function ExplorePage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const profile = useUserProfile();
  const [q, setQ] = useState(() => searchParams.get("q") ?? "");
  const [cat, setCat] = useState(() => searchParams.get("cat") ?? "all");
  const [price, setPrice] = useState(() => ({
    min: priceBounds.min,
    max: Math.max(priceBounds.min, Math.min(priceBounds.max, parseIntOr(searchParams.get("priceMax"), priceBounds.max))),
  }));
  const [loc, setLoc] = useState(() => searchParams.get("loc") ?? "all");
  const [sort, setSort] = useState<Sort>(() => {
    const s = searchParams.get("sort");
    return sortValues.includes(s as Sort) ? (s as Sort) : "relevance";
  });
  const [pageSize, setPageSize] = useState(() => {
    const size = parseIntOr(searchParams.get("pageSize"), 12);
    return pageSizes.includes(size) ? size : 12;
  });
  const [page, setPage] = useState(() => Math.max(1, parseIntOr(searchParams.get("page"), 1)));
  const dq = useDebouncedValue(q, 250);

  const data = useMemo<CatalogItem[]>(() => mockProducts.map((p) => ({ ...p, ...itemMeta[p.id] })), []);
  const cats = useMemo(() => ["all", ...new Set(data.map((p) => p.category))], [data]);
  const locs = useMemo(() => ["all", ...new Set(data.map((p) => p.location))], [data]);

  const filtered = useMemo(() => {
    const query = dq.trim().toLowerCase();
    const searched = query
      ? data.filter((p) =>
          [p.name, p.description, p.tags?.join(" "), p.category, p.brand].join(" ").toLowerCase().includes(query),
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
  }, [cat, data, dq, loc, price.max, price.min, sort]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (cat !== "all") params.set("cat", cat);
    if (loc !== "all") params.set("loc", loc);
    if (sort !== "relevance") params.set("sort", sort);
    if (price.max !== priceBounds.max) params.set("priceMax", String(price.max));
    if (page !== 1) params.set("page", String(page));
    if (pageSize !== 12) params.set("pageSize", String(pageSize));
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [cat, loc, page, pageSize, pathname, price.max, q, router, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = filtered.length ? (currentPage - 1) * pageSize + 1 : 0;
  const end = filtered.length ? Math.min(filtered.length, currentPage * pageSize) : 0;
  const paged = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const clearFilters = () => {
    setQ("");
    setCat("all");
    setPrice(priceBounds);
    setLoc("all");
    setSort("relevance");
    setPage(1);
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
              setPage(1);
            }}
            placeholder="Search product, brand, tag"
            style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
          />
          <select
            value={cat}
            onChange={(e) => {
              setCat(e.target.value);
              setPage(1);
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
              setPage(1);
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
          {dq.trim() ? <Tag label={`Query: "${dq.trim()}"`} /> : null}
          <Tag label={`$${price.min}-$${price.max}`} />
          <input
            type="range"
            min={priceBounds.min}
            max={priceBounds.max}
            value={price.max}
            onChange={(e) => {
              setPrice((p) => ({ ...p, max: Number(e.target.value) }));
              setPage(1);
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
              setPage(1);
            }}
            style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
          >
            <option value="relevance">Relevance</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
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
            <div style={{ display: "flex", justifyContent: "space-between", gap: spacing.sm, alignItems: "center", flexWrap: "wrap" }}>
              <p style={{ ...typography.body, color: colors.secondaryText }}>
                {start}-{end} of {filtered.length} results
              </p>
              <div style={{ display: "flex", gap: spacing.sm, alignItems: "center" }}>
                <label htmlFor="page-size" style={{ ...typography.body, color: colors.secondaryText }}>
                  Page size
                </label>
                <select
                  id="page-size"
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setPage(1);
                  }}
                  style={{ ...typography.body, padding: spacing.sm, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}
                >
                  {pageSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <Button onClick={() => setPage((v) => Math.max(1, v - 1))}>Prev</Button>
                <Tag label={`Page ${currentPage}/${totalPages}`} />
                <Button onClick={() => setPage((v) => Math.min(totalPages, v + 1))}>Next</Button>
              </div>
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
