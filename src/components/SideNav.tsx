"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNav() {
  const pathname = usePathname();
  return (
    <aside className="min-w-[250px] hidden md:flex flex-col space-y-4 sticky top-6">
      <h1 className="font-semibold">Getting Started</h1>
      <div className="grid gap-0">
        <Link
          href="/docs"
          className={`hover:underline ${
            pathname === "/docs"
              ? "text-foreground underline"
              : "text-muted-foreground"
          }`}
        >
          Introduction
        </Link>
      </div>
      <h1 className="font-semibold">Components</h1>
      <div className="grid gap-0">
        <Link
          href="/components/buttons"
          className={`hover:underline ${
            pathname === "/components/buttons"
              ? "text-foreground underline"
              : "text-muted-foreground"
          }`}
        >
          Buttons
        </Link>
        <Link
          href="/components/drag-n-drop"
          className={`hover:underline ${
            pathname === "/components/drag-n-drop"
              ? "text-foreground underline"
              : "text-muted-foreground"
          }`}
        >
          Drag and Drop
        </Link>
        <Link
          href="/components/password-input"
          className={`hover:underline ${
            pathname === "/components/password-input"
              ? "text-foreground underline"
              : "text-muted-foreground"
          }`}
        >
          Password Input
        </Link>
      </div>
    </aside>
  );
}

export default SideNav;
