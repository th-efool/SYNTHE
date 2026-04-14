type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return <span>{label}</span>;
}
