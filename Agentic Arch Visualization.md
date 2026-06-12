# 1
```mermaid
flowchart TD

    A[User Input]

    A --> B1[Questionnaire]
    A --> B2[Photos]
    A --> B3[Hybrid Input]

    B1 --> C[Feature Extraction]
    B2 --> C
    B3 --> C

    C --> D[Feature Store]

    D --> E1[Kibbe Scorer]
    D --> E2[Season Scorer]
    D --> E3[Essence Scorer]

    E1 --> F[Candidate Distributions]
    E2 --> F
    E3 --> F

    F --> G[Entropy Calculator]

    G --> H{Confidence High?}

    H -->|No| I[Identify Most Confused Candidates]

    I --> J[Discriminative Feature Analysis]

    J --> K[Question Generator]

    K --> L[Ask Highest Information Gain Question]

    L --> M[User Answer]

    M --> D

    H -->|Yes| N[Cross-System Validation]

    N --> O{Contradictions?}

    O -->|Yes| K

    O -->|No| P[Resolve Profile]

    P --> Q[Compound Profile]

    Q --> R[Explanation Layer]

    R --> S[Appearance Graph]

    S --> T1[Wardrobe OS]
    S --> T2[Shopping Copilot]
    S --> T3[Outfit Generator]
    S --> T4[Appearance Coach]
```
# 2 
```mermaid
flowchart TD

    START([User Input])

    START --> INPUT

    subgraph INPUT["Input Layer"]
        FORM[Form Answers]
        IMAGE[Image Analysis]
        HYBRID[Hybrid Input]
    end

    INPUT --> FEATURES

    subgraph FEATURES["Feature Extraction"]
        FE1[Form Feature Extractor]
        FE2[Vision Feature Extractor]
        FE3[Unified Feature Store]
    end

    FEATURES --> INFERENCE

    subgraph INFERENCE["Hypothesis Engine"]
        H1[Candidate Retriever]
        H2[Archetype Scorer]
        H3[Distribution Builder]

        H1 --> H2
        H2 --> H3
    end

    INFERENCE --> UNCERTAINTY

    subgraph UNCERTAINTY["Uncertainty Analysis"]
        U1[Entropy Calculator]
        U2[Ambiguity Detection]
        U3[Confidence Evaluation]

        U1 --> U2
        U2 --> U3
    end

    U3 --> RESOLVED{Resolved?}

    RESOLVED -->|No| RESOLUTION

    subgraph RESOLUTION["Adaptive Resolution Loop"]
        R1[Confused Candidate Pair Finder]
        R2[Information Gain Analysis]
        R3[Question Generator]
        R4[User Answer]

        R1 --> R2
        R2 --> R3
        R3 --> R4
    end

    R4 --> FEATURES

    RESOLVED -->|Yes| VALIDATION

    subgraph VALIDATION["Cross-System Validation"]
        V1[Kibbe Validation]
        V2[Season Validation]
        V3[Essence Validation]
        V4[Reconciliation Engine]

        V1 --> V4
        V2 --> V4
        V3 --> V4
    end

    VALIDATION --> PROFILE

    PROFILE[Compound Profile]

    PROFILE --> EXPLAIN

    subgraph EXPLAIN["Explanation Layer"]
        E1[Reasoning Generator]
        E2[Natural Language Explainer]

        E1 --> E2
    end

    EXPLAIN --> GRAPH[(Appearance Graph)]
```

# 3
# Continuous Appearance Intelligence System

```mermaid
flowchart TB

    User((User))

    User --> Typing[Initial Typing Engine]

    Typing --> Graph[(Appearance Graph)]

    Graph --> Wardrobe[Wardrobe OS]
    Graph --> Shopping[Shopping Copilot]
    Graph --> Events[Event Planner]
    Graph --> Outfits[Outfit Generator]
    Graph --> Coach[Appearance Coach]

    Wardrobe --> Feedback
    Shopping --> Feedback
    Events --> Feedback
    Outfits --> Feedback
    Coach --> Feedback

    Feedback[Outcome Feedback]

    Feedback --> Graph

    Graph --> Learning[Preference + Outcome Learning]

    Learning --> Graph

    Graph --> Recommendations

    Recommendations[Personalized Recommendations]

    Recommendations --> User
```
