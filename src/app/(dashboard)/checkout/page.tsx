import Link from "next/link";
import { ImageContainer } from "@/components/ui/elements/ImageContainer";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { mockProducts } from "@/lib/mockData";

export default function CheckoutPage() {
  const summaryItems = mockProducts.slice(0, 2);

  return (
    <div
      className="ui-enter flow-shell"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.xxl,
      }}
    >
      <section className="ui-enter">
        <SectionHeader title="Checkout" subtitle="Finalizing your selection." />
      </section>

      <section
        className="ui-enter checkout-flow"
        style={{
        }}
      >
        <div
          style={{
            display: "grid",
            gap: spacing.lg,
            padding: spacing.lg,
            border: `1px solid ${colors.border}`,
            borderRadius: spacing.lg,
            background: colors.surface,
          }}
        >
          <label style={typography.body}>
            Name
            <input
              type="text"
              placeholder="Your name"
              style={{
                width: "100%",
                marginTop: spacing.xs,
                padding: spacing.sm,
                border: `1px solid ${colors.border}`,
                borderRadius: spacing.sm,
                background: colors.background,
                color: colors.primaryText,
              }}
            />
          </label>

          <label style={typography.body}>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              style={{
                width: "100%",
                marginTop: spacing.xs,
                padding: spacing.sm,
                border: `1px solid ${colors.border}`,
                borderRadius: spacing.sm,
                background: colors.background,
                color: colors.primaryText,
              }}
            />
          </label>

          <label style={typography.body}>
            Address
            <input
              type="text"
              placeholder="Street, city"
              style={{
                width: "100%",
                marginTop: spacing.xs,
                padding: spacing.sm,
                border: `1px solid ${colors.border}`,
                borderRadius: spacing.sm,
                background: colors.background,
                color: colors.primaryText,
              }}
            />
          </label>

          <label style={typography.body}>
            Payment
            <input
              type="text"
              placeholder="Card details"
              style={{
                width: "100%",
                marginTop: spacing.xs,
                padding: spacing.sm,
                border: `1px solid ${colors.border}`,
                borderRadius: spacing.sm,
                background: colors.background,
                color: colors.primaryText,
              }}
            />
          </label>
        </div>

        <aside
          className="flow-sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: spacing.lg,
            padding: spacing.lg,
            border: `1px solid ${colors.border}`,
            borderRadius: spacing.lg,
            background: colors.surface,
          }}
        >
          <p style={{ ...typography.body, color: colors.secondaryText }}>Aligned with your profile</p>

          <div style={{ display: "grid", gap: spacing.sm }}>
            {summaryItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px minmax(0, 1fr)",
                  gap: spacing.sm,
                  alignItems: "center",
                }}
              >
                <ImageContainer src={item.image} alt={item.name} />
                <p style={{ ...typography.body, color: colors.primaryText }}>{item.name}</p>
              </div>
            ))}
          </div>

          <Link
            href="/wardrobe"
            style={{
              ...typography.body,
              textDecoration: "none",
              color: colors.surface,
              background: colors.primaryText,
              borderRadius: spacing.xxl,
              padding: `${spacing.sm} ${spacing.lg}`,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
            }}
          >
            Complete purchase -&gt;
          </Link>
        </aside>
      </section>
    </div>
  );
}
