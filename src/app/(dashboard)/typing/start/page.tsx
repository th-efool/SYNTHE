import Link from "next/link";

export default function TypingStartPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Start Analysis</h1>
      <p>Begin your typing flow.</p>
      <Link href="/typing/mode">Continue to mode selection</Link>
    </main>
  );
}
