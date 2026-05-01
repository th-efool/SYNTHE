"use client";

export function ProcessingIndicator() {
  return (
    <div style={{ width: 40, height: 40, border: "4px solid #e6ddd2", borderTop: "4px solid #c97b5a", borderRadius: "50%", animation: "spin 1s linear infinite" }}>
      <style>{`@keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }`}</style>
    </div>
  );
}
