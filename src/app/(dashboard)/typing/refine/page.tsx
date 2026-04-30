import Link from "next/link";

export default function TypingRefinePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Refine</h1>
      <p>Add more details to improve accuracy.</p>
      <Link href="/typing/processing">Re-run processing</Link>
    </main>
  );
}
