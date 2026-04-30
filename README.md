# SYNTHE

> **Fabric. Skin. Light. Find what naturally suits you.**

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

The Kibbe Body Type system defines 13 body types organized along a yin/yang spectrum — from sharp, angular Dramatic types to soft, rounded Romantic types, with blended types in between (Soft Natural, Theatrical Romantic, Soft Classic, etc.). The system looks at skeletal structure (vertical line, bone structure), flesh (muscle/curve distribution), and facial features.

The key insight: clothing has geometry. A structured blazer with sharp shoulders creates a different silhouette than a drapey linen layer. Kibbe typing matches the geometry of fabric to the geometry of your frame — so clothes appear to belong on you rather than sit on top of you.

**The 13 Kibbe types:** Dramatic, Soft Dramatic, Theatrical Romantic, Romantic, Classic, Soft Classic, Dramatic Classic, Flamboyant Natural, Soft Natural, Natural, Flamboyant Gamine, Soft Gamine, Gamine.

Each maps to recommended silhouette lines, fabric weights, hem lengths, necklines, and pattern scales.

---

### ◉ System 2 — Seasonal Color Analysis (Color Harmony System)

**What it answers:** How does color behave against your skin?

Seasonal color analysis maps how a person's natural coloring (skin undertone, hair depth, eye contrast) responds to color across four dimensions: warmth/coolness, depth (light to dark), clarity (muted/soft vs. bright/clear), and contrast.

The four seasons — Spring, Summer, Autumn, Winter — each divide into three sub-seasons (12 seasons total), producing precise palettes:

| Season | Character | Example Sub-seasons |
|---|---|---|
| Spring | Warm + Light + Clear | Bright Spring, True Spring, Light Spring |
| Summer | Cool + Light + Muted | Light Summer, True Summer, Soft Summer |
| Autumn | Warm + Deep + Muted | Soft Autumn, True Autumn, Dark Autumn |
| Winter | Cool + Deep + Clear | Dark Winter, True Winter, Bright Winter |

When color matches your season, it reads as one unified look — skin looks clearer, features more defined. A wrong color drains the face, creates harsh contrast, or makes the wearer look washed out.

SYNTHE uses seasonal type to filter not just color, but fabric finish (matte, sheen, iridescent) and pattern saturation.

---

### ✦ System 3 — Kitchener Style Essence (Style Identity System)

**What it answers:** How do you visually read to others?

Developed by John Kitchener, the Style Essence system captures the *gestalt* of a person's natural presence — the subtle visual energy that clothing either harmonizes with or fights against. Unlike Kibbe (which focuses on physical structure) or color (which focuses on tone), essence is about the visual impression your face and body geometry communicate.

There are 7 pure essences arranged on a yin/yang spectrum:

```
Yang ◀──────────────────────────────▶ Yin
Dramatic · Natural · Gamine · Classic · Romantic · Ingenue · Angelic
```

- **Dramatic** — Theatrical yang. Long, structured silhouettes. Bold, striking.
- **Natural** — Casual yang. Relaxed, oversized, layered. Easy-going.
- **Gamine** — Playful yang. Compact, eclectic, irreverent. Mixed patterns.
- **Classic** — Balanced yin/yang. Timeless, formal, understated elegance.
- **Romantic** — Sensual yin. Curvy, draped, luxurious. Indulgent textures.
- **Ingenue** — Decorative small-scale yin. Delicate, ornamental, innocent.
- **Angelic** — Ethereal yin. Flowing, fine, otherworldly.

Most people carry a blend of two or three essences. SYNTHE identifies a primary and supporting essence to guide fabric, detail level, silhouette weight, and accessory scale.

---

## The Compound Profile

When all three systems resolve, a user receives a compound profile that becomes the engine for all product filtering and recommendation:

```
Example Profile:
  Kibbe:    Soft Natural
  Season:   Soft Autumn
  Essence:  Romantic + Natural

Resolved as:
  Silhouette:  Soft, unstructured drape (width + curve, not rigid)
  Color:       Warm, muted earth tones (camel, terracotta, olive, warm brown)
  Fabric:      Tactile, natural-fiber: linen, suede, brushed cotton, loose knit
  Detail:      Minimal, organic detail — no sharp tailoring, no delicate trims
  Presence:    Relaxed with softness — grounded, approachable, not austere
```

This profile isn't a mood board. It's a decision filter. Every piece in the catalog is tagged against all three systems, and the matched catalog shows only the intersection.

---

## Architecture

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + PostCSS |
| Auth | NextAuth.js (via `/src/app/(auth)`) |
| ORM / DB | Prisma (schema in `/prisma`) |
| State | Redux (`/src/redux`) |
| Server State | React Query (`/src/react-query`) |
| AI / Typing | Anthropic Claude API (`/src/backend/ai`) |
| Styling Config | Drizzle |
| Constants | `/src/constants/app.constants.ts` |

### Directory Structure

```
synthe/
├── public/
│   └── kibbietype.png               # Static assets
├── prisma/                          # DB schema & migrations
├── instructions/                    # Internal dev documentation
├── plan/                            # Product planning docs
├── src/
│   ├── app/
│   │   ├── (auth)/                  # Auth routes — sign in, sign up
│   │   ├── (dashboard)/             # Authenticated user area
│   │   │   ├── dashboard/           # Profile status + next actions
│   │   │   ├── typing/              # Guided typing flow (Kibbe / Color / Essence)
│   │   │   ├── wardrobe/            # Saved looks & wardrobe builder
│   │   │   ├── sessions/            # Typing session history
│   │   │   └── explore/             # Matched catalog
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx                 # Homepage / landing
│   ├── backend/
│   │   ├── ai/                      # Claude API integration — typing engine
│   │   ├── api/                     # Route handlers
│   │   ├── domain/                  # Business logic (profiles, products, sessions)
│   │   ├── infrastructure/          # DB clients, external services
│   │   └── middleware/              # Auth guards, rate limiting
│   ├── components/
│   │   ├── global/                  # Nav, layout wrappers
│   │   ├── landing/                 # Homepage sections
│   │   ├── theme/                   # Design tokens, theme provider
│   │   └── ui/
│   │       ├── elements/            # Tag, SectionHeader, Badge, etc.
│   │       └── layout/              # PageShell, Panel, Grid
│   ├── constants/
│   │   └── app.constants.ts         # System-wide enums & config
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   ├── useSessions.ts
│   │   └── useUserProfile.ts
│   ├── lib/
│   │   ├── errors/
│   │   ├── utils/
│   │   └── validators/
│   ├── react-query/                 # Query keys, hooks, prefetch helpers
│   ├── redux/                       # Global client state slices
│   └── lib/
│       └── mockData.ts              # Dev fixtures
```

---

## Core User Flow

### 1. Landing → Profile Discovery

The homepage explains the three systems and shows a demo profile. The call-to-action sends the user to the typing flow.

### 2. Typing Flow (`/typing`)

The typing flow is the core product experience. It's a guided, multi-step session structured in three phases:

**Phase A — Body Geometry (Kibbe)**
The user answers questions about skeletal structure, bone delicacy/broadness, curve vs. angularity of the body, and facial features. The AI engine interprets responses and proposes a Kibbe type, explaining why. The user can refine or accept.

**Phase B — Color Analysis (Seasonal)**
The user answers questions about skin undertone reactions (do you look better in silver or gold jewelry?), hair depth, the quality of shadows and contrast on the face. Optionally, the user can upload a photo for AI-assisted analysis. The engine maps them to one of the 12 seasonal sub-types and shows their core palette.

**Phase C — Style Essence (Kitchener)**
The user answers questions about which aesthetic environments feel resonant, and optionally uploads a face photo. The AI identifies a primary essence and up to two supporting essences. It explains the blend.

Each phase saves to a `Session` record in the database. Users can complete phases across separate visits. The Dashboard shows progress and allows re-entry.

### 3. Profile Resolution

Once all three phases are complete, the compound profile is stored against the user account. The profile is displayed clearly:

```
Kibbe:    Soft Natural     ── width + curve, relaxed structure
Season:   Soft Autumn      ── warm, muted, medium depth
Essence:  Romantic/Natural ── tactile softness, grounded presence
```

### 4. Matched Catalog (`/explore`)

Every product in the catalog is tagged with:
- One or more compatible Kibbe types
- One or more compatible seasonal palettes
- One or more compatible essence profiles
- Fabric metadata (drape, weight, finish, texture)
- Silhouette data (fit, length, structure)

The explore page filters the full catalog to only show pieces that intersect with the user's profile. Pieces show *why* they're a match — which part of the profile they serve.

### 5. Wardrobe Builder (`/wardrobe`)

Users can save pieces into a wardrobe, compose looks, and review coherence across pieces (do all pieces in this outfit share the same color range? does the silhouette composition work?).

---

## AI Typing Engine

The typing engine lives in `/src/backend/ai` and wraps the Anthropic Claude API.

### How it works

Each typing phase sends a structured prompt to the model containing:
- The user's answers to that phase's questionnaire
- Reference data for all possible types in that system
- Scoring heuristics per type
- Instructions for producing a structured JSON response

The model returns:
```json
{
  "type": "Soft Natural",
  "confidence": 0.84,
  "reasoning": "...",
  "alternatives": ["Natural", "Soft Classic"],
  "key_signals": ["broad shoulders with curve", "irregular bone structure", "relaxed facial lines"]
}
```

This result is stored in the session and surfaced to the user with the reasoning visible — the typing is never a black box.

### Photo Analysis (optional)

For Color and Essence phases, users can upload a photo. The image is passed to Claude's vision capability alongside the questionnaire prompt. The model uses visual signals (skin tone in natural light, facial bone structure, contrast level) to supplement or validate the questionnaire-based result.

Photo data is processed in-memory and not stored.

---

## Product Catalog Schema

Each catalog item carries full profile compatibility metadata:

```typescript
type Product = {
  id: string
  name: string
  brand: string
  price: number
  images: string[]

  // Typing compatibility
  kibbeTypes: KibbeType[]          // e.g. ["Soft Natural", "Natural"]
  seasons: ColorSeason[]           // e.g. ["Soft Autumn", "True Autumn"]
  essences: StyleEssence[]         // e.g. ["Romantic", "Natural"]

  // Physical attributes
  silhouette: SilhouetteTag[]      // e.g. ["draped", "relaxed", "unstructured"]
  fabricWeight: FabricWeight       // "light" | "medium" | "heavy"
  fabricFinish: FabricFinish       // "matte" | "sheen" | "iridescent"
  fabricTexture: string[]          // e.g. ["linen", "suede", "brushed"]
  colorFamily: string[]            // e.g. ["terracotta", "warm olive"]
  fit: FitType                     // "relaxed" | "fitted" | "oversized" | etc.
}
```

Catalog curation is initially manual with editorial review. The AI layer validates tagging against the typing frameworks to flag inconsistencies.

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Landing page — system explanation, demo profile |
| `/auth` | Sign in / Sign up |
| `/dashboard` | Profile status, completion progress, next actions |
| `/typing` | Multi-phase guided typing flow |
| `/typing/kibbe` | Phase A — body geometry |
| `/typing/color` | Phase B — seasonal color |
| `/typing/essence` | Phase C — style essence |
| `/sessions` | Session timeline — all past typing sessions |
| `/explore` | Matched product catalog |
| `/explore/[id]` | Product detail with profile match explanation |
| `/wardrobe` | Saved pieces, composed looks |
| `/profile` | Full profile view + retake options |

---

## Current State

SYNTHE is in active early development. The current build includes:

- Homepage (template — structure and copy complete, product-connected flows pending)
- Dashboard (template — layout and status states present, live data pending)
- Auth flow (NextAuth setup complete)
- Design system (`PageShell`, `Panel`, `Tag`, `SectionHeader`, grid utilities)
- Prisma schema (in progress)
- AI backend scaffold (in progress)

### What's being built next

1. Full typing questionnaire UI (all three phases)
2. Claude API integration for type resolution
3. Product catalog schema + seed data
4. Explore page with profile-matched filtering
5. Wardrobe save / compose flow
6. Session persistence + resume logic

---

## Design Principles

**No noise.** The interface removes everything that doesn't serve the typing or the selection. No discovery feed, no algorithmic trending, no social proof theater.

**Reasoning visible.** Every type result shows why. Users understand their profile — they don't just receive a label.

**One direction.** The goal of the profile is not more personalization signal. It's a single resolved direction that removes decision fatigue.

**The catalog earns its place.** No piece appears unless it passes the profile filter. The matched catalog is small by design.

---

## Running Locally

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Fill in: DATABASE_URL, NEXTAUTH_SECRET, ANTHROPIC_API_KEY

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
| `DATABASE_URL` | Prisma-compatible database connection string |
| `NEXTAUTH_SECRET` | NextAuth session secret |
| `NEXTAUTH_URL` | App base URL (e.g. `http://localhost:3000`) |
| `ANTHROPIC_API_KEY` | Claude API key for the typing engine |

---

## Live Preview

**Vercel deployment:** [synthe-topaz.vercel.app](https://synthe-topaz.vercel.app)

Current deployment reflects the template homepage and placeholder dashboard. Typing engine and catalog are behind auth and not yet deployed to production.

---

## Frameworks Referenced

The three systems SYNTHE implements are established frameworks in personal styling:

- **Kibbe Body Type System** — David Kibbe, *Metamorphosis* (1987)
- **Seasonal Color Analysis** — Derived from Itten & Munsell color theory, popularized by Carole Jackson's *Color Me Beautiful* (1980) and extended to 12 seasons by various practitioners
- **Kitchener Style Essence System** — John Kitchener, ongoing work in personal style consulting

SYNTHE implements these frameworks as a technology layer — the underlying theory belongs to their respective originators.

---

*Structure. Tone. Presence. One profile. The right wardrobe.*
