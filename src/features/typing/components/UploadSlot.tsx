"use client";

import { typingTokens } from "./uiTokens";

type UploadSlotProps = {
  label: string;
  previewUrl?: string;
  onFileSelected: (file: File) => void;
  onRemove?: () => void;
};

export function UploadSlot({ label, previewUrl, onFileSelected, onRemove }: UploadSlotProps) {
  return (
    <div style={{ border: typingTokens.border.soft, borderRadius: typingTokens.border.radius, padding: typingTokens.spacing.sm }}>
      <p style={{ marginTop: 0, fontFamily: typingTokens.typography.serif }}>{label}</p>
      {previewUrl ? (
        <div>
          <img src={previewUrl} alt={label} style={{ width: "100%", maxHeight: 180, objectFit: "cover", borderRadius: 6 }} />
          <button onClick={onRemove} style={{ marginTop: 8 }}>Remove</button>
        </div>
      ) : (
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            onFileSelected(file);
          }}
        />
      )}
    </div>
  );
}
