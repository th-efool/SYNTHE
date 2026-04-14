import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/elements/Button";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { TextInput } from "@/components/ui/elements/FormControls";
import { PageShell, Panel } from "@/components/ui/layout/PageShell";

export const metadata: Metadata = {
  title: "Sign in | SYNTHE",
  description: "Access profile, wardrobe, and session history.",
};

export default function AuthPage() {
  return (
    <PageShell width="880px">
      <Panel>
        <SectionHeader title="Welcome back" subtitle="Sign in to continue profile-led styling." />
        <div className="form-grid">
          <TextInput label="Email" type="email" placeholder="you@example.com" />
          <TextInput label="Password" type="password" placeholder="••••••••" />
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button>Sign in</Button>
          <Button variant="secondary">Continue with Google</Button>
          <Link href="/typing" style={{ alignSelf: "center" }}>New user? Start typing flow</Link>
        </div>
      </Panel>
    </PageShell>
  );
}
