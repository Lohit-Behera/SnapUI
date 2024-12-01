import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Clipboard } from "lucide-react";

function InstallModuleCode({ modules }: { modules: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="grid gap-2 bg-muted rounded-md p-4 relative">
      <p className="font-mono text-sm md:text-base">
        <span className="text-sky-700 dark:text-sky-300">npm</span>{" "}
        <span className="text-violet-700 dark:text-violet-300 ">
          install {modules}
        </span>
      </p>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="p-1">
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Clipboard className="h-4 w-4" />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(`npm install ${modules}`);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            >
              npm
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(`yarn add ${modules}`);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            >
              yarn
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default InstallModuleCode;
