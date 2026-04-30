"use client";

import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

export default function TypingStartPage() {
  const router = useRouter();
  const { resetFlow } = useTypingStore();

  return (
    <main style={{ padding: 24 }}>
      <h1>Start Analysis</h1>
      <p>Begin your typing flow.</p>
      <button onClick={() => { resetFlow(); router.push("/typing/mode"); }}>
        Continue to mode selection
      </button>
    </main>
  );
}
