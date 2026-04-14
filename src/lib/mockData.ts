export const mockProducts = [
  {
    id: "1",
    name: "Soft Linen Jacket",
    image: "/placeholder.jpg",
    tags: ["Soft Natural", "Soft Autumn"],
    description: "Relaxed tailoring with warm muted depth.",
  },
  {
    id: "2",
    name: "Relaxed Warm Set",
    image: "/placeholder.jpg",
    tags: ["Natural", "Warm"],
    description: "Low-contrast texture built for tonal harmony.",
  },
  {
    id: "3",
    name: "Muted Drape Blouse",
    image: "/placeholder.jpg",
    tags: ["Soft", "Romantic"],
    description: "Fluid drape keeps structure soft and balanced.",
  },
  {
    id: "4",
    name: "Earth Tone Trousers",
    image: "/placeholder.jpg",
    tags: ["Autumn", "Natural"],
    description: "Grounded line with gentle width through leg.",
  },
  {
    id: "5",
    name: "Warm Knit Midi Dress",
    image: "/placeholder.jpg",
    tags: ["Warm", "Curved"],
    description: "Soft contour with muted warmth near face.",
  },
  {
    id: "6",
    name: "Textured Suede Overshirt",
    image: "/placeholder.jpg",
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
      { id: "1", image: "/placeholder.jpg" },
      { id: "4", image: "/placeholder.jpg" },
      { id: "6", image: "/placeholder.jpg" },
    ],
  },
  {
    id: "look-2",
    title: "Warm Draped Balance",
    productId: "3",
    items: [
      { id: "3", image: "/placeholder.jpg" },
      { id: "5", image: "/placeholder.jpg" },
      { id: "2", image: "/placeholder.jpg" },
    ],
  },
  {
    id: "look-3",
    title: "Muted Weekend Set",
    productId: "2",
    items: [
      { id: "2", image: "/placeholder.jpg" },
      { id: "6", image: "/placeholder.jpg" },
    ],
  },
];
