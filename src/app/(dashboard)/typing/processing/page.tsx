import Link from "next/link";

export default function TypingProcessingPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Processing</h1>
      <p>We are generating your analysis.</p>
      <Link href="/typing/result">See result</Link>
    </main>
  );
}
