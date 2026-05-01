"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

export default function TypingResultPage() {
  const router = useRouter();
  const { isComplete, profile } = useTypingStore();

  useEffect(() => {
    if (!profile || !isComplete) {
      router.replace("/typing/start");
    }
  }, [isComplete, profile, router]);

  if (!profile || !isComplete) return null;

  return (
    <main style={{ padding: 24 }}>
      <h1>Your Result</h1>
      <p>{profile.kibbe} · {profile.season}</p>
      <p>Essence: {profile.essence.join(" + ")}</p>
      <p>Confidence: {Math.round(profile.confidence * 100)}%</p>
      <button onClick={() => router.push("/typing")}>Go to Profile Control</button>
    </main>
  );
}
