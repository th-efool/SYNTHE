STEP 2: SHARED COMPONENT FOUNDATION

INITIALIZE drizzle with postrgress \& prisma with MonoDB \& use them for schema



This is tailored to your current structure:



/components/global

/components/ui

/components/theme

/components/landing



We will ONLY build inside /components/ui + minimal global additions.



\# STEP 2 — SHARED COMPONENT FOUNDATION



\## 🎯 OBJECTIVE



Create a set of reusable UI components that will be used across ALL pages.



These components must be:



\- clean

\- minimal

\- unopinionated (no heavy styling yet)

\- consistent in API



This step defines the \*\*core UI vocabulary of the app\*\*



\---



\## ⚠️ RULES



\- DO NOT apply full design system yet

\- DO NOT over-style components

\- DO NOT hardcode layout logic inside components

\- KEEP components flexible and reusable



\---



\# 📁 1. WHERE TO BUILD



Use:





/components/ui





\---



\## Create sub-structure:





/components/ui

/cards

/elements

/feedback

/overlay

/layout





\---



\# 🧩 2. CORE COMPONENTS



\---



\## 🔥 2.1 ProductCard (MOST IMPORTANT)



\### Path:



/components/ui/cards/ProductCard.tsx





\---



\### Props:



```ts

type ProductCardProps = {

&#x20; id: string

&#x20; name: string

&#x20; image: string

&#x20; tags?: string\[]

&#x20; description?: string

}

Structure:

Image container

Title

Tags (optional)

Description (optional)

Wrapper div

Behavior:

clickable → routes to /product/\[id]

no hover animation yet

🔥 2.2 OutfitCard

Path:

/components/ui/cards/OutfitCard.tsx

Props:

type OutfitCardProps = {

&#x20; items: {

&#x20;   id: string

&#x20;   image: string

&#x20; }\[]

&#x20; title?: string

}

Structure:

2–4 images grouped

optional title

🔹 2.3 SectionHeader

Path:

/components/ui/elements/SectionHeader.tsx

Props:

type SectionHeaderProps = {

&#x20; title: string

&#x20; subtitle?: string

}

Structure:

h2 title

optional paragraph

🔹 2.4 Button

Path:

/components/ui/elements/Button.tsx

Props:

type ButtonProps = {

&#x20; children: React.ReactNode

&#x20; onClick?: () => void

}

Structure:

simple button wrapper

no variants yet

🔹 2.5 Badge / Tag

Path:

/components/ui/elements/Tag.tsx

Props:

type TagProps = {

&#x20; label: string

}

Structure:

small inline element

used for:

Kibbe

Season

Essence

🔹 2.6 ImageContainer

Path:

/components/ui/elements/ImageContainer.tsx

Purpose:



Standardize image rendering



Props:

type ImageContainerProps = {

&#x20; src: string

&#x20; alt?: string

}

Structure:

wrapper div

image inside

🧱 3. LAYOUT HELPERS

🔹 3.1 Grid

Path:

/components/ui/layout/Grid.tsx

Props:

type GridProps = {

&#x20; children: React.ReactNode

}

Behavior:

simple wrapper for layout grids

no styling complexity yet

🧠 4. FEEDBACK COMPONENTS

🔹 4.1 EmptyState

Path:

/components/ui/feedback/EmptyState.tsx

Props:

type EmptyStateProps = {

&#x20; message: string

}

🔹 4.2 LoadingState

Path:

/components/ui/feedback/LoadingState.tsx

Behavior:

simple “Loading…” text or spinner placeholder

🧩 5. OVERLAY COMPONENTS

🔹 5.1 Modal

Path:

/components/ui/overlay/Modal.tsx

Props:

type ModalProps = {

&#x20; isOpen: boolean

&#x20; onClose: () => void

&#x20; children: React.ReactNode

}

🔹 5.2 Drawer (for Cart / Mobile later)

Path:

/components/ui/overlay/Drawer.tsx

Props:

type DrawerProps = {

&#x20; isOpen: boolean

&#x20; onClose: () => void

&#x20; children: React.ReactNode

}

🧠 6. USAGE TEST (IMPORTANT)



After creating components:



Update /explore/page.tsx



Use:



ProductCard

SectionHeader

Grid

Example:

import { ProductCard } from "@/components/ui/cards/ProductCard"

import { SectionHeader } from "@/components/ui/elements/SectionHeader"

import { Grid } from "@/components/ui/layout/Grid"

import { mockProducts } from "@/lib/mockData"



export default function ExplorePage() {

&#x20; return (

&#x20;   <div>

&#x20;     <SectionHeader title="Explore" />



&#x20;     <Grid>

&#x20;       {mockProducts.map((product) => (

&#x20;         <ProductCard key={product.id} {...product} />

&#x20;       ))}

&#x20;     </Grid>

&#x20;   </div>

&#x20; )

}

🚫 DO NOT DO

No animations

No hover effects

No color system yet

No spacing refinement

No responsiveness tweaks yet

✅ SUCCESS STATE



You now have:



reusable UI components

consistent structure

no duplication across pages

🧠 WHAT THIS ENABLES



Next step (Step 3):



You will apply:



visual identity → across all components at once



Instead of fixing UI repeatedly.





\---



\# 🔥 Why this step is CRITICAL



Without this:



```text

you build pages → duplicate UI → inconsistent feel → messy scaling



With this:



you build system → reuse → scale cleanly → premium feel later

