"use client";

import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

export default function TypingProcessingPage() {
  const router = useRouter();
  const { mode, answers, uploadedImages, completeProfile } = useTypingStore();

  return (
    <main style={{ padding: 24 }}>
      <h1>Processing</h1>
      <p>Mode: {mode ?? "not selected"}</p>
      <p>Answers saved: {Object.keys(answers).length}</p>
      <p>Images saved: {uploadedImages.length}</p>
      <button
        onClick={() => {
          completeProfile({
            kibbe: "Soft Natural",
            season: "Soft Autumn",
            essence: ["Natural", "Romantic"],
            confidence: 0.81,
          });
          router.push("/typing/result");
        }}
      >
        See result
      </button>
    </main>
  );
}
