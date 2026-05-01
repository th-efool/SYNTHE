"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
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
  const canAnalyze = uploadedImages.length >= MIN_IMAGES;

  return (
    <main style={editorialPageStyle}>
      <h1>Upload</h1>
      <p>Add at least {MIN_IMAGES} images (max {MAX_IMAGES}) to analyze.</p>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {slots.map((index) => (
          <UploadSlot
            key={index}
            label={`Image ${index + 1}`}
            previewUrl={uploadedImages[index]}
            onFileSelected={(file) => {
              if (uploadedImages.length >= MAX_IMAGES) return;
              const previewUrl = URL.createObjectURL(file);
              addImagePreview(previewUrl);
            }}
            onRemove={uploadedImages[index] ? () => removeImagePreview(uploadedImages[index]) : undefined}
          />
        ))}
      </div>
      <button disabled={!canAnalyze} onClick={() => router.push("/typing/processing")} style={{ marginTop: 16 }}>
        Analyze
      </button>
    </main>
  );
}
