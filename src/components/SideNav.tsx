"use client";

import { docsConfig } from "@/config/docs-config";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

function SideNav() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <ScrollArea className="h-[85vh]">
      <div className="flex flex-col py-2 gap-5 ">
        {docsConfig.map((section, _) => (
          <div
            key={section.title}
            className="flex items-start flex-col gap-1  "
          >
            <h2 className="text-base">{section.title}</h2>
            <div className="flex flex-col items-start space-y-0 w-full">
              {section.pages &&
                section.pages.map((page, _) => (
                  <Button
                    key={page.title}
                    variant={pathname === page?.path ? "secondary" : "ghost"}
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
  );
}

export default SideNav;
