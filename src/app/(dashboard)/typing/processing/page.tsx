"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";
import { ProcessingIndicator } from "@/features/typing/components/ProcessingIndicator";

export default function TypingProcessingPage() {
  const router = useRouter();
  const { completeProfile } = useTypingStore();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      completeProfile({
        kibbe: "Soft Natural",
        season: "Soft Autumn",
        essence: ["Natural", "Romantic"],
        confidence: 0.81,
      });
      router.replace("/typing/result");
    }, 2400);

    return () => window.clearTimeout(timeoutId);
  }, [completeProfile, router]);

  return (
    <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: 24 }}>
      <section style={{ textAlign: "center", maxWidth: 460 }}>
        <h1 style={{ marginBottom: 10 }}>Analyzing your inputs</h1>
        <p style={{ marginTop: 0, color: typingTokens.color.muted }}>We are processing your quiz and image signals to build your profile.</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
          <ProcessingIndicator />
        </div>
      </section>
    </main>
  );
}
