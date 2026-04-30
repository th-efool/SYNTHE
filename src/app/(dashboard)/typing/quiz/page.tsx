import Link from "next/link";

export default function TypingQuizPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Quiz Overview</h1>
      <p>Ready to start the step-by-step quiz?</p>
      <Link href="/typing/quiz/1">Start quiz</Link>
    </main>
  );
}
