import { colors } from "@/components/theme/colors";
import { typography } from "@/components/theme/typography";

export function LoadingState() {
  return (
    <p
      className="ui-enter"
      style={{
        ...typography.body,
        color: colors.secondaryText,
      }}
    >
      Loading...
    </p>
  );
}
