"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type TypingMode = "quiz" | "image" | "pro" | null;

export type MockProfile = {
  kibbe: string;
  season: string;
  essence: string[];
  confidence: number;
};

type TypingState = {
  mode: TypingMode;
  currentStep: number;
  answers: Record<string, any>;
  uploadedImages: string[];
  isComplete: boolean;
  profile: MockProfile | null;
};

type TypingStore = TypingState & {
  selectMode: (mode: TypingMode) => void;
  saveAnswer: (key: string, value: any) => void;
  saveAnswers: (values: Record<string, any>) => void;
  addImagePreview: (image: string) => void;
  removeImagePreview: (image: string) => void;
  nextStep: () => void;
  setStep: (step: number) => void;
  resetFlow: () => void;
  completeProfile: (profile: MockProfile) => void;
};

const initialState: TypingState = {
  mode: null,
  currentStep: 1,
  answers: {},
  uploadedImages: [],
  isComplete: false,
  profile: null,
};

const TypingStoreContext = createContext<TypingStore | null>(null);

export function TypingStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<TypingState>(initialState);

  const store = useMemo<TypingStore>(
    () => ({
      ...state,
      selectMode: (mode) =>
        setState((prev) => ({ ...prev, mode, currentStep: 1, isComplete: false })),
      saveAnswer: (key, value) =>
        setState((prev) => ({ ...prev, answers: { ...prev.answers, [key]: value } })),
      saveAnswers: (values) =>
        setState((prev) => ({ ...prev, answers: { ...prev.answers, ...values } })),
      addImagePreview: (image) =>
        setState((prev) => ({
          ...prev,
          uploadedImages: prev.uploadedImages.includes(image)
            ? prev.uploadedImages
            : [...prev.uploadedImages, image],
        })),
      removeImagePreview: (image) =>
        setState((prev) => ({
          ...prev,
          uploadedImages: prev.uploadedImages.filter((item) => item !== image),
        })),
      nextStep: () =>
        setState((prev) => ({ ...prev, currentStep: prev.currentStep + 1 })),
      setStep: (step) =>
        setState((prev) => ({ ...prev, currentStep: Math.max(1, step) })),
      resetFlow: () => setState(initialState),
      completeProfile: (profile) =>
        setState((prev) => ({ ...prev, isComplete: true, profile })),
    }),
    [state],
  );

  return <TypingStoreContext.Provider value={store}>{children}</TypingStoreContext.Provider>;
}

export function useTypingStore() {
  const context = useContext(TypingStoreContext);
  if (!context) {
    throw new Error("useTypingStore must be used within TypingStoreProvider");
  }
  return context;
}
