import { Button } from "@/components/ui/elements/Button";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Tag } from "@/components/ui/elements/Tag";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

const tracks = [
  {
    title: "Structure",
    note: "Map line, width, softness, and how cloth should sit on frame.",
    status: "Ready",
  },
  {
    title: "Color",
    note: "Find warmth, softness, and contrast that keep skin clear.",
    status: "In queue",
  },
  {
    title: "Presence",
    note: "Read visual impression so styling feels coherent, not forced.",
    status: "Pending",
  },
];

export default function TypingPage() {
  return (
    <div
      className="ui-enter flow-shell"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.xxl,
      }}
    >
      <section
        className="ui-enter"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: spacing.xl,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            padding: spacing.xxl,
            border: `1px solid ${colors.border}`,
            borderRadius: spacing.lg,
            background: `linear-gradient(180deg, ${colors.surface}, ${colors.background})`,
            display: "flex",
            flexDirection: "column",
            gap: spacing.lg,
          }}
        >
          <SectionHeader
            title="Find your profile"
            subtitle="Understand your structure, color, and presence through one guided analysis flow."
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: spacing.sm,
            }}
          >
            <Tag label="Structure" />
            <Tag label="Color" />
            <Tag label="Presence" />
          </div>

          <p style={{ ...typography.body, color: colors.primaryText, maxWidth: "58ch", margin: 0 }}>
            This page should feel like a studio session, not a shopping surface. We are identifying your visual logic
            first, then using it everywhere else.
          </p>

          <div
            style={{
              display: "flex",
              gap: spacing.lg,
              flexWrap: "wrap",
            }}
          >
            <Button>Start analysis</Button>
            <Button>Continue</Button>
          </div>
        </div>

        <aside
          className="ui-enter"
          style={{
            padding: spacing.xl,
            border: `1px solid ${colors.border}`,
            borderRadius: spacing.lg,
            background: colors.primaryText,
            color: colors.surface,
            display: "flex",
            flexDirection: "column",
            gap: spacing.lg,
          }}
        >
          <p style={{ ...typography.tag, color: colors.mutedText, margin: 0 }}>Current session</p>
          <h2
            style={{
              fontFamily: "var(--font-editorial), serif",
              fontSize: "30px",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Profile build in progress.
          </h2>
          <p style={{ ...typography.body, color: colors.surface, margin: 0 }}>
            First we resolve shape. Then tone. Then presence. Each layer sharpens the next decision.
          </p>
        </aside>
      </section>

      <section
        className="ui-enter"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: spacing.lg,
        }}
      >
        {tracks.map((track, index) => (
          <article
            key={track.title}
            className="ui-enter"
            style={{
              animationDelay: `${index * 100}ms`,
              padding: spacing.xl,
              border: `1px solid ${colors.border}`,
              borderRadius: spacing.lg,
              background: colors.surface,
              display: "flex",
              flexDirection: "column",
              gap: spacing.md,
              minHeight: "240px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: spacing.md,
              }}
            >
              <h3 style={{ ...typography.cardTitle, margin: 0 }}>{track.title}</h3>
              <span style={{ ...typography.tag, color: colors.secondaryText }}>{track.status}</span>
            </div>

            <div
              style={{
                height: "8px",
                borderRadius: spacing.xxl,
                background: colors.background,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: index === 0 ? "72%" : index === 1 ? "44%" : "18%",
                  height: "100%",
                  background: colors.accent,
                  borderRadius: spacing.xxl,
                }}
              />
            </div>

            <p style={{ ...typography.body, color: colors.primaryText, margin: 0 }}>{track.note}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
