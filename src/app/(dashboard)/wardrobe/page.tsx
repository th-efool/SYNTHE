"use client";

import { type CSSProperties, useEffect, useMemo, useState } from "react";
import { LookGalleryCard } from "@/components/ui/cards/LookGalleryCard";
import { OutfitCard } from "@/components/ui/cards/OutfitCard";
import { ProductCard } from "@/components/ui/cards/ProductCard";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { Button } from "@/components/ui/elements/Button";
import {
  mockLooks,
  mockMoodboards,
  mockWardrobeItems,
  type MockLook,
  type MockMoodboard,
  type MoodboardPin,
} from "@/lib/mockData";

type Tab = "looks" | "boards";

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const makeId = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2, 9)}`;

const lookPatternMap = [
  { colSpan: 3, minHeight: "250px" },
  { colSpan: 2, minHeight: "210px" },
  { colSpan: 1, minHeight: "180px" },
  { colSpan: 2, minHeight: "220px" },
  { colSpan: 1, minHeight: "170px" },
];

export default function WardrobePage() {
  const [tab, setTab] = useState<Tab>("looks");
  const [looks, setLooks] = useState<MockLook[]>(mockLooks);
  const [boards, setBoards] = useState<MockMoodboard[]>(mockMoodboards);
  const [selectedLookId, setSelectedLookId] = useState<string>(mockLooks[0]?.id ?? "");
  const [selectedBoardId, setSelectedBoardId] = useState<string>(mockMoodboards[0]?.id ?? "");
  const [confirmLookDelete, setConfirmLookDelete] = useState(false);
  const [isLookOverlayOpen, setIsLookOverlayOpen] = useState(false);
  const [activeLookOverlayId, setActiveLookOverlayId] = useState<string>(mockLooks[0]?.id ?? "");
  const [confirmBoardDelete, setConfirmBoardDelete] = useState(false);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [activePinActionsId, setActivePinActionsId] = useState<string | null>(null);

  const selectedLook = useMemo(
    () => looks.find((look) => look.id === selectedLookId) ?? looks[0],
    [looks, selectedLookId],
  );
  const overlayLook = useMemo(
    () => looks.find((look) => look.id === activeLookOverlayId) ?? looks[0],
    [looks, activeLookOverlayId],
  );
  const selectedBoard = useMemo(
    () => boards.find((board) => board.id === selectedBoardId) ?? boards[0],
    [boards, selectedBoardId],
  );

  const updateLook = (id: string, patch: Partial<MockLook>) => {
    setLooks((prev) =>
      prev.map((look) =>
        look.id === id
          ? {
              ...look,
              ...patch,
              updatedAt: new Date().toISOString(),
            }
          : look,
      ),
    );
  };

  const createLook = () => {
    const next: MockLook = {
      id: makeId("look"),
      title: `New Look ${looks.length + 1}`,
      itemIds: mockWardrobeItems.slice(0, 2).map((item) => item.id),
      note: "",
      updatedAt: new Date().toISOString(),
    };
    setLooks((prev) => [next, ...prev]);
    setSelectedLookId(next.id);
    setActiveLookOverlayId(next.id);
    setIsLookOverlayOpen(true);
    setTab("looks");
  };

  const deleteLook = () => {
    if (!overlayLook) return;
    const filtered = looks.filter((look) => look.id !== overlayLook.id);
    setLooks(filtered);
    setSelectedLookId(filtered[0]?.id ?? "");
    setActiveLookOverlayId(filtered[0]?.id ?? "");
    setConfirmLookDelete(false);
    if (!filtered.length) setIsLookOverlayOpen(false);
  };


  const createBoard = () => {
    const next: MockMoodboard = {
      id: makeId("board"),
      title: `New Board ${boards.length + 1}`,
      description: "",
      pins: [],
      updatedAt: new Date().toISOString(),
    };
    setBoards((prev) => [next, ...prev]);
    setSelectedBoardId(next.id);
    setTab("boards");
  };

  const updateBoard = (id: string, patch: Partial<MockMoodboard>) => {
    setBoards((prev) =>
      prev.map((board) =>
        board.id === id
          ? {
              ...board,
              ...patch,
              updatedAt: new Date().toISOString(),
            }
          : board,
      ),
    );
  };

  const deleteBoard = () => {
    if (!selectedBoard) return;
    const filtered = boards.filter((board) => board.id !== selectedBoard.id);
    setBoards(filtered);
    setSelectedBoardId(filtered[0]?.id ?? "");
    setConfirmBoardDelete(false);
  };

  const addPin = (pin: MoodboardPin) => {
    if (!selectedBoard) return;
    updateBoard(selectedBoard.id, { pins: [...selectedBoard.pins, pin] });
  };

  const removePin = (pinId: string) => {
    if (!selectedBoard) return;
    updateBoard(selectedBoard.id, { pins: selectedBoard.pins.filter((pin) => pin.id !== pinId) });
  };

  const movePin = (pinId: string, dir: -1 | 1) => {
    if (!selectedBoard) return;
    const idx = selectedBoard.pins.findIndex((pin) => pin.id === pinId);
    const to = idx + dir;
    if (idx < 0 || to < 0 || to >= selectedBoard.pins.length) return;
    const next = [...selectedBoard.pins];
    const tmp = next[idx];
    next[idx] = next[to];
    next[to] = tmp;
    updateBoard(selectedBoard.id, { pins: next });
  };


  useEffect(() => {
    if (!isLookOverlayOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLookOverlayOpen(false);
        setConfirmLookDelete(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isLookOverlayOpen]);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: spacing.xxl, display: "grid", gap: spacing.xl }}>
      <section
        className="ui-enter"
        style={{
          border: `1px solid ${colors.border}`,
          borderRadius: spacing.lg,
          background: colors.surface,
          padding: spacing.xl,
          display: "grid",
          gap: spacing.lg,
        }}
      >
        <div>
          {tab === "looks" ? (
            <>
              <p style={{ ...typography.tag, margin: 0, color: colors.mutedText }}>Synthe wardrobe</p>
              <h1 style={{ ...typography.sectionTitle, margin: `${spacing.sm} 0 0` }}>My Wardrobe</h1>
              <p style={{ ...typography.body, margin: `${spacing.sm} 0 0`, color: colors.mutedText }}>
                Curated pieces. Endless combinations.
              </p>
            </>
          ) : (
            <>
              <p style={{ ...typography.tag, margin: 0, color: colors.mutedText }}>Moodboard studio</p>
              <h1 style={{ ...typography.sectionTitle, margin: `${spacing.sm} 0 0` }}>Build looks. Compose moodboards.</h1>
              <p style={{ ...typography.body, margin: `${spacing.sm} 0 0`, color: colors.mutedText }}>
                Visual direction and references for upcoming styling stories.
              </p>
            </>
          )}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: spacing.sm, justifyContent: "space-between" }}>
          <div style={{ display: "inline-flex", gap: spacing.xs, padding: spacing.xs, background: colors.background, borderRadius: spacing.xxl }}>
            <button onClick={() => setTab("looks")} style={tabBtn(tab === "looks")}>Looks</button>
            <button onClick={() => setTab("boards")} style={tabBtn(tab === "boards")}>Moodboards</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: spacing.sm }}>
            <Button onClick={createLook}>New look</Button>
            <Button onClick={createBoard}>New board</Button>
          </div>
        </div>
      </section>

      {tab === "looks" ? (
        <section style={{ display: "grid", gap: spacing.lg }}>
          <div style={panelStyle}>
            <div style={{ marginBottom: spacing.lg }}>
              <p style={{ ...typography.tag, margin: 0, color: colors.mutedText }}>Featured looks</p>
              <h2 style={{ ...typography.sectionTitle, margin: `${spacing.xs} 0 0` }}>My Wardrobe</h2>
              <p style={{ ...typography.body, margin: `${spacing.xs} 0 0`, color: colors.mutedText }}>
                Curated pieces. Endless combinations.
              </p>
            </div>

            {!looks.length ? (
              <p style={{ ...typography.body, color: colors.mutedText, margin: 0 }}>No looks yet. Create one.</p>
            ) : (
              <div style={{ display: "grid", gap: spacing.md, gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gridAutoRows: "minmax(120px, auto)" }}>
                {looks.map((look, idx) => {
                  const pattern = lookPatternMap[idx % lookPatternMap.length];
                  const lookImages = look.itemIds
                    .map((id) => mockWardrobeItems.find((item) => item.id === id)?.image)
                    .filter(Boolean) as string[];

                  return (
                    <button
                      key={look.id}
                      onClick={() => {
                        setSelectedLookId(look.id);
                        setConfirmLookDelete(false);
                        setActiveLookOverlayId(look.id);
                        setIsLookOverlayOpen(true);
                      }}
                      style={{
                        ...cardBtn(selectedLook?.id === look.id),
                        gridColumn: `span ${pattern.colSpan}`,
                        minHeight: pattern.minHeight,
                        padding: spacing.xs,
                      }}
                    >
                      <LookGalleryCard
                        title={look.title}
                        styleLabel={look.note?.slice(0, 32) || "Quiet layers"}
                        images={lookImages}
                        active={selectedLook?.id === look.id}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {isLookOverlayOpen && overlayLook ? (
            <div style={overlayStyle} onClick={() => { setIsLookOverlayOpen(false); setConfirmLookDelete(false); }}>
              <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: spacing.md }}>
                  <h2 style={{ ...panelTitle, margin: 0 }}>Edit look</h2>
                  <button onClick={() => { setIsLookOverlayOpen(false); setConfirmLookDelete(false); }} style={smallBtn}>Close</button>
                </div>
                <div style={{ display: "grid", gap: spacing.sm }}>
                  <input value={overlayLook.title} onChange={(e) => updateLook(overlayLook.id, { title: e.target.value })} style={inputStyle} placeholder="Look title" />
                  <textarea value={overlayLook.note ?? ""} onChange={(e) => updateLook(overlayLook.id, { note: e.target.value })} style={{ ...inputStyle, minHeight: "90px", resize: "vertical" }} placeholder="Styling note" />
                  <p style={{ ...typography.tag, margin: 0, color: colors.mutedText }}>Selected pieces</p>
                  <div style={{ display: "grid", gap: spacing.sm }}>
                    {overlayLook.itemIds.map((id, idx) => {
                      const item = mockWardrobeItems.find((p) => p.id === id);
                      if (!item) return null;
                      return (
                        <div key={`${overlayLook.id}-${id}-${idx}`} style={rowStyle}>
                          <span style={{ fontSize: "14px" }}>{item.name}</span>
                          <div style={{ display: "flex", gap: spacing.xs }}>
                                                        <button onClick={() => updateLook(overlayLook.id, { itemIds: overlayLook.itemIds.filter((itemId) => itemId !== id) })} style={smallBtn}>Remove</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p style={{ ...typography.tag, margin: `${spacing.md} 0 ${spacing.sm}` }}>Add from wardrobe</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: spacing.sm }}>
                  {mockWardrobeItems.map((item) => (
                    <div key={`add-${item.id}`} style={tileStyle}>
                      <ProductCard {...item} />
                      <button onClick={() => {
                        if (overlayLook.itemIds.includes(item.id)) return;
                        updateLook(overlayLook.id, { itemIds: [...overlayLook.itemIds, item.id] });
                      }} style={{ ...smallBtn, width: "100%" }}>Add piece</button>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: spacing.md }}>
                  {!confirmLookDelete ? (
                    <button onClick={() => setConfirmLookDelete(true)} style={dangerBtn}>Delete look</button>
                  ) : (
                    <div style={{ display: "flex", gap: spacing.xs }}>
                      <button onClick={deleteLook} style={dangerBtn}>Confirm delete</button>
                      <button onClick={() => setConfirmLookDelete(false)} style={smallBtn}>Cancel</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </section>
      ) : (
        <section style={{ display: "grid", gap: spacing.lg }}>
          <div style={{ ...panelStyle, display: "grid", gap: spacing.lg }}>
            <div style={{ display: "grid", gap: spacing.sm }}>
              <p style={{ ...typography.tag, margin: 0, color: colors.mutedText }}>Moodboard</p>
              <h2 style={{ ...typography.sectionTitle, margin: 0 }}>Explore. Play. Refine your style story.</h2>
              <p style={{ ...typography.body, margin: 0, color: colors.mutedText }}>
                Gather visual references and shape your next styling direction.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: spacing.sm, alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: spacing.xs }}>
                <label htmlFor="board-selector" style={{ ...typography.tag, color: colors.mutedText }}>
                  Active board
                </label>
                <select
                  id="board-selector"
                  value={selectedBoard?.id ?? ""}
                  onChange={(e) => setSelectedBoardId(e.target.value)}
                  style={{ ...inputStyle, minWidth: "220px", background: colors.surface }}
                >
                  {boards.map((board) => (
                    <option key={board.id} value={board.id}>
                      {board.title}
                    </option>
                  ))}
                </select>
              </div>
              {selectedBoard ? (
                <span style={{ ...typography.tag, color: colors.mutedText }}>
                  Updated {fmtDate(selectedBoard.updatedAt)}
                </span>
              ) : null}
            </div>

            {!selectedBoard ? (
              <p style={{ ...typography.body, color: colors.mutedText, margin: 0 }}>No boards yet. Create one.</p>
            ) : (
              <>
                <div style={{ display: "flex", justifyContent: "flex-end", position: "relative" }}>
                  <button
                    onClick={() => setIsQuickAddOpen((prev) => !prev)}
                    style={{
                      ...smallBtn,
                      borderRadius: "999px",
                      width: "40px",
                      height: "40px",
                      fontSize: "20px",
                      lineHeight: 1,
                      boxShadow: "0 8px 20px rgba(40, 32, 24, 0.18)",
                    }}
                    aria-label="Add pin"
                    aria-expanded={isQuickAddOpen}
                  >
                    +
                  </button>
                  {isQuickAddOpen ? (
                    <div style={{ position: "absolute", top: "46px", right: 0, display: "grid", gap: spacing.xs, padding: spacing.xs, background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: spacing.md }}>
                      <button onClick={() => { addPin({ id: makeId("pin"), type: "product", productId: mockWardrobeItems[0].id, x: 1, y: 1, w: 4, h: 4 }); setIsQuickAddOpen(false); }} style={smallBtn}>Product pin</button>
                      <button onClick={() => { addPin({ id: makeId("pin"), type: "look", lookId: looks[0]?.id ?? "", x: 1, y: 1, w: 5, h: 4 }); setIsQuickAddOpen(false); }} style={smallBtn}>Look pin</button>
                      <button onClick={() => { addPin({ id: makeId("pin"), type: "note", text: "Add tonal layering with matte texture.", x: 1, y: 1, w: 4, h: 2 }); setIsQuickAddOpen(false); }} style={smallBtn}>Note pin</button>
                      <button onClick={() => { addPin({ id: makeId("pin"), type: "color", hex: "#B28A6E", label: "Clay", x: 1, y: 1, w: 3, h: 2 }); setIsQuickAddOpen(false); }} style={smallBtn}>Color chip</button>
                    </div>
                  ) : null}
                </div>

                <div
                  style={{
                    marginTop: spacing.sm,
                    columnCount: 3,
                    columnGap: spacing.md,
                    background: "#efe7db",
                    borderRadius: spacing.md,
                    padding: spacing.lg,
                    boxShadow: "inset 0 0 0 1px rgba(83, 62, 48, 0.12)",
                  }}
                >
                  {selectedBoard.pins.map((pin, idx) => (
                    <div
                      key={pin.id}
                      onMouseEnter={() => setActivePinActionsId(pin.id)}
                      onMouseLeave={() => setActivePinActionsId((current) => (current === pin.id ? null : current))}
                      style={{
                        breakInside: "avoid",
                        marginBottom: spacing.md,
                        border: `1px solid rgba(83, 62, 48, 0.16)`,
                        borderRadius: spacing.md,
                        background: "#fffaf4",
                        overflow: "hidden",
                        display: "grid",
                        boxShadow: "0 10px 24px rgba(83, 62, 48, 0.14)",
                        transform: `translateY(${(idx % 3) * 4}px) rotate(${[-1.2, 0.65, -0.4, 1.1, -0.8][idx % 5]}deg)`,
                      }}
                    >
                      {pin.type === "product" ? (
                        (() => {
                          const p = mockWardrobeItems.find((item) => item.id === pin.productId);
                          return p ? (
                            <div style={{ minHeight: idx % 2 === 0 ? "250px" : "220px" }}>
                              <ProductCard {...p} />
                            </div>
                          ) : null;
                        })()
                      ) : null}
                      {pin.type === "look" ? (
                        (() => {
                          const look = looks.find((item) => item.id === pin.lookId);
                          if (!look) return <div style={{ padding: spacing.sm }}>Missing look</div>;
                          return (
                            <div style={{ minHeight: idx % 2 === 0 ? "320px" : "280px" }}>
                              <OutfitCard
                                title={look.title}
                                items={look.itemIds
                                  .map((id) => mockWardrobeItems.find((item) => item.id === id))
                                  .filter(Boolean)
                                  .map((item) => ({ id: item!.id, image: item!.image }))}
                              />
                            </div>
                          );
                        })()
                      ) : null}
                      {pin.type === "note" ? (
                        <div style={{ padding: spacing.md, display: "grid", alignContent: "center", minHeight: idx % 2 ? "180px" : "140px" }}>
                          <p style={{ ...typography.body, margin: 0, fontStyle: "italic" }}>{pin.text}</p>
                        </div>
                      ) : null}
                      {pin.type === "color" ? (
                        <div style={{ padding: spacing.md, display: "grid", alignContent: "center", gap: spacing.sm, minHeight: "120px" }}>
                          <div style={{ width: "100%", height: idx % 2 ? "40px" : "30px", borderRadius: spacing.xs, background: pin.hex }} />
                          <span style={{ ...typography.tag }}>{pin.label}</span>
                        </div>
                      ) : null}

                      <div style={{ display: "flex", gap: spacing.xs, padding: spacing.xs, justifyContent: "flex-end", opacity: activePinActionsId === pin.id ? 1 : 0, transition: "opacity 180ms ease" }}>
                        <button onClick={() => movePin(pin.id, -1)} style={smallBtn}>↑</button>
                        <button onClick={() => movePin(pin.id, 1)} style={smallBtn}>↓</button>
                        <button onClick={() => removePin(pin.id)} style={smallBtn}>Remove</button>
                      </div>
                      <span style={{ ...typography.tag, color: colors.mutedText, padding: `0 ${spacing.sm} ${spacing.sm}` }}>{pin.type} #{idx + 1}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: spacing.md }}>
                  {!confirmBoardDelete ? (
                    <button onClick={() => setConfirmBoardDelete(true)} style={dangerBtn}>Delete board</button>
                  ) : (
                    <div style={{ display: "flex", gap: spacing.xs }}>
                      <button onClick={deleteBoard} style={dangerBtn}>Confirm delete</button>
                      <button onClick={() => setConfirmBoardDelete(false)} style={smallBtn}>Cancel</button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

const panelStyle: CSSProperties = {
  border: `1px solid ${colors.border}`,
  borderRadius: spacing.lg,
  background: colors.surface,
  padding: spacing.lg,
  minHeight: "400px",
};

const panelTitle: CSSProperties = { ...typography.cardTitle, margin: `0 0 ${spacing.md}` };

const inputStyle: CSSProperties = {
  ...typography.body,
  border: `1px solid ${colors.border}`,
  borderRadius: spacing.sm,
  background: colors.background,
  color: colors.primaryText,
  padding: `${spacing.sm} ${spacing.md}`,
};


const overlayStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(17, 24, 39, 0.3)",
  backdropFilter: "blur(8px)",
  display: "grid",
  placeItems: "center",
  padding: spacing.lg,
  zIndex: 50,
};

const modalStyle: CSSProperties = {
  width: "min(980px, 100%)",
  maxHeight: "90vh",
  overflow: "auto",
  border: `1px solid ${colors.border}`,
  borderRadius: spacing.lg,
  background: colors.surface,
  padding: spacing.lg,
  display: "grid",
  gap: spacing.sm,
};

const tabBtn = (active: boolean): CSSProperties => ({
  ...typography.body,
  cursor: "pointer",
  border: "none",
  borderRadius: spacing.xxl,
  padding: `${spacing.sm} ${spacing.md}`,
  background: active ? colors.primaryText : "transparent",
  color: active ? colors.surface : colors.primaryText,
});

const smallBtn: CSSProperties = {
  ...typography.tag,
  cursor: "pointer",
  border: `1px solid ${colors.border}`,
  borderRadius: spacing.xxl,
  background: colors.background,
  padding: `${spacing.xs} ${spacing.sm}`,
};

const dangerBtn: CSSProperties = {
  ...smallBtn,
  border: `1px solid #b63f46`,
  color: "#b63f46",
};

const cardBtn = (active: boolean): CSSProperties => ({
  ...typography.body,
  cursor: "pointer",
  textAlign: "left",
  border: `1px solid ${active ? colors.primaryText : colors.border}`,
  borderRadius: spacing.md,
  background: active ? `${colors.background}` : colors.surface,
  padding: spacing.md,
});

const tileStyle: CSSProperties = {
  display: "grid",
  gap: spacing.xs,
  alignContent: "start",
};

const rowStyle: CSSProperties = {
  border: `1px solid ${colors.border}`,
  borderRadius: spacing.sm,
  padding: spacing.sm,
  display: "flex",
  justifyContent: "space-between",
  gap: spacing.sm,
  alignItems: "center",
};
