"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";
import { UploadSlot } from "@/features/typing/components/UploadSlot";
import { useTypingPageFX } from "@/features/typing/components/useTypingPageFX";

const MAX_IMAGES = 3;
const MIN_IMAGES = 2;

export default function TypingUploadPage() {
  const router = useRouter();
  const { uploadedImages, addImagePreview, removeImagePreview } = useTypingStore();
  const { containerStyle } = useTypingPageFX();
  const slots = useMemo(() => Array.from({ length: MAX_IMAGES }, (_, index) => index), []);
  const canAnalyze = uploadedImages.length >= MIN_IMAGES;

  return (
    <main style={{ ...editorialPageStyle, ...containerStyle }}>
      <h1>Upload</h1>
      <p>Add at least {MIN_IMAGES} images (max {MAX_IMAGES}) to analyze.</p>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {slots.map((index) => (
          <div key={index} className="slot-wrap" style={{ transition: "opacity 200ms ease, transform 200ms ease" }}>
            <UploadSlot
              label={`Image ${index + 1}`}
              previewUrl={uploadedImages[index]}
              onFileSelected={(file) => {
                if (uploadedImages.length >= MAX_IMAGES) return;
                addImagePreview(URL.createObjectURL(file));
              }}
              onRemove={uploadedImages[index] ? () => removeImagePreview(uploadedImages[index]) : undefined}
            />
          </div>
        ))}
      </div>
      <p style={{ fontSize: 12, color: typingTokens.color.muted }}>Use natural lighting. Avoid filters. Face clearly visible.</p>
      {!canAnalyze && <p style={{ fontSize: 12, color: typingTokens.color.muted }}>Add at least {MIN_IMAGES} images.</p>}
      <button disabled={!canAnalyze} onClick={() => router.push("/typing/processing")} style={{ marginTop: 10 }}>Analyze</button>
    </main>
  );
}
