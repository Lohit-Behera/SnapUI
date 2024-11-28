"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import snapUiBlack from "@/assets/snap-ui-black.svg";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { PanelTopClose } from "lucide-react";
import { docsConfig } from "@/config/docs-config";
import { usePathname, useRouter } from "next/navigation";
import { ScrollArea } from "./ui/scroll-area";

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header
      className={`z-20 w-full sticky top-0 p-2  ${
        pathname === "/" ? "bg-transparent" : "backdrop-blur bg-background/50"
      }`}
    >
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
      <nav className=" flex md:hidden justify-between">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="my-auto">
              <PanelTopClose />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="flex justify-center items-center">
                <Image
                  className="w-8 h-8 dark:invert mr-2"
                  src={snapUiBlack}
                  alt=""
                />{" "}
                Snap UI
              </DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
              <ScrollArea className="max-h-[40vh]">
                <div className="flex flex-col justify-center py-2 gap-5 ">
                  {docsConfig.map((section, _) => (
                    <div
                      key={section.title}
                      className="flex justify-center flex-col gap-1  "
                    >
                      <h2 className="text-center">{section.title}</h2>
                      <div className="flex flex-col justify-center space-y-2 w-full">
                        {section.pages &&
                          section.pages.map((page, _) => (
                            <Button
                              key={page.title}
                              variant={
                                pathname === page?.path ? "secondary" : "ghost"
                              }
                              onClick={() => router.push(page?.path || "/")}
                              size="xs"
                              className={`text-sm hover:bg-muted w-full justify-start font-normal ${
                                pathname === page?.path
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {page.title}
                            </Button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}

export default Header;
