"use client";

import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

export default function TypingRefinePage() {
  const router = useRouter();
  const { saveAnswers } = useTypingStore();

  return (
    <main style={{ padding: 24 }}>
      <h1>Refine</h1>
      <p>Add more details to improve accuracy.</p>
      <button onClick={() => { saveAnswers({ refinement: "requested" }); router.push("/typing/processing"); }}>
        Re-run processing
      </button>
    </main>
  );
}
