import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Tag } from "@/components/ui/elements/Tag";
import { PageShell, Panel } from "@/components/ui/layout/PageShell";

export const metadata: Metadata = {
  title: "Dashboard | SYNTHE",
  description: "Overview of typing progress, sessions, and wardrobe status.",
};

export default function DashboardPage() {
  return (
    <PageShell>
      <Panel>
        <SectionHeader title="Dashboard" subtitle="Track profile resolution and next styling actions." />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Tag label="Structure ready" />
          <Tag label="Color in progress" />
          <Tag label="Presence pending" />
        </div>
      </Panel>
      <section className="page-grid-2">
        <Panel>
          <h3>Next actions</h3>
          <ul>
            <li><Link href="/typing">Continue typing flow</Link></li>
            <li><Link href="/explore">Review matched catalog</Link></li>
            <li><Link href="/wardrobe">Compose next look</Link></li>
          </ul>
        </Panel>
        <Panel muted>
          <h3>Status</h3>
          <p>2 sessions complete. 1 pending review.</p>
          <Link href="/sessions">Open session timeline</Link>
        </Panel>
      </section>
    </PageShell>
  );
}
