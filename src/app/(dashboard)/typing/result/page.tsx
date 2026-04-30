import Link from "next/link";

export default function TypingResultPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Result</h1>
      <p>Your result is ready.</p>
      <ul>
        <li><Link href="/typing/refine">Refine analysis</Link></li>
        <li><Link href="/typing">Go to profile</Link></li>
      </ul>
    </main>
  );
}
