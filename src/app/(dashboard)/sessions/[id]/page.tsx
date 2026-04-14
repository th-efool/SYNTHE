import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { PageShell, Panel } from "@/components/ui/layout/PageShell";

export const metadata: Metadata = {
  title: "Session detail | SYNTHE",
  description: "Inspect one analysis session and next action.",
};

type Props = { params: Promise<{ id: string }> };

export default async function SessionDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <PageShell>
      <Panel>
        <SectionHeader title={`Session ${id}`} subtitle="Captured observations, confidence score, and follow-up steps." />
        <ul>
          <li>Line and proportion notes saved.</li>
          <li>Color candidate ranges saved.</li>
          <li>Presence descriptors pending final review.</li>
        </ul>
        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/sessions">Back to sessions</Link>
          <Link href="/explore">Apply to explore catalog</Link>
        </div>
      </Panel>
    </PageShell>
  );
}
