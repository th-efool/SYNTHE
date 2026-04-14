You’re not trying to “add animations” — you’re trying to **increase perceived responsiveness + intent density** without making it feel designed.

So the instruction doc should enforce:

> *micro-feedback everywhere, zero noise, no gimmicks*

---

## ✅ INSTRUCTIONS.md (drop-in for Codex)

````md
# INTERACTION REFINEMENT — MICRO DYNAMICS PASS

Goal:
Make the entire UI feel alive, responsive, and intentional through subtle, low-noise interactions.
No flashy animations. Everything should feel like a *natural response*, not an effect.

---

## 1. GLOBAL PRINCIPLES

- Every interactive element must respond within 150–250ms
- Prefer: opacity, transform, blur, shadow
- Avoid: large movement, rotations, exaggerated scale
- Always use easing: cubic-bezier(0.22, 1, 0.36, 1)

---

## 2. IMAGE CARDS (Commerce, Wardrobe, Transformation)

Files:
- :contentReference[oaicite:0]{index=0}
- :contentReference[oaicite:1]{index=1}
- :contentReference[oaicite:2]{index=2}

### Add layered hover system:

#### A. Image subtle zoom (already partially exists → refine)
```css
.group:hover img {
  transform: scale(1.04);
}
````

#### B. Add soft lighting sweep

```css
.card-light {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 40%,
    rgba(255,255,255,0.12) 50%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.group:hover .card-light {
  opacity: 1;
}
```

#### C. Elevation response (not just scale)

```css
.group:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px -20px rgba(58,49,44,0.18);
}
```

---

## 3. TEXT REVEAL (ALL SECTIONS)

### Replace static text with micro-shift:

```css
.text-shift {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.group:hover .text-shift {
  transform: translateY(-2px);
}
```

Apply to:

* Titles in cards
* "View piece →" (already exists, just enhance)

---

## 4. BUTTON (Hero.tsx)

File:

*

### Add depth + pressure simulation:

#### A. Press effect

```css
button:active {
  transform: scale(0.97);
}
```

#### B. Glow follows cursor (optional but high impact)

Add radial gradient tied to mouse position

---

## 5. HERO IMAGE (MOST IMPORTANT)

File:

*

### A. Parallax micro-response

On mouse move:

```ts
const offsetX = (mouseX / width - 0.5) * 6;
const offsetY = (mouseY / height - 0.5) * 6;

image.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.02)`
```

→ VERY subtle, almost subconscious

---

### B. Floating panels react to hover zone

Each glass panel:

```css
.group:hover .panel {
  transform: translateY(-3px) scale(1.02);
}
```

---

## 6. ANNOTATION DOTS (YOUR CURRENT PROBLEM AREA)

File:

*

### A. Add pulse (but not annoying)

```css
.marker-dot {
  position: relative;
}

.marker-dot::after {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.4);
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.4s ease;
}

.group:hover .marker-dot::after {
  opacity: 1;
  transform: scale(1.2);
}
```

---

### B. Labels appear ONLY on hover (cleaner UI)

```css
.marker-label {
  opacity: 0;
  transform: translateY(4px);
  transition: all 0.3s ease;
}

.group:hover .marker-label {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 7. APPROACH CARDS (IMPORTANT — currently static)

File:

*

### Add “material lift”

```css
.group:hover {
  transform: translateY(-6px);
}
```

### Add inner glow shift

```css
.group:hover {
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.9),
    rgba(249,246,240,0.6)
  );
}
```

---

## 8. TRANSFORMATION BEFORE/AFTER

File:

*

### Add comparison interaction:

#### A. Hover → remove grayscale on "bad"

```css
.group:hover img {
  filter: grayscale(0%);
  opacity: 0.85;
}
```

#### B. Slight contrast boost on "good"

```css
.group:hover img {
  filter: contrast(1.05);
}
```

---

## 9. MICRO DETAILS (HIGH ROI)

### A. Borders react

```css
.group:hover {
  border-color: rgba(184,122,93,0.4);
}
```

### B. Grain / noise shift

Very subtle opacity increase on hover

---

## 10. PERFORMANCE RULES

* Use `will-change: transform` only on hoverable elements
* Avoid layout shift (no height/width animations)
* Keep all animations GPU-based (transform/opacity)

---

## FINAL CHECK

If you hover everything quickly:
→ Nothing should feel delayed
→ Nothing should feel decorative
→ Everything should feel like a *response*

That’s the target.

```
