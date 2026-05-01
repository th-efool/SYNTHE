"use client";

type UploadSlotProps = {
  label: string;
  previewUrl?: string;
  onFileSelected: (file: File) => void;
  onRemove?: () => void;
};

export function UploadSlot({ label, previewUrl, onFileSelected, onRemove }: UploadSlotProps) {
  return (
    <div style={{ border: "1px solid #d9d0c5", borderRadius: 8, padding: 12 }}>
      <p style={{ marginTop: 0 }}>{label}</p>
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
