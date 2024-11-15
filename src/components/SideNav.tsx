"use client";

import { docsConfig } from "@/config/docs-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarProps {
  setOpen?: (open: boolean) => void;
}

function SideNav() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col py-2 gap-5 ">
      {docsConfig.map((section, _) => (
        <div key={section.title} className="flex items-start flex-col gap-1  ">
          <h2 className="text-base">{section.title}</h2>
          <div className="flex flex-col items-start space-y-2 w-full">
            {section.pages &&
              section.pages.map((page, _) => (
                <Link
                  href={page?.path || "/"}
                  key={page.title}
                  className={`text-sm hover:underline ${
                    pathname === page?.path
                      ? "text-foreground underline"
                      : "text-muted-foreground"
                  }`}
                >
                  {page.title}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideNav;
