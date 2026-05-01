"use client";

import { typingTokens } from "@/features/typing/components/uiTokens";
import { FlowPage } from "@/features/typing/components/FlowPage";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";
import { UploadSlot } from "@/features/typing/components/UploadSlot";

const MAX_IMAGES = 3;
const MIN_IMAGES = 2;

export default function TypingUploadPage() {
  const router = useRouter();
  const { uploadedImages, addImagePreview, removeImagePreview } = useTypingStore();
  const slots = useMemo(() => Array.from({ length: MAX_IMAGES }, (_, index) => index), []);
  const count = uploadedImages.length;
  const canAnalyze = count >= MIN_IMAGES;
  const remaining = Math.max(MIN_IMAGES - count, 0);

  return (
    <FlowPage>
      <p style={{ margin: 0, fontSize: 12, color: typingTokens.color.muted }}>Stage · Image Analysis</p>
      <h1 style={{ margin: "6px 0 8px" }}>Upload Reference Images</h1>
      <p style={{ marginTop: 0, maxWidth: 620, color: typingTokens.color.muted }}>
        Provide {MIN_IMAGES}–{MAX_IMAGES} clear photos. Visual signal accuracy depends on lighting, neutral background, and unfiltered images.
      </p>

      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", margin: `${typingTokens.spacing.sm}px 0` }}>
        {slots.map((index) => (
          <UploadSlot
            key={index}
            label={`Image ${index + 1}`}
            previewUrl={uploadedImages[index]}
            onFileSelected={(file) => {
              if (uploadedImages.length >= MAX_IMAGES) return;
              addImagePreview(URL.createObjectURL(file));
            }}
            onRemove={uploadedImages[index] ? () => removeImagePreview(uploadedImages[index]) : undefined}
          />
        ))}
      </div>

      <ul style={{ margin: "0 0 12px", paddingLeft: 18, color: typingTokens.color.muted, fontSize: 12 }}>
        <li>Use natural daylight, no filters</li>
        <li>Face clearly visible, hair off the face when possible</li>
        <li>Plain background preferred</li>
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
        <button
          type="button"
          disabled={!canAnalyze}
          onClick={() => router.push("/typing/processing")}
          className="upload-cta"
          style={{
            border: typingTokens.border.soft,
            background: canAnalyze ? typingTokens.color.accent : "#ece6df",
            color: canAnalyze ? "#fff" : typingTokens.color.muted,
            padding: "10px 18px",
            borderRadius: 8,
            cursor: canAnalyze ? "pointer" : "not-allowed",
          }}
        >
          Analyze Images →
        </button>
        <span style={{ fontSize: 12, color: typingTokens.color.muted }}>
          {canAnalyze
            ? `${count} of ${MAX_IMAGES} ready · ready to analyze`
            : `${count} of ${MIN_IMAGES} required · add ${remaining} more`}
        </span>
      </div>
      <style>{`.upload-cta:not(:disabled):hover{filter:brightness(0.95)}`}</style>
    </FlowPage>
  );
}
