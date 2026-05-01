"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

export default function TypingModePage() {
  const router = useRouter();
  const { selectMode } = useTypingStore();

  return (
    <main style={editorialPageStyle}>
      <h1>Choose a Mode</h1>
      <ul>
        <li><button onClick={() => { selectMode("quiz"); router.push("/typing/quiz"); }}>Take guided quiz</button></li>
        <li><button onClick={() => { selectMode("image"); router.push("/typing/upload"); }}>Upload photos</button></li>
        <li><button onClick={() => { selectMode("pro"); router.push("/typing/processing"); }}>Book professional typing</button></li>
      </ul>
    </main>
  );
}
