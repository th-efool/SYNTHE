import Link from "next/link";

export default function TypingUploadPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Upload</h1>
      <p>Upload your photos to continue.</p>
      <Link href="/typing/processing">Process uploads</Link>
    </main>
  );
}
