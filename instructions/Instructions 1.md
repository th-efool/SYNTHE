

\# 📄 ✅ `INSTRUCTIONS.md` — STEP 1 (ADAPTED TO YOUR PROJECT)



This version:



\* respects your `/src` structure

\* respects `(dashboard)` grouping

\* doesn’t break your existing landing page

\* extends cleanly



\---



```md

\# STEP 1 — FULL APP SHELL (ADAPTED TO CURRENT STRUCTURE)



\## 🎯 OBJECTIVE



Extend the current project into a \*\*fully navigable frontend skeleton\*\* using the existing folder structure.



Do NOT restructure the project.



Do NOT move existing files.



Only ADD missing pages, layout wiring, and minimal placeholders.



\---



\## ⚠️ CORE RULES



\- Respect existing folders:

&#x20; - `/app`

&#x20; - `/components`

&#x20; - `/lib`

&#x20; - `/hooks`

&#x20; - `/constants`

&#x20; - `/redux` (leave untouched)

&#x20; - `/react-query` (leave untouched)



\- Do NOT redesign landing page (`/app/page.tsx`)

\- Do NOT introduce styling changes

\- Do NOT overbuild logic



This is STRUCTURE ONLY.



\---



\# 🧱 1. ROUTING STRUCTURE (USE EXISTING GROUPS)



You already use:



```



/app

/(auth)

/(dashboard)



```



We will extend `(dashboard)`.



\---



\## ✅ ADD THESE ROUTES INSIDE:



```



/app/(dashboard)



```



\### Create:



```



/explore/page.tsx

/product/\[id]/page.tsx

/cart/page.tsx

/checkout/page.tsx

/wardrobe/page.tsx

/typing/page.tsx



```



\---



\## 📌 FINAL STRUCTURE



```



/app

layout.tsx

page.tsx (landing — KEEP AS IS)



/(auth)

page.tsx



/(dashboard)

/dashboard (existing)

/profile (existing)

/sessions (existing)

/settings (existing)



```

/explore/page.tsx

/product/\[id]/page.tsx

/cart/page.tsx

/checkout/page.tsx

/wardrobe/page.tsx

/typing/page.tsx

```



```



\---



\# 🧩 2. GLOBAL LAYOUT (KEEP + EXTEND)



You already have:



```



/app/layout.tsx



```



\---



\## MODIFY IT MINIMALLY:



Wrap children with:



\- Header

\- Footer



\---



\### Import from:



```



/components/global



````



\---



\### Ensure:



```tsx

<Header />

<main>{children}</main>

<Footer />

````



\---



NO styling changes.



\---



\# 🧭 3. USE EXISTING COMPONENT STRUCTURE



You already have:



```

/components

&#x20; /global

&#x20; /ui

&#x20; /theme

&#x20; /landing

```



\---



\## ✅ ADD:



\### `/components/global/Header.tsx`



Include:



\* Logo / SYNTHE

\* Links:



```

Explore

Typing

Wardrobe

Cart

```



Use `next/link`



\---



\### `/components/global/Footer.tsx`



Minimal:



\* SYNTHE

\* © placeholder



\---



DO NOT style heavily.



\---



\# 📄 4. CREATE PAGE SHELLS (STRICT FORMAT)



Each page must:



\* have `<h1>`

\* have 1-line description

\* confirm routing works



\---



\## 🔹 `/explore/page.tsx`



```tsx

export default function ExplorePage() {

&#x20; return (

&#x20;   <div>

&#x20;     <h1>Explore</h1>

&#x20;     <p>Curated product feed will appear here</p>

&#x20;   </div>

&#x20; )

}

```



\---



\## 🔹 `/product/\[id]/page.tsx`



```tsx

export default function ProductPage({ params }) {

&#x20; return (

&#x20;   <div>

&#x20;     <h1>Product Page</h1>

&#x20;     <p>Product ID: {params.id}</p>

&#x20;   </div>

&#x20; )

}

```



\---



\## 🔹 `/cart/page.tsx`



```tsx

export default function CartPage() {

&#x20; return (

&#x20;   <div>

&#x20;     <h1>Cart</h1>

&#x20;     <p>Your selected items</p>

&#x20;   </div>

&#x20; )

}

```



\---



\## 🔹 `/checkout/page.tsx`



```tsx

export default function CheckoutPage() {

&#x20; return (

&#x20;   <div>

&#x20;     <h1>Checkout</h1>

&#x20;     <p>Complete your purchase</p>

&#x20;   </div>

&#x20; )

}

```



\---



\## 🔹 `/wardrobe/page.tsx`



```tsx

export default function WardrobePage() {

&#x20; return (

&#x20;   <div>

&#x20;     <h1>Wardrobe</h1>

&#x20;     <p>Your saved items and outfits</p>

&#x20;   </div>

&#x20; )

}

```



\---



\## 🔹 `/typing/page.tsx`



```tsx

export default function TypingPage() {

&#x20; return (

&#x20;   <div>

&#x20;     <h1>Style Analysis</h1>

&#x20;     <p>Kibbe, Color Season, Essence test will go here</p>

&#x20;   </div>

&#x20; )

}

```



\---



\# 🧠 5. MOCK DATA (USE EXISTING `/lib`)



You already have:



```

/lib

&#x20; /utils

&#x20; /validators

&#x20; /errors

```



\---



\## ✅ ADD:



\### `/lib/mockData.ts`



```ts

export const mockProducts = \[

&#x20; {

&#x20;   id: "1",

&#x20;   name: "Soft Linen Jacket",

&#x20;   image: "/placeholder.jpg"

&#x20; },

&#x20; {

&#x20;   id: "2",

&#x20;   name: "Relaxed Warm Set",

&#x20;   image: "/placeholder.jpg"

&#x20; }

]



export const mockUserProfile = {

&#x20; kibbe: "Soft Natural",

&#x20; season: "Soft Autumn",

&#x20; essence: \["Natural", "Romantic"]

}

```



\---



\# 🧠 6. HOOK (USE EXISTING `/hooks`)



\### Add:



```

/hooks/useUserProfile.ts

```



```ts

import { mockUserProfile } from "@/lib/mockData"



export function useUserProfile() {

&#x20; return mockUserProfile

}

```



\---



\# 🔗 7. NAVIGATION VERIFICATION



From Header:



Ensure working links:



\* `/explore`

\* `/typing`

\* `/wardrobe`

\* `/cart`



Also test:



\* `/product/1`



\---



\# 🧪 8. FINAL CHECKLIST



You should now have:



✔ All pages accessible

✔ No routing errors

✔ No console errors

✔ Landing page untouched

✔ Clean integration with existing structure



\---



\# 🚫 DO NOT DO (CRITICAL)



\* No UI polish

\* No Tailwind changes

\* No animations

\* No product grid yet

\* No filters

\* No backend integration



\---



\# ✅ SUCCESS STATE



App feels like:



\* complete structure

\* empty but intentional

\* ready for real build



NOT:



\* half-built UI

\* broken navigation

\* overdesigned early stage



````



