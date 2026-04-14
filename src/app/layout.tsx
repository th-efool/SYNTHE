import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
});

export const metadata: Metadata = {
  title: "SYNTHE | Intelligent Style Resolution",
  description: "Find what naturally suits you. Clothes should sit right on you — the shape, the color, the way it comes together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth h-full antialiased ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-full flex flex-col bg-[#F9F6F0] text-[#7A6F68] font-light overflow-x-hidden leading-[1.8]">
        {children}
      </body>
    </html>
  );
}
