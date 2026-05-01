"use client";

import { useEffect, useState } from "react";

export function useTypingPageFX() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return {
    containerStyle: {
      opacity: ready ? 1 : 0,
      transform: ready ? "translateY(0px)" : "translateY(10px)",
      transition: "opacity 220ms ease, transform 220ms ease",
    } as const,
  };
}
