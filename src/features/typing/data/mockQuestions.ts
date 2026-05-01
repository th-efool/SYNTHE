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
  {
    id: "fabric_weight",
    prompt: "Which fabric weight looks best on you?",
    options: ["Light and airy", "Medium and fluid", "Heavy and structured"],
  },
  {
    id: "neckline",
    prompt: "Which neckline is most flattering?",
    options: ["Rounded", "Open/V-neck", "High or sharp necklines"],
  },
  {
    id: "print_scale",
    prompt: "What print scale tends to work best?",
    options: ["Small and subtle", "Medium balanced", "Large and bold"],
  },
  {
    id: "accessories",
    prompt: "Which accessories harmonize best with your features?",
    options: ["Delicate", "Moderate", "Statement"],
  },
  {
    id: "line_quality",
    prompt: "What line quality feels most aligned in outfits?",
    options: ["Soft curved lines", "Mixed/balanced lines", "Crisp angular lines"],
  },
  {
    id: "color_depth",
    prompt: "Which color depth is most flattering?",
    options: ["Light/pastel", "Medium muted", "Deep/rich"],
  },
  {
    id: "overall_impression",
    prompt: "What overall styling impression feels most like you?",
    options: ["Natural ease", "Elegant classic", "Dramatic edge", "Romantic softness"],
  },
];
