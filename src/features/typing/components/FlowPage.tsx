"use client";

import { editorialPageStyle, typingTokens } from "./uiTokens";
import { useTypingPageFX } from "./useTypingPageFX";

export function FlowPage({ children }: { children: React.ReactNode }) {
  const { containerStyle } = useTypingPageFX();
  return (
    <main style={{ ...editorialPageStyle, ...containerStyle }} className="typing-flow-page">
      {children}
      <style>{`
        .typing-flow-page{max-width:980px;margin:0 auto;padding:${typingTokens.spacing.lg}px;}
        .typing-flow-page button{transition:transform 180ms ease,background-color 180ms ease,border-color 180ms ease,opacity 180ms ease;cursor:pointer}
        .typing-flow-page button:active{transform:scale(.97)}
        @media (max-width: 900px){.typing-flow-page{padding:16px}}
        @media (max-width: 640px){.typing-flow-page{padding:12px}.typing-flow-page h1{font-size:clamp(1.4rem,4vw,1.8rem)}}
      `}</style>
    </main>
  );
}
