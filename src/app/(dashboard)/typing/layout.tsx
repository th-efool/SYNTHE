import TypingProvider from "./_components/typing-provider";

export default function TypingLayout({ children }: { children: React.ReactNode }) {
  return <TypingProvider>{children}</TypingProvider>;
}
