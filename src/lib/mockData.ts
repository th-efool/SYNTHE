const productImages = {
  "1": "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=1200&q=80",
  "2": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  "3": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
  "4": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
  "5": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  "6": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
} as const;

export const mockProducts = [
  {
    id: "1",
    name: "Soft Linen Jacket",
    image: productImages["1"],
    tags: ["Soft Natural", "Soft Autumn"],
    description: "Relaxed tailoring with warm muted depth.",
  },
  {
    id: "2",
    name: "Relaxed Warm Set",
    image: productImages["2"],
    tags: ["Natural", "Warm"],
    description: "Low-contrast texture built for tonal harmony.",
  },
  {
    id: "3",
    name: "Muted Drape Blouse",
    image: productImages["3"],
    tags: ["Soft", "Romantic"],
    description: "Fluid drape keeps structure soft and balanced.",
  },
  {
    id: "4",
    name: "Earth Tone Trousers",
    image: productImages["4"],
    tags: ["Autumn", "Natural"],
    description: "Grounded line with gentle width through leg.",
  },
  {
    id: "5",
    name: "Warm Knit Midi Dress",
    image: productImages["5"],
    tags: ["Warm", "Curved"],
    description: "Soft contour with muted warmth near face.",
  },
  {
    id: "6",
    name: "Textured Suede Overshirt",
    image: productImages["6"],
    tags: ["Texture", "Relaxed"],
    description: "Tactile layer that supports natural essence.",
  },
];

export const mockUserProfile = {
  kibbe: "Soft Natural",
  season: "Soft Autumn",
  essence: ["Natural", "Romantic"],
};

export const mockOutfits = [
  {
    id: "look-1",
    title: "Soft Utility Layering",
    productId: "1",
    items: [
      { id: "1", image: productImages["1"] },
      { id: "4", image: productImages["4"] },
      { id: "6", image: productImages["6"] },
    ],
  },
  {
    id: "look-2",
    title: "Warm Draped Balance",
    productId: "3",
    items: [
      { id: "3", image: productImages["3"] },
      { id: "5", image: productImages["5"] },
      { id: "2", image: productImages["2"] },
    ],
  },
  {
    id: "look-3",
    title: "Muted Weekend Set",
    productId: "2",
    items: [
      { id: "2", image: productImages["2"] },
      { id: "6", image: productImages["6"] },
    ],
  },
];
