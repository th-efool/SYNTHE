
## Product Design Document v2

### Tagline

Know what suits you.
Know what you own.
Know what you're missing.

---

# Vision

Most fashion companies sell clothing.

SYNTHE sells certainty.

The goal is not to help users browse products.

The goal is to help users build the right wardrobe.

Products are simply one mechanism for achieving that outcome.

---

# Core Problem

People struggle with three questions:

### Identity

```txt
What actually suits me?
```

### Ownership

```txt
What do I already have?
```

### Action

```txt
What should I buy next?
```

Most stores answer none of these.

They simply expose a catalog.

SYNTHE answers all three.

---

# Product Definition

SYNTHE is an Appearance Operating System.

It combines:

* Visual Identity Analysis
* Digital Wardrobe Management
* Outfit Generation
* Wardrobe Optimization
* Intelligent Shopping

Into a single continuous system.

---

# Core Product Loop

```txt
Discover Identity
        ↓
Build Wardrobe
        ↓
Generate Outfits
        ↓
Identify Gaps
        ↓
Recommend Purchases
        ↓
Improve Wardrobe
        ↓
Generate Better Outfits
        ↓
Repeat
```

Every loop improves the user.

Every loop creates value.

Every loop creates commerce opportunities.

---

# Product Architecture

```txt
                SYNTHE OS

                     │

      ┌──────────────┼──────────────┐
      │              │              │

 Identity      Wardrobe OS      Commerce

      │              │              │

      └──────────────┼──────────────┘

                     │

              Recommendation Engine
```

---

# Module 1

# Identity Engine

This is onboarding.

Users discover their natural visual identity.

Current systems:

* Kibbe
* Seasonal Color
* Kitchener Essence

Combined into:

```ts
IdentityProfile {
    kibbe
    season
    essence
}
```

The purpose is not entertainment.

The purpose is creating a stable visual identity foundation.

---

# Module 2

# Wardrobe OS

This is the core product.

After typing:

Users upload their wardrobe.

Photos.

Receipts.

Manual entries.

Everything becomes structured.

```ts
WardrobeItem {
    category

    colors

    silhouette

    materials

    compatibility

    usage
}
```

Now SYNTHE understands:

```txt
Who you are

+

What you own
```

This becomes the most valuable dataset in the system.

---

# Module 3

# Outfit Engine

Daily engagement feature.

Input:

```txt
Profile
Wardrobe
Weather
Occasion
Goals
```

Output:

```txt
Recommended Outfit

Alternative Outfits

Reasoning
```

Examples:

* Work
* Date
* Wedding
* Travel
* Casual
* Formal

This drives repeat usage.

---

# Module 4

# Wardrobe Analysis

The system continuously evaluates:

```txt
Current Wardrobe

vs

Ideal Wardrobe
```

Outputs:

### Coverage

```txt
Strong:
✓ Casual Wear
✓ Earth Tones
✓ Layering Pieces
```

### Weaknesses

```txt
Missing:
✗ Formal Footwear
✗ Summer Trousers
✗ Structured Outerwear
```

Users immediately understand their wardrobe quality.

---

# Module 5

# Gap Detection Engine

This is where commerce begins.

The engine calculates:

```txt
What is missing?
```

Instead of:

```txt
What can we sell?
```

Example:

```txt
Missing:

- Relaxed linen trousers

- Lightweight overshirt

- Casual leather sneaker
```

The system knows exactly what should be purchased next.

---

# Module 6

# Commerce Engine

Products enter after a gap exists.

Not before.

Flow:

```txt
Gap Identified
        ↓
Suitable Products Found
        ↓
Recommendation Generated
        ↓
Purchase
```

Each recommendation explains:

```txt
Why it works

What problem it solves

What outfits it unlocks
```

---

# Commerce Sources

### Internal Catalog

Dropshipped inventory.

### Partner Brands

Affiliate products.

### Future

Marketplace suppliers.

---

# Recommendation Example

Instead of:

```txt
Recommended Product
```

SYNTHE shows:

```txt
Relaxed Linen Overshirt

Reason:
Completes your spring layering category.

Matches:
12 existing wardrobe items.

Supports:
Soft Natural
Soft Autumn

Unlocks:
8 new outfits.
```

This creates much stronger buying intent.

---

# Module 7

# Event Planner

Users create events.

Examples:

```txt
Wedding

Date

Interview

Conference

Vacation
```

System evaluates:

```txt
Identity

+

Wardrobe

+

Event
```

Outputs:

```txt
Best Outfit

Missing Items

Recommended Purchases
```

High-value commerce moments.

---

# Module 8

# Appearance Coach

Long-term subscription feature.

Users select goals.

Examples:

```txt
Look More Mature

Look More Attractive

Dress Better For Work

Improve Personal Brand
```

SYNTHE generates:

```txt
Current State

↓

Target State

↓

Action Plan
```

Creating ongoing value beyond shopping.

---

# User Dashboard

### Appearance Score

```txt
81 / 100
```

---

### Wardrobe Score

```txt
74 / 100
```

---

### Coverage

```txt
Casual Wear
92%

Business Casual
68%

Formal Wear
41%
```

---

### Highest ROI Purchase

```txt
Relaxed Linen Overshirt

Unlocks 12 New Outfits
```

---

### Today's Outfit

```txt
Generated Daily
```

---

# Subscription Strategy

## Free

Identity Discovery

Basic Profile

Limited Wardrobe Tracking

---

## Premium

Full Identity System

Unlimited Wardrobe

Outfit Generation

Wardrobe Analysis

Event Planning

Appearance Coaching

Shopping Recommendations

---

# Revenue Model

## Revenue Stream 1

Subscription

Monthly recurring revenue.

---

## Revenue Stream 2

Dropshipping

Recommended products.

---

## Revenue Stream 3

Affiliate Revenue

External brands.

---

## Revenue Stream 4

Premium Styling

Human review layer.

---

# Long-Term Moat

The moat is not AI.

The moat is the Appearance Graph.

```ts
AppearanceGraph {
    identity

    wardrobe

    purchases

    outfits

    preferences

    goals

    feedback
}
```

Every interaction improves the graph.

Every improvement increases recommendation quality.

Every recommendation increases conversion quality.

---

# Core Insight

Fashion stores ask:

"What do you want to buy?"

SYNTHE asks:

"What is missing from your wardrobe?"

That single shift transforms commerce from product-selling into problem-solving.

And problem-solving is what creates trust, retention, and recurring revenue.
