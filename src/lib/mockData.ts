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
    category: "outerwear",
    price: 148,
    currency: "USD",
    location: "Portland, OR",
    rating: 4.6,
    inStock: true,
    brand: "North Thread",
    material: "linen blend",
  },
  {
    id: "2",
    name: "Relaxed Warm Set",
    image: productImages["2"],
    tags: ["Natural", "Warm"],
    description: "Low-contrast texture built for tonal harmony.",
    category: "tops",
    price: 112,
    currency: "USD",
    location: "Austin, TX",
    rating: 4.4,
    inStock: true,
    brand: "Sable Form",
    material: "cotton knit",
  },
  {
    id: "3",
    name: "Muted Drape Blouse",
    image: productImages["3"],
    tags: ["Soft", "Romantic"],
    description: "Fluid drape keeps structure soft and balanced.",
    category: "tops",
    price: 86,
    currency: "USD",
    location: "San Francisco, CA",
    rating: 4.7,
    inStock: false,
    brand: "Atelier Vale",
    material: "viscose",
  },
  {
    id: "4",
    name: "Earth Tone Trousers",
    image: productImages["4"],
    tags: ["Autumn", "Natural"],
    description: "Grounded line with gentle width through leg.",
    category: "pants",
    price: 132,
    currency: "USD",
    location: "Nashville, TN",
    rating: 4.5,
    inStock: true,
    brand: "Field & Grain",
    material: "twill",
  },
  {
    id: "5",
    name: "Warm Knit Midi Dress",
    image: productImages["5"],
    tags: ["Warm", "Curved"],
    description: "Soft contour with muted warmth near face.",
    category: "dresses",
    price: 159,
    currency: "USD",
    location: "Charleston, SC",
    rating: 4.8,
    inStock: true,
    brand: "Marlowe",
    material: "merino blend",
  },
  {
    id: "6",
    name: "Textured Suede Overshirt",
    image: productImages["6"],
    tags: ["Texture", "Relaxed"],
    description: "Tactile layer that supports natural essence.",
    category: "outerwear",
    price: 174,
    currency: "USD",
    location: "Denver, CO",
    rating: 4.3,
    inStock: false,
    brand: "Stone Harbor",
    material: "suede",
  },
];

export const mockCategories = [...new Set(mockProducts.map((product) => product.category))];

export const mockLocations = [...new Set(mockProducts.map((product) => product.location))];

const prices = mockProducts.map((product) => product.price);
export const priceBounds = {
  min: Math.min(...prices),
  max: Math.max(...prices),
};

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

export type WardrobeItem = (typeof mockProducts)[number];

export type MockLook = {
  id: string;
  title: string;
  itemIds: string[];
  note?: string;
  updatedAt: string;
};

export type MoodboardPin =
  | { id: string; type: "product"; productId: string; x: number; y: number; w: number; h: number }
  | { id: string; type: "look"; lookId: string; x: number; y: number; w: number; h: number }
  | { id: string; type: "note"; text: string; x: number; y: number; w: number; h: number }
  | { id: string; type: "color"; hex: string; label: string; x: number; y: number; w: number; h: number };

export type MockMoodboard = {
  id: string;
  title: string;
  description: string;
  pins: MoodboardPin[];
  updatedAt: string;
};

export const mockWardrobeItems: WardrobeItem[] = [...mockProducts];

export const mockLooks: MockLook[] = [
  {
    id: "look-w-1",
    title: "Coffee Meeting Soft Structure",
    itemIds: ["1", "3", "4"],
    note: "Keep neckline open and palette tonal.",
    updatedAt: "2026-04-10T09:10:00.000Z",
  },
  {
    id: "look-w-2",
    title: "Weekend Texture Layer",
    itemIds: ["2", "6"],
    note: "Best with matte leather accessories.",
    updatedAt: "2026-04-11T16:35:00.000Z",
  },
  {
    id: "look-w-3",
    title: "Soft Date Night Contrast",
    itemIds: ["5", "1"],
    updatedAt: "2026-04-12T18:20:00.000Z",
  },
];

export const mockMoodboards: MockMoodboard[] = [
  {
    id: "board-1",
    title: "Warm Weekend Direction",
    description: "Relaxed layers + earthy neutrals.",
    updatedAt: "2026-04-13T11:40:00.000Z",
    pins: [
      { id: "pin-1", type: "product", productId: "1", x: 1, y: 1, w: 4, h: 4 },
      { id: "pin-2", type: "product", productId: "6", x: 5, y: 1, w: 4, h: 4 },
      { id: "pin-3", type: "look", lookId: "look-w-2", x: 1, y: 5, w: 5, h: 4 },
      { id: "pin-4", type: "note", text: "Prioritize brushed textures and low contrast.", x: 6, y: 5, w: 3, h: 2 },
      { id: "pin-5", type: "color", hex: "#8D6E56", label: "Toffee", x: 6, y: 7, w: 3, h: 2 },
    ],
  },
  {
    id: "board-2",
    title: "Soft Work Capsule",
    description: "Polished but unforced line.",
    updatedAt: "2026-04-12T14:12:00.000Z",
    pins: [
      { id: "pin-6", type: "product", productId: "4", x: 1, y: 1, w: 4, h: 4 },
      { id: "pin-7", type: "look", lookId: "look-w-1", x: 5, y: 1, w: 4, h: 4 },
      { id: "pin-8", type: "color", hex: "#C8B49A", label: "Oat", x: 1, y: 5, w: 2, h: 2 },
      { id: "pin-9", type: "note", text: "Add soft metallic jewelry for lift.", x: 3, y: 5, w: 6, h: 2 },
    ],
  },
];
