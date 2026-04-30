"use client";

import Link from "next/link";
import { useTypingStore } from "@/lib/typing-state";

export default function TypingResultPage() {
  const { isComplete, profile } = useTypingStore();

  return (
    <main style={{ padding: 24 }}>
      <h1>Result</h1>
      <p>Status: {isComplete ? "Complete" : "Incomplete"}</p>
      {profile && <p>{profile.kibbe} · {profile.season}</p>}
      <ul>
        <li><Link href="/typing/refine">Refine analysis</Link></li>
        <li><Link href="/typing">Go to profile</Link></li>
      </ul>
    </main>
  );
}
