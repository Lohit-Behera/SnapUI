"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import CodeBlockComponent from "@/components/CodeBlock";

function page() {
  const [copied, setCopied] = useState(false);

  const viteTsConfig = `{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`;
  return (
    <div className="grid gap-6">
      <h1 className="text-lg md:text-2xl font-semibold">Installation</h1>
      <div className="grid gap-2">
        <h1 className="text-base md:text-lg font-semibold">Add Tailwind CSS</h1>
        <p className="text-sm md:text-base">
          Components are styled using Tailwind CSS. You need to install Tailwind
          CSS in your project.
        </p>
        <Link
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          className="text-sm md:text-base underline underline-offset-2"
        >
          Follow the Tailwind CSS installation instructions to get started.
        </Link>
      </div>
      <div className="grid gap-2">
        <h1 className="text-base md:text-lg font-semibold">Add dependencies</h1>
        <p className="text-sm md:text-base">
          Add the following dependencies to your project:
        </p>
        <div className="grid gap-2 bg-muted rounded-md p-4 relative">
          <p className="font-mono text-sm md:text-base">
            <span className="text-sky-700 dark:text-sky-300">npm</span>{" "}
            <span className="text-violet-700 dark:text-violet-300 ">
              install tailwindcss-animate class-variance-authority clsx
              tailwind-merge lucide-react
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
                    navigator.clipboard.writeText(
                      "npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react"
                    );
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
                    navigator.clipboard.writeText(
                      "yarn add tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react"
                    );
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
      </div>
      <div className="gird gap-4">
        <h1 className="text-base md:text-lg font-semibold">
          Configure path aliases
        </h1>
        <Tabs defaultValue="vite" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger className="w-full" value="vite">
              Vite React
            </TabsTrigger>
            <TabsTrigger className="w-full" value="react">
              Manual React
            </TabsTrigger>
          </TabsList>
          <TabsContent value="vite" className="grid gap-2">
            <h1 className="text-base md:text-lg font-semibold">
              Edit tsconfig.json file
            </h1>
            <p className="text-sm md:text-base">
              The current version of Vite splits TypeScript configuration into
              three files, two of which need to be edited. Add the{" "}
              <span className="font-mono p-0.5 md:p-1 rounded-md bg-muted">
                baseUrl
              </span>{" "}
              and{" "}
              <span className="font-mono p-0.5 md:p-1 rounded-md bg-muted">
                paths
              </span>{" "}
              properties to the{" "}
              <span className="font-mono p-0.5 md:p-1 rounded-md bg-muted">
                compilerOptions
              </span>{" "}
              section of the{" "}
              <span className="font-mono p-0.5 md:p-1 rounded-md bg-muted">
                tsconfig.json
              </span>{" "}
              and{" "}
              <span className="font-mono p-0.5 md:p-1 rounded-md bg-muted">
                tsconfig.app.json
              </span>{" "}
              files:
            </p>
            <CodeBlockComponent
              language="json"
              code={viteTsConfig}
              className=""
              wrapLongLines={false}
              showLineNumbers={true}
            />
          </TabsContent>
          <TabsContent value="react">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default page;
