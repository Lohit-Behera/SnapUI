"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNav() {
  const pathname = usePathname();
  return (
    <aside className="min-w-[250px] hidden md:flex flex-col justify-start space-y-2">
      <h1 className="font-semibold">Getting Started</h1>
      <div className="flex flex-col">
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
      <div className="flex flex-col">
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
