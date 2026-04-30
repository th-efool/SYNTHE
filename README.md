<div align="center">

# SYNTHE

**Fabric. Skin. Light. Find what naturally suits you.**

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux.js.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![Claude](https://img.shields.io/badge/Claude_API-D97757?style=flat-square&logo=anthropic&logoColor=white)](https://anthropic.com/)

[![Live](https://img.shields.io/badge/Live_Preview-synthe--topaz.vercel.app-brightgreen?style=flat-square)](https://synthe-topaz.vercel.app)
[![Status](https://img.shields.io/badge/Status-Early_Development-orange?style=flat-square)]()
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)]()

</div>

---

SYNTHE is an AI-powered fashion e-commerce platform that profiles users across three established visual analysis systems — body geometry, color theory, and style identity — and uses that compound profile to surface clothing, fabric, and looks that *actually work* for them. Not more options. The right ones.

---

## The Problem

Most fashion platforms optimize for breadth. They show you everything and let you filter. But the fundamental question — *does this work on me?* — is never answered. The shape might look fine on a hanger, wrong on your frame. The color might be technically nice, but pull flat against your skin. The vibe might be aspirational, but clash with how you naturally read to others.

SYNTHE answers that question before you browse.

---

## The Approach: Three Systems, One Direction

SYNTHE resolves your visual identity across three complementary frameworks. Each system asks a different question about the relationship between body, color, and presence.

```
Body Geometry  ──┐
Color Harmony  ──┼──▶  Compound Profile  ──▶  Matched Catalog
Style Identity ──┘
```

### ⌬ System 1 — Kibbe Body Type (Body Geometry System)

**What it answers:** How does fabric interact with your frame?

The Kibbe Body Type system defines 13 body types organized along a yin/yang spectrum — from sharp, angular Dramatic types to soft, rounded Romantic types, with blended types in between. The system evaluates skeletal structure (vertical line, bone structure), flesh (muscle/curve distribution), and facial features.

The key insight: clothing has geometry. A structured blazer with sharp shoulders creates a different silhouette than a drapey linen layer. Kibbe typing matches the geometry of fabric to the geometry of your frame — so clothes appear to belong on you rather than sit on top of you.

**The 13 Kibbe types:** Dramatic, Soft Dramatic, Theatrical Romantic, Romantic, Classic, Soft Classic, Dramatic Classic, Flamboyant Natural, Soft Natural, Natural, Flamboyant Gamine, Soft Gamine, Gamine.

Each maps to recommended silhouette lines, fabric weights, hem lengths, necklines, and pattern scales.

---

### ◉ System 2 — Seasonal Color Analysis (Color Harmony System)

**What it answers:** How does color behave against your skin?

Seasonal color analysis maps how a person's natural coloring (skin undertone, hair depth, eye contrast) responds to color across four dimensions: warmth/coolness, depth, clarity, and contrast.

| Season | Character | Sub-seasons |
|---|---|---|
| Spring | Warm + Light + Clear | Bright Spring, True Spring, Light Spring |
| Summer | Cool + Light + Muted | Light Summer, True Summer, Soft Summer |
| Autumn | Warm + Deep + Muted | Soft Autumn, True Autumn, Dark Autumn |
| Winter | Cool + Deep + Clear | Dark Winter, True Winter, Bright Winter |

When color matches your season, it reads as one unified look — skin looks clearer, features more defined. A wrong color drains the face or creates harsh contrast.

SYNTHE uses seasonal type to filter not just color, but fabric finish (matte, sheen, iridescent) and pattern saturation.

---

### ✦ System 3 — Kitchener Style Essence (Style Identity System)

**What it answers:** How do you visually read to others?

The Style Essence system captures the *gestalt* of a person's natural presence — the subtle visual energy that clothing either harmonizes with or fights against. Unlike Kibbe (physical structure) or color (tone), essence is about the visual impression your face and body communicate.

```
Yang ◀──────────────────────────────────────────────────────▶ Yin
Dramatic · Natural · Gamine · Classic · Romantic · Ingenue · Angelic
```

Most people carry a blend of two or three essences. SYNTHE identifies a primary and supporting essence to guide fabric choice, detail level, silhouette weight, and accessory scale.

---

## The Compound Profile

When all three systems resolve, the user receives a compound profile — the engine for all catalog filtering:

```
Example Profile:
  Kibbe:    Soft Natural
  Season:   Soft Autumn
  Essence:  Romantic + Natural

Resolved as:
  Silhouette:  Soft, unstructured drape (width + curve, not rigid)
  Color:       Warm, muted earth tones (camel, terracotta, olive, warm brown)
  Fabric:      Tactile, natural-fiber: linen, suede, brushed cotton, loose knit
  Detail:      Minimal, organic — no sharp tailoring, no delicate trims
  Presence:    Relaxed with softness — grounded, approachable, not austere
```

This profile isn't a mood board. It's a decision filter. Every piece in the catalog is tagged against all three systems, and the matched catalog shows only the intersection.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + PostCSS |
| **Auth** | NextAuth.js |
| **ORM** | Prisma |
| **Database** | PostgreSQL |
| **Client State** | Redux Toolkit |
| **Server State** | React Query (TanStack) |
| **AI — LLM** | Claude API (Anthropic) — explanation layer only |
| **AI — Vision** | Claude Vision / GPT-4o — multimodal feature extraction |
| **AI — Retrieval** | ChromaDB / FAISS — archetype vector store |
| **Deployment** | Vercel |

> The typing engine is not a simple LLM wrapper — see [Typing Engine](#typing-engine) below.

---

## Architecture

### Directory Structure

```
synthe/
├── public/
│   └── kibbietype.png
├── prisma/                          # DB schema & migrations
├── instructions/                    # Internal dev documentation
├── plan/                            # Product planning docs
├── src/
│   ├── app/
│   │   ├── (auth)/                  # Sign in / Sign up
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/           # Profile status + next actions
│   │   │   ├── typing/              # Guided typing flow
│   │   │   ├── wardrobe/            # Saved looks & wardrobe builder
│   │   │   ├── sessions/            # Session history + resume
│   │   │   └── explore/             # Profile-matched catalog
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx                 # Landing page
│   ├── backend/
│   │   ├── ai/                      # Typing engine (see below)
│   │   │   ├── pipeline/            # Main orchestrator
│   │   │   ├── agents/              # Feature extraction, scoring, resolver
│   │   │   ├── memory/              # Session state
│   │   │   └── retrieval/           # Vector store + embeddings
│   │   ├── api/                     # Route handlers
│   │   ├── domain/                  # Business logic (profiles, products, sessions)
│   │   ├── infrastructure/          # DB clients, external services
│   │   └── middleware/              # Auth guards, rate limiting
│   ├── components/
│   │   ├── global/                  # Nav, layout wrappers
│   │   ├── landing/                 # Homepage sections
│   │   ├── theme/                   # Design tokens
│   │   └── ui/
│   │       ├── elements/            # Tag, SectionHeader, Badge, etc.
│   │       └── layout/              # PageShell, Panel, Grid
│   ├── constants/
│   │   └── app.constants.ts
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   ├── useSessions.ts
│   │   └── useUserProfile.ts
│   ├── lib/
│   │   ├── errors/
│   │   ├── utils/
│   │   └── validators/
│   ├── react-query/
│   └── redux/
```

---

## Typing Engine

The typing engine is not a questionnaire piped into an LLM. It is a **multi-stage probabilistic inference system** that minimizes uncertainty across three correlated latent systems and produces a deterministic, explainable profile.

```
Input (form / image / hybrid)
        ↓
Feature Extraction
        ↓
Hypothesis Scoring        ← deterministic, archetype vector DB
        ↓
Uncertainty Resolution    ← adaptive questions, entropy-based
        ↓
Cross-System Validation   ← reconcile Kibbe × Color × Essence
        ↓
Explanation Layer         ← LLM (only here)
        ↓
CompoundProfile { kibbe, color, essence, confidence, reasoning }
```

### Key design decisions

**The LLM is not the decision maker.** Archetype scoring is deterministic — user signals (from form answers and images) are extracted into typed features and scored against an archetype DB using weighted matching and anti-feature penalties. The LLM only generates the natural-language explanation once the profile is already resolved.

**Questions adapt to uncertainty, not a fixed script.** After each answer, the engine recalculates entropy across the candidate distribution. If the top two candidates are within a margin, it generates a maximally discriminating question targeting exactly that confusion — not a generic next question.

**Image input is first-class, not a bonus.** Vision models extract structured feature values (bone structure, contrast quality, undertone) with confidence scores that feed directly into the same scoring engine. Photos reduce question load; they don't bypass the scoring layer.

**Systems are reconciled, not scored independently.** After resolving each system, a cross-system validator checks for known inconsistencies between Kibbe, Color, and Essence pairings. Conflicts lower confidence and trigger targeted clarification — or suggest a blended output.

> For the full design — feature schema, scoring function, entropy model, archetype DB design, adaptive question generator, and session state machine — see [`/instructions/typing-engine.md`](./instructions/typing-engine.md).

---

## Core User Flow

### 1. Landing → Profile Discovery
The homepage explains the three systems with a live demo profile. CTA routes to the typing flow.

### 2. Typing Flow (`/typing`)

Three phases, each resumable across separate sessions:

**Phase A — Body Geometry (Kibbe)**
Adaptive questionnaire covering skeletal structure, bone quality, curve/angularity distribution, and facial geometry. Optional photo for visual feature extraction. Resolves to one of 13 Kibbe types.

**Phase B — Color Analysis (Seasonal)**
Questions targeting undertone, depth, and contrast. Optional photo for skin/hair/eye analysis under natural light. Resolves to one of 12 seasonal sub-types with a core color palette.

**Phase C — Style Essence (Kitchener)**
Questions about aesthetic resonance and visual presence. Optional face photo. Resolves to a primary + supporting essence blend.

Each phase writes to a `Session` record. Users see their confidence score, the signals that drove the result, and can retake or refine.

### 3. Profile Resolution
The compound profile is stored, displayed with full reasoning, and immediately activates the catalog filter.

### 4. Matched Catalog (`/explore`)
Every product is tagged across all three systems. The catalog shows only pieces at the intersection of the user's profile — and explains *why* each piece is a match.

### 5. Wardrobe Builder (`/wardrobe`)
Save pieces, compose looks, validate coherence across color range and silhouette.

---

## Product Catalog Schema

```typescript
type Product = {
  id: string
  name: string
  brand: string
  price: number
  images: string[]

  // Profile compatibility
  kibbeTypes: KibbeType[]         // e.g. ["Soft Natural", "Natural"]
  seasons: ColorSeason[]          // e.g. ["Soft Autumn", "True Autumn"]
  essences: StyleEssence[]        // e.g. ["Romantic", "Natural"]

  // Physical attributes
  silhouette: SilhouetteTag[]     // e.g. ["draped", "relaxed", "unstructured"]
  fabricWeight: FabricWeight      // "light" | "medium" | "heavy"
  fabricFinish: FabricFinish      // "matte" | "sheen" | "iridescent"
  fabricTexture: string[]         // e.g. ["linen", "suede", "brushed"]
  colorFamily: string[]           // e.g. ["terracotta", "warm olive"]
  fit: FitType                    // "relaxed" | "fitted" | "oversized" | ...
}
```

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Landing — system explanation, demo profile |
| `/auth` | Sign in / Sign up |
| `/dashboard` | Profile status, completion, next actions |
| `/typing` | Typing flow entry |
| `/typing/kibbe` | Phase A — body geometry |
| `/typing/color` | Phase B — seasonal color |
| `/typing/essence` | Phase C — style essence |
| `/sessions` | Session timeline + resume |
| `/explore` | Profile-matched catalog |
| `/explore/[id]` | Product detail with match reasoning |
| `/wardrobe` | Saved pieces + composed looks |
| `/profile` | Full profile view + retake |

---

## Current State

SYNTHE is in active early development.

**Built:**
- Homepage (template — structure and copy complete)
- Dashboard (template — layout and status states present)
- Auth flow (NextAuth configured)
- Design system (`PageShell`, `Panel`, `Tag`, `SectionHeader`, grid utilities)
- Prisma schema (in progress)
- Typing engine architecture (designed — see `/instructions/typing-engine.md`)

**Building next:**
1. Archetype DB — Kibbe, Color, and Essence feature vectors
2. Scoring engine — deterministic weighted matching
3. Adaptive question generator — entropy-based disambiguation
4. Typing UI — all three phases, confidence display, session resume
5. Vision integration — photo-based feature extraction
6. Product catalog schema + seed data
7. Explore page — profile-matched filtering with match reasoning
8. Wardrobe builder + look coherence validation

---

## Running Locally

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Required: DATABASE_URL, NEXTAUTH_SECRET, ANTHROPIC_API_KEY

# Run database migrations
npx prisma migrate dev

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | NextAuth session secret |
| `NEXTAUTH_URL` | App base URL (e.g. `http://localhost:3000`) |
| `ANTHROPIC_API_KEY` | Claude API — explanation layer + vision |

---

## Design Principles

**No noise.** No discovery feed, no trending, no social proof theater. Only what passes the profile filter.

**Reasoning visible.** Every type result shows exactly why. The typing is never a black box.

**One direction.** The profile produces a single resolved direction — not more personalization vectors.

**The catalog earns its place.** Small by design. Every piece must pass the filter to appear.

**Deterministic core, LLM at the edge.** Scoring is rule-based. The LLM generates language, not decisions.

---

## Frameworks Referenced

- **Kibbe Body Type System** — David Kibbe, *Metamorphosis* (1987)
- **Seasonal Color Analysis** — Itten & Munsell color theory; extended to 12 seasons by Sci/ART and subsequent practitioners
- **Kitchener Style Essence System** — John Kitchener, personal style consulting

SYNTHE implements these as a technology layer — the underlying theory belongs to their originators.

---

<div align="center">

*Structure. Tone. Presence. One profile. The right wardrobe.*

[![Try It](https://img.shields.io/badge/Try_It-synthe--topaz.vercel.app-black?style=for-the-badge)](https://synthe-topaz.vercel.app)

</div>
