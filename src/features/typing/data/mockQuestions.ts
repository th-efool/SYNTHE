export type MockQuestion = {
  id: string;
  prompt: string;
  options: string[];
};

export const mockQuestions: MockQuestion[] = [
  {
    id: "silhouette",
    prompt: "Which silhouette feels most natural on your body?",
    options: ["Relaxed drape", "Tailored structure", "Sharp geometric cuts", "Soft fitted lines"],
  },
  {
    id: "contrast",
    prompt: "What color contrast level flatters you most?",
    options: ["Low contrast", "Medium contrast", "High contrast"],
  },
  {
    id: "details",
    prompt: "Which design details suit your face and features best?",
    options: ["Minimal", "Organic/soft", "Bold statement", "Classic symmetry"],
  },
];
