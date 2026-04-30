# 🧠 SYNTHE — Typing Engine v2 (Agentic + Multimodal)

*(Builds on your current system  but restructures it into a unified inference engine.)*

---

# 1. 🎯 System Objective

Resolve user into:

```ts
type CompoundProfile = {
  kibbe: KibbeType
  color: ColorSeason
  essence: StyleEssence[]

  confidence: {
    kibbe: number
    color: number
    essence: number
  }

  reasoning: string
}
```

### Constraints

* Minimize user friction (questions)
* Maximize explainability
* Avoid black-box decisions
* Support:

  * Form-based inference
  * Image-based inference
  * Hybrid refinement

---

# 2. 🧩 Core System Model

Everything reduces to:

```ts
signal → feature → hypothesis → uncertainty → resolution → profile
```

---

# 3. 🏗️ System Architecture

## 3.1 Layered Architecture

```ts
Input Layer
   ↓
Feature Extraction Layer
   ↓
Hypothesis Engine (Deterministic + RAG)
   ↓
Uncertainty Resolver (Adaptive Questions)
   ↓
Validation + Reconciliation
   ↓
Explanation Layer
```

---

## 3.2 Backend Structure

```ts
/src/backend/ai/

  pipeline/
    typingEngine.ts            // main orchestrator

  agents/
    feature/
      formFeatureExtractor.ts
      imageFeatureExtractor.ts

    hypothesis/
      candidateRetriever.ts
      scorer.ts

    resolver/
      questionGenerator.ts
      entropyCalculator.ts

    validation/
      crossSystemValidator.ts

    reasoning/
      explainer.ts

  memory/
    sessionState.ts

  retrieval/
    vectorStore.ts
    embeddings.ts

  schema/
    types.ts
    features.ts
```

---

# 4. ⚙️ Execution Modes

---

## 4.1 MODE A — Adaptive Form

### Phase 1: Broad Signal Capture

* 15–25 questions
* Each mapped to feature signals

```ts
type Question = {
  id: string
  text: string
  mapsTo: FeatureKey
  weight: number
}
```

---

### Phase 2: Targeted Disambiguation

Dynamic questions based on confusion:

```ts
if (top2_gap < threshold) {
  ask(discriminative_question)
}
```

---

## 4.2 MODE B — Image Mode

### Input

* 2–3 images

---

### Output (Structured Features)

```ts
type VisualFeatures = {
  boneStructure: { value: "broad" | "narrow", confidence: number }
  contrast: { value: "low" | "high", confidence: number }
  undertone: { value: "warm" | "cool", confidence: number }
}
```

---

### Behavior

* Feed into same scoring engine
* Trigger questions only if uncertainty high

---

# 5. 🧠 Feature System (Core Abstraction)

---

## 5.1 Feature Definition

```ts
type FeatureKey =
  | "bone_structure"
  | "flesh_distribution"
  | "contrast"
  | "undertone"
  | "vertical_line"
  | "facial_softness"
```

---

## 5.2 Feature Value

```ts
type FeatureValue = {
  key: FeatureKey
  value: string
  confidence: number
}
```

---

# 6. 🧮 Hypothesis Engine

---

## 6.1 Archetype Schema (Vector DB)

```ts
type Archetype = {
  id: string
  system: "kibbe" | "color" | "essence"

  features: {
    key: FeatureKey
    expected: string
    weight: number
  }[]

  antiFeatures: {
    key: FeatureKey
    value: string
    penalty: number
  }[]
}
```

---

## 6.2 Scoring Function (Deterministic)

```ts
function scoreArchetype(features, archetype) {
  let score = 0

  for (feature of archetype.features) {
    match = getMatch(features, feature.key)

    if (!match) continue

    score += match.confidence * feature.weight
  }

  for (anti of archetype.antiFeatures) {
    if (features[anti.key] === anti.value) {
      score -= anti.penalty
    }
  }

  return score
}
```

---

## 6.3 Output

```ts
type Distribution = {
  [type: string]: number
}
```

---

# 7. 📉 Uncertainty Modeling

---

## 7.1 Entropy Calculation

```ts
function entropy(distribution) {
  return -Σ(p * log(p))
}
```

---

## 7.2 Ambiguity Detection

```ts
if (
  top1 - top2 < margin ||
  entropy > threshold
) {
  unresolved = true
}
```

---

# 8. 🎯 Question Generator (Key Component)

---

## 8.1 Goal

Generate **max information gain question**

---

## 8.2 Algorithm

```ts
function generateQuestion(topCandidates) {
  pair = getMostConfusedPair(topCandidates)

  diff = compareArchetypes(pair.a, pair.b)

  bestFeature = diff.maxDiscriminatingFeature

  return buildQuestion(bestFeature)
}
```

---

## 8.3 Example

```ts
Soft Natural vs Soft Classic

→ feature: structure_preference

→ question:
"Do clean structured outfits look better than relaxed draped ones?"
```

---

# 9. 🔁 Session State

---

## 9.1 State Model

```ts
type SessionState = {
  features: FeatureValue[]

  distributions: {
    kibbe: Distribution
    color: Distribution
    essence: Distribution
  }

  askedQuestions: string[]
}
```

---

## 9.2 Persistence

* Stored per session
* Allows resume + iterative refinement

---

# 10. 🔗 Cross-System Validation

---

## 10.1 Why Needed

Systems are NOT independent.

---

## 10.2 Example Rules

```ts
if (kibbe == "Dramatic" && essence == "Ingenue") {
  penalty += 0.2
}

if (color == "Bright Winter" && essence == "Natural") {
  flag inconsistency
}
```

---

## 10.3 Resolution

* Lower confidence
* Trigger final clarification question
* Or suggest blended output

---

# 11. 🧠 Explanation Layer

---

## Input

```ts
{
  topType,
  keySignals,
  rejectedAlternatives
}
```

---

## Output

```ts
"You align with Soft Natural because your structure shows width + softness..."
```

---

## Rule

* LLM ONLY here
* Everything else deterministic

---

# 12. 🔄 Full Pipeline

---

```ts
function runTyping(mode, input) {
  features = extractFeatures(mode, input)

  state = initializeState()

  state = updateState(state, features)

  while (isUncertain(state)) {
    question = generateQuestion(state)

    answer = getUserAnswer(question)

    state = updateState(state, answer)
  }

  profile = resolveProfile(state)

  profile = reconcile(profile)

  explanation = generateExplanation(profile)

  return { profile, explanation }
}
```

---

# 13. 🧰 Tech Stack Mapping

---

## Core

* TypeScript (already used)
* Node backend

---

## AI

* LLM: Claude / GPT
* Vision: GPT-4o / Claude Vision

---

## RAG

* ChromaDB / FAISS

---

## Orchestration

* Start simple (custom pipeline)
* Later:

  * LangChain → chains
  * LangGraph → state machine

---

# 14. 🚀 Implementation Phases

---

## Phase 1 — Deterministic Core

* Feature schema
* Archetype DB
* Scoring engine
* Static questionnaire

---

## Phase 2 — Adaptive Questions

* Entropy calculation
* Question generator

---

## Phase 3 — Image Mode

* Feature extraction from images
* Confidence weighting

---

## Phase 4 — Cross-System Validation

---

## Phase 5 — LLM Explanation Layer

---

## Phase 6 — Full Agentic Flow (Optional)

* LangGraph orchestration
* Multi-agent refinement

---

# 15. ⚠️ Design Pitfalls

---

### ❌ Don’t let LLM decide types directly

→ Always use scoring

---

### ❌ Don’t embed entire knowledge in prompt

→ Use vector DB

---

### ❌ Don’t ask static questions

→ Always target uncertainty

---

### ❌ Don’t treat systems independently

→ Always reconcile

---
