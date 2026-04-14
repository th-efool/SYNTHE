"use client";

import { type CSSProperties, useMemo, useState } from "react";
import { ProductCard } from "@/components/ui/cards/ProductCard";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Grid } from "@/components/ui/layout/Grid";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { useUserProfile } from "@/hooks/useUserProfile";
import { mockProducts } from "@/lib/mockData";

const minBound = Math.min(...mockProducts.map((p) => p.price));
const maxBound = Math.max(...mockProducts.map((p) => p.price));

export default function ExplorePage() {
  const profile = useUserProfile();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [loc, setLoc] = useState("All");
  const [inStock, setInStock] = useState(false);
  const [minPrice, setMinPrice] = useState(String(minBound));
  const [maxPrice, setMaxPrice] = useState(String(maxBound));

  const cats = useMemo(() => ["All", ...new Set(mockProducts.map((p) => p.category))], []);
  const locs = useMemo(() => ["All", ...new Set(mockProducts.map((p) => p.location))], []);

  const filtered = useMemo(() => {
    const min = Number(minPrice) || minBound;
    const max = Number(maxPrice) || maxBound;
    return mockProducts.filter((p) => {
      const hay = `${p.name} ${p.description} ${p.tags.join(" ")} ${p.category} ${p.location}`.toLowerCase();
      if (q && !hay.includes(q.toLowerCase())) return false;
      if (cat !== "All" && p.category !== cat) return false;
      if (loc !== "All" && p.location !== loc) return false;
      if (p.price < min || p.price > max) return false;
      if (inStock && !p.inStock) return false;
      return true;
    });
  }, [q, cat, loc, minPrice, maxPrice, inStock]);

  const clear = () => {
    setQ("");
    setCat("All");
    setLoc("All");
    setInStock(false);
    setMinPrice(String(minBound));
    setMaxPrice(String(maxBound));
  };

  return (
    <div className="flow-shell" style={{ display: "grid", gap: spacing.xl }}>
      <section className="ui-enter">
        <SectionHeader title="Explore" subtitle="Search and filter your personalized catalog." />
        <p style={{ ...typography.tag, color: colors.secondaryText, marginTop: spacing.sm }}>
          {profile.kibbe} | {profile.season} | {profile.essence[1]}/{profile.essence[0]}
        </p>
      </section>

      <section
        className="ui-enter"
        style={{
          border: `1px solid ${colors.border}`,
          borderRadius: spacing.lg,
          background: colors.surface,
          padding: spacing.lg,
          display: "grid",
          gap: spacing.md,
        }}
      >
        <div style={{ display: "grid", gap: spacing.sm, gridTemplateColumns: "minmax(220px,2fr) repeat(2,minmax(160px,1fr))" }}>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" style={inputStyle} />
          <select value={cat} onChange={(e) => setCat(e.target.value)} style={inputStyle}>
            {cats.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select value={loc} onChange={(e) => setLoc(e.target.value)} style={inputStyle}>
            {locs.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        <div style={{ display: "grid", gap: spacing.sm, gridTemplateColumns: "repeat(4,minmax(120px,1fr))", alignItems: "center" }}>
          <input
            type="number"
            value={minPrice}
            min={minBound}
            max={maxBound}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min price"
            style={inputStyle}
          />
          <input
            type="number"
            value={maxPrice}
            min={minBound}
            max={maxBound}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max price"
            style={inputStyle}
          />
          <label style={{ ...typography.body, display: "flex", gap: spacing.xs, alignItems: "center" }}>
            <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
            In stock only
          </label>
          <button onClick={clear} style={btnStyle}>Clear filters</button>
        </div>

        <p style={{ ...typography.tag, margin: 0, color: colors.mutedText }}>{filtered.length} results</p>
      </section>

      <section className="ui-enter">
        {filtered.length ? (
          <Grid>
            {filtered.map((p) => (
              <div key={p.id} style={{ display: "grid", gap: spacing.xs }}>
                <ProductCard {...p} />
                <div style={{ ...typography.tag, color: colors.mutedText, display: "flex", justifyContent: "space-between" }}>
                  <span>{p.category} · {p.location}</span>
                  <span>${p.price}</span>
                </div>
              </div>
            ))}
          </Grid>
        ) : (
          <div style={{ ...typography.body, color: colors.mutedText }}>No results. Adjust filters.</div>
        )}
      </section>
    </div>
  );
}

const inputStyle: CSSProperties = {
  ...typography.body,
  border: `1px solid ${colors.border}`,
  borderRadius: spacing.sm,
  background: colors.background,
  color: colors.primaryText,
  padding: `${spacing.sm} ${spacing.md}`,
};

const btnStyle: CSSProperties = {
  ...typography.body,
  border: `1px solid ${colors.border}`,
  borderRadius: spacing.xxl,
  background: colors.background,
  padding: `${spacing.sm} ${spacing.md}`,
  cursor: "pointer",
};
