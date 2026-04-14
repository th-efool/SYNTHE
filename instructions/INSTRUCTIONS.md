\## `INSTRUCTIONS.md`



```md

\# OBJECTIVE

Resume and COMPLETE the interrupted landing page integration from `instructions/landingpage/`

into the main Next.js App Router project.



This is NOT a copy-paste task.

This is a STRUCTURAL ADAPTATION task.



The goal is:

\- Preserve design + behavior

\- Refactor structure to match THIS project

\- Avoid duplication, dead code, and mismatched patterns



\---



\# CURRENT STATE (CRITICAL CONTEXT)



\- Source landing page (Vite React):

&#x20; `/instructions/landingpage/\*`



\- Target project (Next.js App Router):

&#x20; `/src/app/\*`

&#x20; `/src/components/\*`



\- Partial migration already attempted but:

&#x20; - Architecture may have been overridden incorrectly

&#x20; - Some files may be redundant / mislocated

&#x20; - Styling + animations may be inconsistent



Reference: :contentReference\[oaicite:0]{index=0}



\---



\# HARD RULES (DO NOT VIOLATE)



1\. DO NOT blindly replicate folder structure from Vite project

2\. DO NOT introduce duplicate components

3\. DO NOT override existing working architecture

4\. DO NOT create unnecessary wrappers or abstractions

5\. KEEP token usage minimal → no verbose rewrites



\---



\# TARGET ARCHITECTURE (ENFORCE THIS)



\## Pages

\- Landing page MUST live at:

&#x20; `src/app/page.tsx`



\- REMOVE or IGNORE:

&#x20; `src/app/(landing)/page.tsx` (route group conflict)



\---



\## Components

ALL landing components go under:

```



src/components/landing/



```



Allowed components:

\- Navbar

\- Hero

\- Approach

\- System

\- Wardrobe

\- Transformation

\- Commerce

\- CTA

\- Footer



\---



\## Shared Components (REUSE IF EXISTS)



Before creating anything:

\- CHECK:

&#x20; `src/components/ui/\*`

&#x20; `src/components/global/\*`



If equivalent exists:

→ REUSE instead of recreating



\---



\## Styling System



SOURCE:

\- `instructions/landingpage/src/index.css`

\- `tailwind.config.js`



TARGET:

\- `src/app/globals.css`



\### ACTIONS:

\- Merge ONLY required styles

\- Preserve:

&#x20; - animations

&#x20; - utility classes

\- REMOVE:

&#x20; - redundant resets

&#x20; - conflicting base styles



\---



\## Animations / Effects



\- Replace any DOM-based animation hacks with:

&#x20; → React-safe logic

&#x20; → IntersectionObserver hook



If not already clean:

Create:

```



src/hooks/useScrollReveal.ts



```



\---



\## Component Conversion Rules



\### JSX → TSX

\- Convert ALL `.jsx` → `.tsx`

\- Add minimal typing (no overengineering)



\### Vite-specific code → REMOVE

\- Remove:

&#x20; - `vite.config`

&#x20; - direct DOM mounts

&#x20; - unused imports



\---



\## Layout Integration



Update:

```



src/app/layout.tsx



```



Ensure:

\- Fonts properly loaded

\- Metadata updated

\- No duplicated `<html>` or `<body>` logic



\---



\## Assembly



`src/app/page.tsx` should:



\- Import ONLY from:

&#x20; `@/components/landing/\*`



\- Compose in order:

&#x20; Navbar

&#x20; Hero

&#x20; Approach

&#x20; System

&#x20; Wardrobe

&#x20; Transformation

&#x20; Commerce

&#x20; CTA

&#x20; Footer



NO extra wrappers unless necessary.



\---



\# CLEANUP PHASE (MANDATORY)



After integration:



1\. DELETE unused files from:

&#x20;  `/instructions/landingpage/`



2\. REMOVE:

&#x20;  - duplicate styles

&#x20;  - unused components

&#x20;  - dead imports



3\. ENSURE:

&#x20;  - no conflicting CSS

&#x20;  - no duplicate layouts



\---



\# VALIDATION CHECKLIST



Before finishing, VERIFY:



\- \[ ] No duplicate components exist

\- \[ ] No unused imports remain

\- \[ ] No Vite-specific code remains

\- \[ ] Page renders correctly in Next.js structure

\- \[ ] Styling is consistent (no overrides breaking UI)

\- \[ ] Animations work without layout shift issues



\---



\# OUTPUT FORMAT



Return ONLY:



1\. Files modified

2\. Files created

3\. Files deleted

4\. Any assumptions made (1–2 lines max)



NO explanations.

NO commentary.

NO verbosity.



\---



\# PRIORITY



Correct structure > Visual perfection







