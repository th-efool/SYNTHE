Perfect — now we formalize that **“fix layer”** into a proper `INSTRUCTIONS.md` so your agent executes it cleanly and doesn’t improvise or break things.

This is essentially **Step 4.5 — System Activation Layer**
(bridging Explore → rest of app)

---

# 📄 ✅ `INSTRUCTIONS.md` — MIDDLEWARE STEP: REMOVE DEAD PAGES (SYSTEM ACTIVATION)

````md
# STEP 4.5 — SYSTEM ACTIVATION (REMOVE DEAD PAGES)

## 🎯 OBJECTIVE

Convert ALL placeholder pages into **real UI surfaces** using the shared component system.

This step ensures:

- no empty screens
- no placeholder text
- every route feels like part of the product

---

## ⚠️ CORE RULES

- DO NOT redesign layouts
- DO NOT introduce new components
- DO NOT add complex logic
- DO NOT change Explore page

ONLY:

→ reuse existing UI components  
→ inject mock data  
→ make pages feel alive  

---

# 🧠 GLOBAL REQUIREMENT

Every page MUST:

- use `SectionHeader`
- use at least one of:
  - `ProductCard`
  - `OutfitCard`
- use `Grid` for layout
- use spacing + typography tokens

---

# 📄 1. WARDROBE PAGE

## Path:
`/app/(dashboard)/wardrobe/page.tsx`

---

## Replace entire file

---

## Structure:

```text
[ SectionHeader ]

[ Saved items grid ]

[ Saved looks section ]
````

---

## Implementation:

* SectionHeader:

  * title: "Your wardrobe"
  * subtitle: "Saved pieces aligned with your profile"

* Grid:

  * render first 4 `mockProducts`

* Second section:

  * SectionHeader:
    "Saved looks"
  * render `mockOutfits` using `OutfitCard`

---

---

# 📄 2. CART PAGE

## Path:

`/app/(dashboard)/cart/page.tsx`

---

## Structure:

```text
[ SectionHeader ]

[ Product grid ]

[ Confirmation line ]
```

---

## Implementation:

* SectionHeader:

  * "Your selection"
  * "Everything here works with your structure"

* Grid:

  * render first 3 `mockProducts`

* Add:

```text
"These pieces work together"
```

Use muted text style.

---

---

# 📄 3. CHECKOUT PAGE

## Path:

`/app/(dashboard)/checkout/page.tsx`

---

## Structure:

```text
[ SectionHeader ]

[ Left: form ]

[ Right: product summary ]
```

---

## Implementation:

* SectionHeader:

  * "Checkout"
  * "Finalizing your selection"

---

### Left:

Simple form:

* input: name
* input: email

(no validation logic)

---

### Right:

* render 2 `ProductCard` (compact style)

---

---

# 📄 4. PRODUCT PAGE

## Path:

`/app/(dashboard)/product/[id]/page.tsx`

---

## Structure:

```text
[ Main product ]

[ Explanation ]

[ Works best with ]
```

---

## Implementation:

* use `mockProducts[0]`

---

### Main:

* ProductCard (or structured block)

---

### Add:

* tags
* short explanation:

```text
"Selected because it follows your natural width and maintains softness."
```

---

### Section:

"Works best with"

* render 2 ProductCards

---

---

# 📄 5. TYPING PAGE

## Path:

`/app/(dashboard)/typing/page.tsx`

---

## Structure:

```text
[ SectionHeader ]

[ Action buttons ]
```

---

## Implementation:

* SectionHeader:

  * "Find your profile"
  * "Understand your structure, color, and presence"

---

* Add 2 buttons:

```text
Start analysis
Continue
```

Use Button component.

---

---

# 📄 6. PROFILE PAGE (CRITICAL FIX)

## Path:

`/app/(dashboard)/profile/page.tsx`

---

## CURRENT:

```tsx
return null;
```

---

## MUST REPLACE

---

## Structure:

```text
[ SectionHeader ]

[ Profile values ]
```

---

## Implementation:

* SectionHeader:

  * "Your profile"

---

* Show:

```text
Soft Natural  
Soft Autumn  
Natural / Romantic
```

Use Tag components.

---

---

# 🧠 7. GLOBAL LAYOUT RULES

---

## Ensure:

* consistent container width (same as Explore)
* same spacing system
* same typography tokens

---

## Use:

```ts
spacing.xxl
spacing.lg
```

---

---

# ✨ 8. MOTION (LIGHT ONLY)

---

Apply to sections:

* class: `ui-enter`

---

DO NOT:

* add new animation systems
* add delays beyond simple stagger

---

---

# 🧪 9. FINAL VERIFICATION

---

Check ALL routes:

* `/explore`
* `/product/1`
* `/cart`
* `/checkout`
* `/wardrobe`
* `/typing`
* `/profile`

---

## Must confirm:

✔ No empty pages
✔ No raw `<h1>` placeholders
✔ Components used everywhere
✔ Visual consistency maintained

---

---

# 🚫 DO NOT DO

* No redesign
* No backend logic
* No filtering systems
* No personalization logic yet

---

---

# ✅ SUCCESS STATE

The app now feels like:

```text
a complete product (even if logic is fake)
```

NOT:

```text
a partially built project
```

---

---

# 🧠 WHAT THIS STEP FIXES

Before:

```text
Explore → real  
Other pages → dead
```

After:

```text
Whole app → alive and connected
```

