"use client";

import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

const mockImage = "preview://sample-face-1";

export default function TypingUploadPage() {
  const router = useRouter();
  const { uploadedImages, addImagePreview, removeImagePreview } = useTypingStore();

  return (
    <main style={{ padding: 24 }}>
      <h1>Upload</h1>
      <p>Upload your photos to continue.</p>
      <button onClick={() => addImagePreview(`${mockImage}-${uploadedImages.length + 1}`)}>Add mock image</button>
      {uploadedImages.length > 0 && (
        <ul>
          {uploadedImages.map((img) => (
            <li key={img}>
              {img} <button onClick={() => removeImagePreview(img)}>remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => router.push("/typing/processing")}>Process uploads</button>
    </main>
  );
}
