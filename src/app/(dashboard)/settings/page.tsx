import type { Metadata } from "next";
import { Button } from "@/components/ui/elements/Button";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { SelectInput, TextInput } from "@/components/ui/elements/FormControls";
import { PageShell, Panel } from "@/components/ui/layout/PageShell";

export const metadata: Metadata = {
  title: "Settings | SYNTHE",
  description: "Manage account, notifications, and personalization settings.",
};

export default function SettingsPage() {
  return (
    <PageShell width="920px">
      <Panel>
        <SectionHeader title="Settings" subtitle="Control account preferences and communication cadence." />
        <div className="form-grid">
          <TextInput label="Display name" defaultValue="Avery" />
          <TextInput label="Email" defaultValue="avery@example.com" />
          <SelectInput label="Digest frequency" defaultValue="weekly">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="off">Off</option>
          </SelectInput>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <Button>Save settings</Button>
          <Button variant="secondary">Reset</Button>
        </div>
      </Panel>
    </PageShell>
  );
}
