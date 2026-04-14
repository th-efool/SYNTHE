import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { PageShell, Panel } from "@/components/ui/layout/PageShell";

export const metadata: Metadata = {
  title: "Sessions | SYNTHE",
  description: "Review fitting and styling sessions.",
};

const rows = [
  { id: "s-101", type: "Structure", status: "Complete", date: "Apr 10, 2026" },
  { id: "s-102", type: "Color", status: "In review", date: "Apr 13, 2026" },
  { id: "s-103", type: "Presence", status: "Scheduled", date: "Apr 18, 2026" },
];

export default function SessionsPage() {
  return (
    <PageShell>
      <Panel>
        <SectionHeader title="Sessions" subtitle="Chronological view of every profile-building step." />
        <div style={{ display: "grid", gap: 10 }}>
          {rows.map((r) => (
            <Link key={r.id} href={`/sessions/${r.id}`} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 12, border: "1px solid #E6DED4", borderRadius: 12, padding: 12, textDecoration: "none", color: "inherit" }}>
              <strong>{r.type}</strong>
              <span>{r.status}</span>
              <span>{r.date}</span>
            </Link>
          ))}
        </div>
      </Panel>
    </PageShell>
  );
}
