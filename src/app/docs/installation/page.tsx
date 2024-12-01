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
import { Button } from "@/components/ui/button";
import {
  viteTsConfig,
  tsAppConfig,
  tsConfig,
  utils,
  viteConfig,
} from "@/codes/installation";
function page() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="grid gap-6">
      <h1 className="text-lg md:text-2xl font-semibold">Installation</h1>
      <div className="grid gap-2">
        <h3 className="text-base md:text-lg font-semibold">Add Tailwind CSS</h3>
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
            <h3 className="text-base md:text-lg font-semibold">
              Edit tsconfig.json file
            </h3>
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
            />
            <h3
              className="text-base md:text-lg font-semibold"
              id="tsconfig-app"
            >
              Edit tsconfig.app.json file
            </h3>
            <p className="text-sm md:text-base">
              Add the following code to the{" "}
              <span className="font-mono p-0.5 md:p-1 rounded-md bg-muted">
                tsconfig.app.json
              </span>{" "}
              file to resolve paths, for your IDE:
            </p>
            <CodeBlockComponent
              language="json"
              code={tsAppConfig}
              className=""
            />
            <h3 className="text-base md:text-lg font-semibold">
              Update vite.config.ts
            </h3>
            <p className="text-sm md:text-base">
              Add the following code to the vite.config.ts so your app can
              resolve paths without error
            </p>
            <div className="grid gap-2 bg-muted rounded-md p-4 relative">
              <p className="font-mono text-sm md:text-base">
                <span className="text-sky-700 dark:text-sky-300">npm</span>{" "}
                <span className="text-violet-700 dark:text-violet-300 ">
                  i -D @types/node
                </span>
              </p>
              <div className="absolute inset-y-0 right-4 flex items-center">
                <Button
                  variant="secondary"
                  className=""
                  size="icon"
                  onClick={() => {
                    navigator.clipboard.writeText("npm i -D @types/node");
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 2000);
                  }}
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Clipboard className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <CodeBlockComponent
              language="typescript"
              code={viteConfig}
              className=""
            />
          </TabsContent>
          <TabsContent value="react" className="grid gap-2">
            <h3 className="text-base md:text-lg font-semibold">
              Edit tsconfig.json file
            </h3>
            <p className="text-sm md:text-base">
              Configure the path aliases in your{" "}
              <span className="font-mono p-0.5 md:p-1 rounded-md bg-muted">
                tsconfig.json
              </span>{" "}
              file.
            </p>
            <CodeBlockComponent language="json" code={tsConfig} className="" />
          </TabsContent>
        </Tabs>
        <h3 className="text-base md:text-lg font-semibold">Add Tailwind CSS</h3>
        <p className="text-sm md:text-base">lib/utils.ts</p>
        <CodeBlockComponent language="typescript" code={utils} className="" />
        <h3 className="text-base md:text-lg font-semibold">That's it</h3>
        <p className="text-sm md:text-base">
          You can now start adding components to your project.
        </p>
      </div>
    </div>
  );
}

export default page;
