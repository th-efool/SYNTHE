import Link from "next/link";

export default async function TypingQuizStepPage({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;
  const numericStep = Number(step);
  const isValidStep = Number.isFinite(numericStep) && numericStep > 0;
  const nextStep = isValidStep ? numericStep + 1 : 1;
  const isLastStep = numericStep >= 3;

  return (
    <main style={{ padding: 24 }}>
      <h1>Quiz Step {step}</h1>
      <p>Answer this step, then continue.</p>
      {isLastStep ? (
        <Link href="/typing/processing">Submit and process</Link>
      ) : (
        <Link href={`/typing/quiz/${nextStep}`}>Next step</Link>
      )}
    </main>
  );
}
