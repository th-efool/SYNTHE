import Link from "next/link";
import { Button } from "@/components/ui/elements/Button";
import { TextInput } from "@/components/ui/elements/FormControls";
import { ImageContainer } from "@/components/ui/elements/ImageContainer";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { PageShell, Panel } from "@/components/ui/layout/PageShell";
import { mockProducts } from "@/lib/mockData";

export default function CheckoutPage() {
  const summaryItems = mockProducts.slice(0, 2);

  return (
    <PageShell>
      <section className="ui-enter">
        <SectionHeader title="Checkout" subtitle="Finalizing selection." />
      </section>

      <section className="checkout-flow">
        <Panel>
          <div className="form-grid">
            <TextInput label="Name" type="text" placeholder="Your name" />
            <TextInput label="Email" type="email" placeholder="you@example.com" />
            <TextInput label="Address" type="text" placeholder="Street, city" />
            <TextInput label="Payment" type="text" placeholder="Card details" hint="Encrypted on submit." />
          </div>
        </Panel>

        <aside className="flow-sidebar">
          <Panel muted>
            <p style={{ ...typography.body, color: colors.secondaryText, margin: 0 }}>Aligned with profile</p>
            <div style={{ display: "grid", gap: spacing.sm }}>
              {summaryItems.map((item) => (
                <div key={item.id} style={{ display: "grid", gridTemplateColumns: "56px minmax(0, 1fr)", gap: spacing.sm, alignItems: "center" }}>
                  <ImageContainer src={item.image} alt={item.name} />
                  <p style={{ ...typography.body, color: colors.primaryText, margin: 0 }}>{item.name}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: spacing.sm, flexWrap: "wrap" }}>
              <Button>Complete purchase</Button>
              <Link href="/wardrobe" style={{ alignSelf: "center" }}>Back to wardrobe</Link>
            </div>
          </Panel>
        </aside>
      </section>
    </PageShell>
  );
}
