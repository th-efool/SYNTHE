import Link from "next/link";

export default function TypingModePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Choose a Mode</h1>
      <ul>
        <li><Link href="/typing/quiz">Take guided quiz</Link></li>
        <li><Link href="/typing/upload">Upload photos</Link></li>
      </ul>
    </main>
  );
}
