<div align="center">

# SYNTHE

**Fabric. Skin. Light. Find what naturally suits you.**

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux.js.org/)
[![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square&logo=langchain&logoColor=white)](https://langchain-ai.github.io/langgraph/)
[![Claude](https://img.shields.io/badge/Claude_API-D97757?style=flat-square&logo=anthropic&logoColor=white)](https://anthropic.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

[![Live](https://img.shields.io/badge/Live_Preview-synthe--topaz.vercel.app-brightgreen?style=flat-square)](https://synthe-topaz.vercel.app)
[![Status](https://img.shields.io/badge/Status-Early_Development-orange?style=flat-square)]()
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)]()

</div>

---

SYNTHE is an AI-powered fashion e-commerce platform that resolves a user's visual identity across three established aesthetic frameworks and uses the result to filter a product catalog to exactly what works for them.

The core is not a recommendation engine. It is a **probabilistic inference system** over structured aesthetic theory — deterministic scoring, uncertainty-driven adaptive questioning, multimodal input, and graph-based agentic orchestration — that produces a single compound profile used as a hard filter.

---

## The Problem

Most fashion platforms optimize for breadth. They show everything and let you filter. But the question that actually matters — *does this work on me?* — is never answered. The shape might look fine on a hanger, wrong on your frame. The color might be technically nice, but sit flat against your skin. The vibe might be aspirational but clash with how you naturally read to others.

SYNTHE answers that question before you browse.

---

## The Three Frameworks

SYNTHE resolves visual identity across three complementary systems. Each asks a different question. Together they converge to a single direction.

```
⌬ Body Geometry  ──┐
◉ Color Harmony  ──┼──▶  Compound Profile  ──▶  Matched Catalog
✦ Style Identity ──┘
```

### ⌬ Kibbe Body Type — Body Geometry System

**Question:** How does fabric interact with your frame?

13 types along a yin/yang spectrum, evaluating skeletal structure, flesh distribution, and facial geometry. The system maps the physical geometry of a body to the geometric properties of clothing — silhouette, drape, weight, proportion — so that garments sit correctly rather than impose.

**Types:** Dramatic · Soft Dramatic · Theatrical Romantic · Romantic · Classic · Soft Classic · Dramatic Classic · Flamboyant Natural · Soft Natural · Natural · Flamboyant Gamine · Soft Gamine · Gamine

Each type resolves to: silhouette line, fabric weight, hem length, neckline geometry, and pattern scale.

---

### ◉ Seasonal Color Analysis — Color Harmony System

**Question:** How does color behave against your skin?

Maps natural coloring (undertone, hair depth, eye contrast) to one of 12 sub-seasons across four dimensions: warmth, depth, clarity, and contrast.

| Season | Character | Sub-seasons |
|---|---|---|
| Spring | Warm · Light · Clear | Bright Spring, True Spring, Light Spring |
| Summer | Cool · Light · Muted | Light Summer, True Summer, Soft Summer |
| Autumn | Warm · Deep · Muted | Soft Autumn, True Autumn, Dark Autumn |
| Winter | Cool · Deep · Clear | Dark Winter, True Winter, Bright Winter |

The seasonal type filters color family, fabric finish (matte / sheen / iridescent), and pattern saturation — not just palette.

---

### ✦ Kitchener Style Essence — Style Identity System

**Question:** How do you visually read to others?

Captures the gestalt of a person's natural visual presence — the energy that clothing either harmonizes with or fights against. Distinct from Kibbe (structure) and color (tone): essence is about how face and body geometry communicate to others.

```
Yang ◀────────────────────────────────────────────────────────▶ Yin
  Dramatic · Natural · Gamine · Classic · Romantic · Ingenue · Angelic
```

Most people carry a primary and one or two supporting essences. The blend determines fabric choice, detail density, silhouette weight, and accessory scale.

---

## The Compound Profile

When all three systems resolve, they produce a compound profile that functions as a hard filter — not a preference signal, a decision rule.

```
Profile Example:
  Kibbe:    Soft Natural
  Season:   Soft Autumn
  Essence:  Romantic + Natural

Resolves to:
  Silhouette:  Soft, unstructured drape — width + curve, not rigid line
  Color:       Warm, muted earth tones — camel, terracotta, olive, warm brown
  Fabric:      Tactile natural fiber — linen, suede, brushed cotton, loose knit
  Detail:      Minimal, organic — no sharp tailoring, no delicate trim
  Presence:    Grounded softness — approachable, not austere
```

Every item in the catalog is tagged against all three systems. The matched catalog is the intersection. Nothing else appears.

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
| **Orchestration** | LangGraph — stateful graph execution for the typing pipeline |
| **Scoring Engine** | Deterministic — custom weighted feature matcher (TypeScript) |
| **Retrieval** | ChromaDB / FAISS — archetype vector store |
| **LLM** | Claude API (Anthropic) — explanation layer only |
| **Vision** | Claude Vision / GPT-4o — multimodal feature extraction |
| **Deployment** | Vercel |

---

## System Architecture

### Conceptual Layers

The system separates into four distinct layers with explicit boundaries. Each layer has a single responsibility and a defined interface to the next.

```
┌─────────────────────────────────────────────────────┐
│  INPUT LAYER                                        │
│  Form answers · Images · Hybrid                     │
│  → All reduce to typed FeatureValue[]               │
└───────────────────────┬─────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  DETERMINISTIC CORE                                 │
│  Feature extraction → Archetype scoring             │
│  → Entropy calculation → Candidate distribution     │
│  No LLM. Pure weighted matching against vector DB.  │
└───────────────────────┬─────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  ORCHESTRATION LAYER  (LangGraph)                   │
│  Stateful graph — nodes, transitions, loop control  │
│  Manages: uncertainty resolution, adaptive Q&A,     │
│  cross-system reconciliation, session persistence   │
└───────────────────────┬─────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  LLM LAYER  (Claude)                                │
│  Generates explanation only — after profile locked  │
│  No classification. No scoring. Language only.      │
└───────────────────────┬─────────────────────────────┘
                        ↓
                  CompoundProfile
```

**The key constraint:** the LLM layer cannot influence the profile result. It receives a resolved profile and produces a natural-language explanation. All decisions happen deterministically above it.

---

### Orchestration: LangGraph State Machine

The typing pipeline is **not a linear chain**. It is a graph with conditional transitions and iterative refinement loops, managed by LangGraph.

```
                    ┌──────────────────┐
                    │   START          │
                    │  (input mode     │
                    │   detection)     │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │  EXTRACT         │◀─────────────┐
                    │  FEATURES        │              │
                    │  (form/image/    │              │
                    │   hybrid)        │              │
                    └────────┬─────────┘              │
                             ↓                        │
                    ┌──────────────────┐              │
                    │  SCORE           │              │
                    │  ARCHETYPES      │              │
                    │  (all 3 systems) │              │
                    └────────┬─────────┘              │
                             ↓                        │
                    ┌──────────────────┐   uncertain  │
                    │  CHECK           │─────────────▶│
                    │  ENTROPY         │              │
                    └────────┬─────────┘         ┌───┴──────────────┐
                      certain↓                   │  GENERATE        │
                    ┌──────────────────┐         │  DISCRIMINATING  │
                    │  CROSS-SYSTEM    │         │  QUESTION        │
                    │  VALIDATE        │         │  → get answer    │
                    └────────┬─────────┘         └──────────────────┘
                             ↓
                    ┌──────────────────┐
                    │  EXPLAIN         │
                    │  (LLM — Claude)  │
                    └────────┬─────────┘
                             ↓
                       CompoundProfile
```

**Nodes** are discrete processing units (extract, score, check, generate, validate, explain).  
**Transitions** are conditional — the graph loops back to question generation if entropy is above threshold.  
**State** is passed through every node and persisted to the session store at each step, enabling resume across sessions.

This is not a LangChain sequential chain. The loop structure — score → check uncertainty → ask → re-score → check again — requires graph execution with explicit state management.

---

### Agents

"Agent" in this system means a unit with a single defined responsibility and a typed interface. These are not autonomous LLM agents — they are bounded processing nodes within the LangGraph graph.

| Agent | Responsibility |
|---|---|
| **FeatureExtractor** | Converts raw input (form answers or image) into `FeatureValue[]` with confidence scores. Two implementations: `FormFeatureExtractor`, `ImageFeatureExtractor`. Same output interface. |
| **ArchetypeScorer** | Scores all archetypes in the vector store against current features using weighted matching + anti-feature penalties. Produces a scored `Distribution` per system. |
| **EntropyCalculator** | Calculates entropy across each distribution. Determines whether the current state is resolved or uncertain. |
| **QuestionGenerator** | Identifies the most confused candidate pair and generates the single maximally discriminating question. One question at a time, targeted to the specific uncertainty. |
| **CrossSystemValidator** | After individual systems resolve, checks for known incompatibility patterns across Kibbe × Color × Essence. Flags conflicts, adjusts confidence, triggers clarification if needed. |
| **Explainer** | Receives a resolved, validated profile. Calls Claude to generate a natural-language explanation of the result. Only agent that uses an LLM. |

---

### Input Unification

Form mode and image mode are not separate systems. Both are input strategies that produce the same intermediate representation.

```
Form answers ──▶ FormFeatureExtractor ──┐
                                        ├──▶ FeatureValue[]  ──▶  Scoring engine
Image input ───▶ ImageFeatureExtractor ─┘
```

`FeatureValue` carries a confidence score. Image-extracted features typically carry lower confidence than direct answers on unambiguous questions, higher confidence on visual signals (undertone, contrast). The scoring engine weights by confidence regardless of source. Images reduce the number of questions needed — they do not bypass the pipeline.

---

### Session State

State is the single object passed through every graph node. It is persisted at each transition, enabling resume at any point.

```typescript
type SessionState = {
  // Accumulated evidence
  features: FeatureValue[]

  // Current scoring output
  distributions: {
    kibbe:   Distribution   // { [KibbeType]: score }
    color:   Distribution   // { [ColorSeason]: score }
    essence: Distribution   // { [StyleEssence]: score }
  }

  // Resolved results (populated after entropy satisfied)
  resolved: {
    kibbe?:   { type: KibbeType;   confidence: number }
    color?:   { type: ColorSeason; confidence: number }
    essence?: { types: StyleEssence[]; confidence: number }
  }

  // Orchestration control
  askedQuestions: string[]
  phase: "kibbe" | "color" | "essence" | "reconciliation" | "done"
  iterationCount: number
}
```

State moves forward. No node rewrites prior evidence — new answers accumulate and rescore. The resolved fields are populated only when entropy drops below threshold. The graph reads phase and entropy to determine which node executes next.

---

### Why This Architecture

**Why not pure LLM classification?**  
LLMs applied directly to aesthetic typing are inconsistent, hard to audit, and produce different results for equivalent inputs phrased differently. A deterministic scoring engine applied to extracted features is reproducible, debuggable, and produces confidence values that mean something.

**Why deterministic scoring over ML classification?**  
The archetype space is small (13 Kibbe types, 12 seasons, 7 essences) and well-defined by structured theory. The feature-to-archetype mappings are known. Training a classifier for this requires data we don't have and introduces unnecessary variance. Weighted scoring against a hand-curated archetype DB is more accurate and fully auditable.

**Why adaptive questioning over a fixed questionnaire?**  
A fixed questionnaire asks questions that are already answered and skips questions that would actually resolve ambiguity. Entropy-driven generation targets exactly the confusion that exists in the current state — fewer questions, higher precision.

**Why LangGraph over a sequential chain?**  
The core loop — extract → score → check entropy → ask → re-score → check again — cannot be expressed as a linear chain. It requires conditional branching and iteration count tracking. LangGraph provides the graph execution model, node-level state persistence, and explicit transition logic this requires. It also makes session resume straightforward: restore state, identify current node, continue.

---

### Directory Structure

```
synthe/
├── public/
├── prisma/                           # Schema & migrations
├── instructions/                     # Internal architecture docs
│   └── typing-engine.md              # Full typing engine specification
├── plan/
└── src/
    ├── app/
    │   ├── (auth)/                   # Sign in / Sign up
    │   ├── (dashboard)/
    │   │   ├── dashboard/            # Profile status + next actions
    │   │   ├── typing/               # Typing flow — all phases
    │   │   ├── wardrobe/             # Saved looks + builder
    │   │   ├── sessions/             # Session history + resume
    │   │   └── explore/              # Matched catalog
    │   └── page.tsx                  # Landing
    ├── backend/
    │   ├── ai/
    │   │   ├── pipeline/             # LangGraph graph definition
    │   │   ├── agents/
    │   │   │   ├── feature/          # FormFeatureExtractor, ImageFeatureExtractor
    │   │   │   ├── hypothesis/       # ArchetypeScorer, CandidateRetriever
    │   │   │   ├── resolver/         # EntropyCalculator, QuestionGenerator
    │   │   │   ├── validation/       # CrossSystemValidator
    │   │   │   └── reasoning/        # Explainer (LLM call)
    │   │   ├── memory/               # SessionState persistence
    │   │   └── retrieval/            # Vector store + embedding utils
    │   ├── api/                      # Route handlers
    │   ├── domain/                   # Business logic — profiles, products, sessions
    │   ├── infrastructure/           # DB clients, external service adapters
    │   └── middleware/               # Auth guards, rate limiting
    ├── components/
    │   ├── global/                   # Nav, layout wrappers
    │   ├── landing/                  # Homepage sections
    │   ├── theme/                    # Design tokens
    │   └── ui/
    │       ├── elements/             # Tag, SectionHeader, Badge
    │       └── layout/               # PageShell, Panel, Grid
    ├── constants/
    ├── hooks/
    ├── lib/
    ├── react-query/
    └── redux/
```

---

## Core User Flow

### 1. Landing
The homepage explains the three systems with a live demo profile. One path forward: start typing.

### 2. Typing (`/typing`)

Three phases, each resumable across sessions. The LangGraph pipeline runs server-side; the UI surfaces questions one at a time and shows confidence state as it resolves.

**Phase A — Kibbe (Body Geometry)**
Adaptive questions on skeletal structure, bone quality, curve/angularity, facial geometry. Optional image input. Resolves to one of 13 Kibbe types.

**Phase B — Seasonal Color**
Questions on undertone, depth, and contrast. Optional photo for skin/hair/eye reading under natural light. Resolves to one of 12 seasonal sub-types with a color palette.

**Phase C — Kitchener Essence**
Questions on aesthetic resonance and visual presence. Optional face photo. Resolves to a primary + supporting essence blend.

Each phase writes to a `Session` record at every graph transition. Users see confidence, key signals, and can retake from any point.

### 3. Profile Resolution
Compound profile stored. Immediately activates the catalog filter. Displayed with full signal trace and reasoning.

### 4. Matched Catalog (`/explore`)
Every product tagged across all three systems. Shows only the intersection of the user's profile. Each matched item surfaces which part of the profile it serves and why.

### 5. Wardrobe Builder (`/wardrobe`)
Save pieces, compose looks, validate coherence — color range alignment, silhouette compatibility across pieces.

---

## Product Catalog Schema

```typescript
type Product = {
  id: string
  name: string
  brand: string
  price: number
  images: string[]

  // Profile filter tags
  kibbeTypes: KibbeType[]          // e.g. ["Soft Natural", "Natural"]
  seasons:    ColorSeason[]        // e.g. ["Soft Autumn", "True Autumn"]
  essences:   StyleEssence[]       // e.g. ["Romantic", "Natural"]

  // Physical attributes
  silhouette:    SilhouetteTag[]   // e.g. ["draped", "relaxed", "unstructured"]
  fabricWeight:  FabricWeight      // "light" | "medium" | "heavy"
  fabricFinish:  FabricFinish      // "matte" | "sheen" | "iridescent"
  fabricTexture: string[]          // e.g. ["linen", "suede", "brushed"]
  colorFamily:   string[]          // e.g. ["terracotta", "warm olive"]
  fit:           FitType           // "relaxed" | "fitted" | "oversized" | ...
}
```

Initial catalog is editorially curated. The scoring engine validates product tags against archetype definitions and flags inconsistencies for review.

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Landing — systems, demo profile |
| `/auth` | Sign in / Sign up |
| `/dashboard` | Profile status, phase completion, next actions |
| `/typing` | Typing flow entry point |
| `/typing/kibbe` | Phase A — body geometry |
| `/typing/color` | Phase B — seasonal color |
| `/typing/essence` | Phase C — style essence |
| `/sessions` | Session timeline + resume |
| `/explore` | Profile-matched catalog |
| `/explore/[id]` | Product detail with match reasoning |
| `/wardrobe` | Saved pieces + composed looks |
| `/profile` | Full profile view, signal trace, retake |

---

## Current State

SYNTHE is in active early development.

**Complete:**
- Landing page (template — structure and copy finalized)
- Dashboard (template — layout and status states present)
- Auth (NextAuth configured)
- Design system (`PageShell`, `Panel`, `Tag`, `SectionHeader`, grid)
- Prisma schema (in progress)
- Typing engine architecture (fully specified — see `/instructions/typing-engine.md`)

**In progress / next:**
1. Archetype DB — feature vectors for all Kibbe, Color, and Essence types
2. Scoring engine — weighted feature matching with anti-feature penalties
3. Entropy calculator + adaptive question generator
4. LangGraph graph — node definitions, transitions, loop control
5. Typing UI — phase-by-phase, confidence display, session resume
6. Vision integration — image feature extraction pipeline
7. Product catalog schema + editorial seed data
8. Explore page — profile-matched filtering with match reasoning
9. Wardrobe builder + coherence validation

---

## Running Locally

```bash
npm install

cp .env.example .env.local
# Required: DATABASE_URL, NEXTAUTH_SECRET, ANTHROPIC_API_KEY

npx prisma migrate dev

npm run dev
```

[http://localhost:3000](http://localhost:3000)

---

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | NextAuth session secret |
| `NEXTAUTH_URL` | App base URL |
| `ANTHROPIC_API_KEY` | Claude API — Explainer agent + Vision |

---

## Design Principles

**Deterministic core, LLM at the edge.** Every profile decision is made by the scoring engine. The LLM generates language after the fact. It cannot change the result.

**Uncertainty drives questions.** The system asks only what it needs to ask. Questions are generated from the current state of ambiguity, not a predetermined script.

**All input reduces to features.** Form answers and images are different collection strategies for the same evidence. The pipeline does not branch by input mode.

**Reasoning is always visible.** Every result surfaces the signals that produced it. The typing is never a black box to the user.

**The catalog is a filter, not a feed.** Items appear because they pass. Not because they are popular, sponsored, or adjacent. The matched set is small by design.

**Resume at any point.** Session state is persisted at every graph transition. No typing session is lost.

---

## Frameworks Referenced

- **Kibbe Body Type System** — David Kibbe, *Metamorphosis* (1987)
- **Seasonal Color Analysis** — Itten & Munsell color theory; extended to 12 seasons by Sci/ART and subsequent practitioners
- **Kitchener Style Essence System** — John Kitchener, personal style consulting

SYNTHE implements these as a technology layer. The underlying theory belongs to their originators.

---

## Further Reading

| Document | Contents |
|---|---|
| [`/instructions/typing-engine.md`](./instructions/typing-engine.md) | Full typing engine spec — feature schema, scoring function, entropy model, archetype DB design, LangGraph state machine, agent interfaces |
| [`/plan/`](./plan/) | Product roadmap and phase planning |
| [`/prisma/schema.prisma`](./prisma/schema.prisma) | Full database schema |

---

<div align="center">

*Structure. Tone. Presence. One profile. The right wardrobe.*

[![Try It](https://img.shields.io/badge/Try_It-synthe--topaz.vercel.app-black?style=for-the-badge)](https://synthe-topaz.vercel.app)

</div>
