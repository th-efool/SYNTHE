VISUAL SYSTEM (APPLY LANDING DNA)



This is strictly controlled styling injection into your existing components.



It must:



match your landing page

NOT introduce randomness

NOT break consistency

\# STEP 3 — VISUAL SYSTEM (APPLY LANDING DNA)



\## 🎯 OBJECTIVE



Apply a consistent, premium visual system across ALL components using the existing landing page as the source of truth.



This includes:



\- spacing system

\- typography hierarchy

\- color palette

\- borders \& surfaces

\- image treatment

\- motion rules



\---



\## ⚠️ CORE RULES



\- DO NOT invent new styles

\- DO NOT introduce random colors

\- DO NOT create multiple visual styles



Everything must feel like it came from ONE system:

→ the landing page



\---



\# 🎨 1. COLOR SYSTEM (LOCK THIS FIRST)



Define reusable tokens.



\---



\## 📁 Location:



/components/theme





\---



\## Create:



\### `colors.ts`



```ts

export const colors = {

&#x20; background: "#F9F6F0",

&#x20; surface: "#FFFFFF",

&#x20; primaryText: "#1A1512",

&#x20; secondaryText: "#8C8A79",

&#x20; mutedText: "#A69B91",



&#x20; accent: "#B87A5D",



&#x20; border: "#EAE6DF",

}

RULE:



Use ONLY these values.



No inline hex codes anywhere else.



📏 2. SPACING SYSTEM (REMOVE CHAOS)

Define scale:

export const spacing = {

&#x20; xs: "4px",

&#x20; sm: "8px",

&#x20; md: "12px",

&#x20; lg: "16px",

&#x20; xl: "24px",

&#x20; xxl: "40px",

}

APPLY:



Replace inconsistent spacing like:



gap-10

gap-12

mb-6

mt-16



WITH consistent scale usage.



RESULT:

tight → intentional → premium

🔤 3. TYPOGRAPHY SYSTEM

Define hierarchy:

Titles:

strong serif/editorial feel

Body:

clean, minimal sans

APPLY:

ProductCard:

Title → stronger contrast

Description → muted tone

RULE:

title > tag > description



Clear hierarchy always.



🧩 4. APPLY TO COMPONENTS

🔥 ProductCard (CRITICAL)

Update:

background → surface color

border → subtle

padding → consistent

Add:

clear spacing between:

image → title → tags → description

Tags:

use muted tone

small size

🔹 OutfitCard

tighter grouping

clean alignment

no clutter

🔹 Button



Define base:



minimal

no heavy gradients

subtle interaction

🔹 SectionHeader

strong title

lighter subtitle

consistent spacing below

🖼️ 5. IMAGE SYSTEM (IMPORTANT)

Apply:

soft rounded corners

no harsh edges

consistent container ratio

REMOVE:

random image sizes

inconsistent padding

🧱 6. BORDER + SURFACE RULES

Apply:

light borders only

no heavy shadows

Cards:

subtle elevation

not floating aggressively

✨ 7. MOTION SYSTEM (SUBTLE ONLY)

RULE:



All motion must be:



soft

upward

minimal

APPLY:

Entry animation:

opacity: 0 → 1

translateY: 20px → 0

Hover:

scale: 1 → 1.02

NO vertical jump

🧠 8. GLOBAL CONSISTENCY PASS



Ensure:



same spacing scale everywhere

same colors everywhere

same typography logic everywhere



NO:



random padding

inconsistent font sizes

color mismatches

🧪 9. TEST ON EXPLORE PAGE



Update:



/explore/page.tsx



Ensure:



ProductCard looks consistent

spacing feels tight

layout feels intentional

🚫 DO NOT DO

No complex animations

No gradients everywhere

No redesign of layout

No adding new UI patterns

✅ SUCCESS STATE



The app now:



visually matches landing page

feels consistent

looks premium already (even without features)

🧠 WHAT CHANGED



Before:



components exist but feel generic



After:



components feel designed and intentional

🚀 NEXT



Step 4 will:



→ turn explore page into actual intelligent product feed





\---



\# 🔥 Why this step is critical



This is where:



```text

structure → becomes identity

