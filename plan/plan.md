# Wardrobe Expansion Plan: Look CRUD + Moodboard Workspace

## Summary

Turn `Wardrobe` from another product grid into a distinct workspace with two clear jobs:

1. manage saved looks
2. build visual direction boards from wardrobe content

This will be a **mock-state-first** implementation with **inline look editing** and a **Pinterest-inspired board system enhanced with notes and color chips**. The page should feel like a private styling studio, not a browse surface.

The current `D:\ThisPC\Downloads\SYNTHE\plan` directory is empty. In the implementation turn, write this plan into that folder before coding so the execution trail lives in-repo.

## Implementation Changes

### 1. Reframe Wardrobe into a true workspace
- Replace the current `saved pieces + saved looks` feed rhythm with a split workspace layout.
- Top area becomes a wardrobe control bar:
  - page intro
  - section toggle or tabs for `Looks` and `Moodboards`
  - primary action buttons for `New look` and `New board`
- Keep existing visual system and spacing tokens; do not redesign the global app shell.

### 2. Add mock state model for editable wardrobe content
- Expand mock data to include:
  - `mockWardrobeItems`: saved pieces available for styling
  - `mockLooks`: editable look records with `id`, `title`, `itemIds`, optional `note`, `updatedAt`
  - `mockMoodboards`: board records with `id`, `title`, `description`, `pins`, `updatedAt`
  - board pin records with:
    - `id`
    - `type` = `product` | `look` | `note` | `color`
    - source reference where relevant
    - layout metadata for board rendering in mock mode
- Use local React state inside the wardrobe page to simulate create/edit/delete for looks and boards.
- Do not wire backend, Prisma, Drizzle, or route actions in v1.

### 3. Implement unique `Looks` experience
- Main `Looks` view should feel like a styling editor, not a product gallery.
- Layout:
  - left: existing looks list/cards with quick metadata
  - right: inline builder/editor panel
- Inline builder behavior:
  - create a new look from saved wardrobe items
  - edit title
  - add/remove wardrobe pieces
  - reorder selected pieces if simple to do
  - optional short note
  - delete look with a lightweight confirm state
- Use existing `ProductCard`, `OutfitCard`, `SectionHeader`, `Grid`, `Tag`, `Button`, `Drawer`/`Modal` only if needed for confirm microflows; do not introduce new shared primitives.
- Distinguish `Looks` visually from `Explore` by using:
  - editorial header + utility controls
  - denser selected-items editing rail
  - clear builder panel
  - fewer “catalog” card grids

### 4. Implement unique `Moodboards` experience
- Add a wardrobe sub-surface for boards that is more visual and compositional than the look builder.
- V1 scope:
  - create board
  - rename board
  - delete board
  - add pins from saved products
  - add pins from saved looks
  - add text notes
  - add color chips
- Board UI approach:
  - masonry-like or freeform-feeling composition, but implemented with stable mock layout metadata
  - no drag-and-drop required in v1 unless trivial; use add/remove/reorder controls instead
  - “better than Pinterest” angle comes from wardrobe-aware pins, profile-aware styling context, and calmer premium presentation
- Board pin rendering:
  - product pins show image + short label
  - look pins show grouped imagery via `OutfitCard`-style treatment
  - note pins show elegant editorial text blocks
  - color pins show tonal swatches with small labels
- Board detail should open inline within wardrobe, not via new route.

### 5. Make Wardrobe feel distinct from Explore / Typing / Cart
- Wardrobe identity:
  - “studio/workbench” rather than “feed”
  - compositional layout
  - stronger sense of editing and ownership
- Avoid repeating:
  - simple `SectionHeader + Grid + cards` stack as the whole page
  - large uniform product rows identical to other pages
- Keep shared system consistency through tokens, but vary page-level composition and density.

### 6. Interaction model and flow
- Default entry state:
  - `Looks` tab active
  - first look preselected in editor
- User flows to support:
  - create look from selected saved items
  - edit existing look title/items/note
  - delete look
  - create board
  - add product pin to board
  - add look pin to board
  - add note pin
  - add color chip pin
  - delete board
- Use optimistic local state only.
- Keep all destructive actions reversible only through immediate local UX affordances if simple; otherwise use confirm-before-delete.

### 7. Minimal file-level implementation shape
- Update wardrobe page entrypoint to host the full local workspace and state.
- Expand mock data file with wardrobe-specific structures.
- Reuse existing shared UI components where possible.
- Add small wardrobe-local helper components only if needed and keep them colocated under the wardrobe route, not shared globally, because this is page-specific interaction logic.

## Step-by-Step Build Order

1. Expand mock data with wardrobe items, editable looks, moodboards, and pin types.
2. Replace current wardrobe page with workspace shell and local React state.
3. Build `Looks` list and inline editor panel.
4. Wire create/edit/delete flows for looks in local state.
5. Add `Moodboards` section with board list and selected board detail.
6. Implement product/look/note/color pin rendering and add/remove interactions.
7. Polish wardrobe-specific layout so it reads as a studio rather than another feed.
8. Run full flow verification against `Landing -> Explore -> Product -> Cart -> Checkout -> Wardrobe`.
9. Refine mobile behavior so tabs, editor panel, and board detail stack cleanly.

## Test Plan

- Wardrobe loads with no empty placeholder content.
- Creating a look adds it to the looks list immediately.
- Editing a look updates title/items/note in place.
- Deleting a look removes it cleanly and selects a sensible fallback.
- Creating a moodboard adds it to the board list immediately.
- Adding product pins, look pins, notes, and color chips updates the selected board view.
- Deleting a board removes it without breaking selection state.
- Wardrobe remains visually distinct from Explore, Typing, and Cart.
- Mobile layout stacks correctly for:
  - looks list + editor
  - boards list + board canvas
- `npm run typecheck` passes.
- `npm run build` passes.

## Assumptions and Defaults

- Persistence is mock/local state only for v1.
- Looks use an inline editor, not a modal or dedicated route.
- Moodboards support wardrobe product pins, look pins, notes, and color chips.
- No file uploads, no drag-and-drop, and no backend sync in this phase.
- New wardrobe-specific helper UI may be colocated inside the wardrobe route if existing shared components are not enough, but no new shared design-system components should be introduced.
- In the implementation turn, first write this plan into `D:\ThisPC\Downloads\SYNTHE\plan` before coding.
