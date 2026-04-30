"use client";

import { TypingStoreProvider } from "@/lib/typing-state";

export default function TypingProvider({ children }: { children: React.ReactNode }) {
  return <TypingStoreProvider>{children}</TypingStoreProvider>;
}
