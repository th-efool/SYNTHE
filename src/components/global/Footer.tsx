"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer>
      <p>SYNTHE</p>
      <p>(c) Placeholder</p>
    </footer>
  );
}
