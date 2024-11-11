"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import snapUiBlack from "@/assets/snap-ui-black.svg";
import Link from "next/link";

function Header() {
  return (
    <header className="z-20 w-full sticky top-0 p-2 backdrop-blur bg-background/50">
      <nav className="hidden md:flex justify-between space-x-2">
        <div className="w-full flex justify-between">
          <div className="flex items-center space-x-2">
            <Link href={"/"}>
              <Image
                className="w-8 h-8 dark:invert"
                src={snapUiBlack}
                alt="Snap UI"
              />
            </Link>
            <Link href={"/"}>
              <h1 className="text-xl font-bold">Snap UI</h1>
            </Link>
          </div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
