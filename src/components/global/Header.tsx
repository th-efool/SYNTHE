"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header>
      <nav>
        <Link href="/">SYNTHE</Link>{" "}
        <Link href="/explore">Explore</Link>{" "}
        <Link href="/typing">Typing</Link>{" "}
        <Link href="/wardrobe">Wardrobe</Link>{" "}
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
}
