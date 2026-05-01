"use client";

import { useRef } from "react";
import { typingTokens } from "./uiTokens";

type UploadSlotProps = {
  label: string;
  previewUrl?: string;
  onFileSelected: (file: File) => void;
  onRemove?: () => void;
};

export function UploadSlot({ label, previewUrl, onFileSelected, onRemove }: UploadSlotProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const filled = !!previewUrl;

  return (
    <div
      className={`upload-slot ${filled ? "is-filled" : "is-empty"}`}
      style={{
        border: filled ? `1px solid ${typingTokens.color.accent}` : typingTokens.border.soft,
        borderRadius: typingTokens.border.radius,
        padding: typingTokens.spacing.sm,
        background: filled ? "#fff" : "#fbf8f3",
        transition: "border-color 200ms ease, background-color 200ms ease, transform 200ms ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <p style={{ margin: 0, fontFamily: typingTokens.typography.serif, fontSize: 13 }}>{label}</p>
        <span style={{ fontSize: 11, color: filled ? typingTokens.color.accent : typingTokens.color.muted }}>
          {filled ? "Ready" : "Empty"}
        </span>
      </div>

      {filled ? (
        <div style={{ animation: "slot-in 220ms ease" }}>
          <img
            src={previewUrl}
            alt={label}
            style={{ width: "100%", maxHeight: 180, objectFit: "cover", borderRadius: 6, display: "block" }}
          />
          <button
            type="button"
            onClick={onRemove}
            className="slot-remove"
            style={{
              marginTop: 8,
              border: typingTokens.border.soft,
              background: "#fff",
              color: typingTokens.color.text,
              padding: "6px 10px",
              borderRadius: 6,
              fontSize: 12,
            }}
          >
            Remove
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="slot-empty-btn"
          style={{
            width: "100%",
            minHeight: 140,
            border: `1px dashed ${typingTokens.color.muted}`,
            borderRadius: 6,
            background: "transparent",
            color: typingTokens.color.muted,
            fontSize: 13,
            display: "grid",
            placeItems: "center",
            transition: "border-color 200ms ease, background-color 200ms ease, color 200ms ease",
          }}
        >
          <span>+ Add image</span>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (!file) return;
          onFileSelected(file);
          event.target.value = "";
        }}
      />

      <style>{`
        .upload-slot.is-empty:hover{background:#f4ede2}
        .slot-empty-btn:hover{border-color:${typingTokens.color.accent};color:${typingTokens.color.text};background:#f7efe5}
        .slot-empty-btn:active{transform:scale(.99)}
        .slot-remove:hover{border-color:${typingTokens.color.accent};color:${typingTokens.color.accent}}
        @keyframes slot-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </div>
  );
}
