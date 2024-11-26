"use client";

import { useState } from "react";
import PasswordInputShadCn from "@/components/ui/shadcn/password-input";
import PasswordInputTailwind from "@/components/ui/tailwind/password-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlockComponent from "@/components/CodeBlock";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function PasswordInputComponent() {
  const [show, setShow] = useState("preview");

  const shadCnCode = `"use client";

import { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PasswordInput = forwardRef<
  HTMLInputElement,
  { placeholder: string; className?: string }
>(({ placeholder, className, ...props }, ref) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={cn(
        "relative flex h-9 w-full rounded-md border border-input bg-background shadow-sm transition-colors placeholder:text-muted-foreground focus-within:ring-1 ring-ring",
        className
      )}
    >
      <Input
        className="h-auto border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 bg-transparent w-full"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="px-1 py-1 cursor-pointer absolute inset-y-0 right-0 flex items-center"
      >
        {showPassword ? <EyeOff /> : <Eye />}
      </span>
    </div>
  );
});

export default PasswordInput;
`;

  const tailwindCode = `"use client";

import { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const PasswordInput = forwardRef<
  HTMLInputElement,
  { placeholder: string; className?: string }
>(({ placeholder, className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={cn(
        "relative flex h-9 w-full rounded-md border-zinc-100 dark:border-zinc-900 border border-input bg-zinc-50 dark:bg-zinc-950 shadow-sm transition-colors focus-within:ring-1 ring-zinc-900 dark:ring-zinc-100",
        className
      )}
    >
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="appearance-none text-sm rounded-md bg-transparent focus:outline-none w-full px-3 py-2"
        ref={ref}
        {...props}
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="px-1 py-1 cursor-pointer absolute inset-y-0 right-0 flex items-center"
      >
        {showPassword ? <EyeOff /> : <Eye />}
      </span>
    </div>
  );
});

export default PasswordInput;
`;

  const PasswordInputShadCnUsage = `import PasswordInput from "@/components/ui/password-input";

function PasswordInputDemo() {
  return (
    <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput placeholder="Password" id="password" />
    </div>
  );
}

export default PasswordInputDemo;`;

  const PasswordInputTailwindUsage = `import PasswordInput from "@/components/ui/password-input";

function PasswordInputDemo() {
  return (
   <div className="grid gap-2">
        <label
            className="text-sm font-medium leading-none"
            htmlFor="password"
        >
            Password
        </label>
        <PasswordInputTailwind placeholder="Password" id="password" />
    </div>
  );
}

export default PasswordInputDemo;`;

  const tableData = [
    {
      name: "placeholder",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "The placeholder text to display when the input is empty.",
    },
    {
      name: "className",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "Additional class names to apply to the input element.",
    },
    {
      name: "id",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "The ID of the input element.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the input should be disabled.",
    },
  ];

  return (
    <div className="grid gap-4">
      <h1 className="text-base md:text-lg font-semibold">Password Input</h1>
      <p className="text-sm md:text-base text-muted-foreground">
        The Password Input component provides a secure and user-friendly field
        for password entry. It includes features such as visibility toggle,
        allowing users to show or hide their input for easier entry, and
        customizable styles through Tailwind CSS or ShadCN, depending on your
        preference.
      </p>
      <Tabs defaultValue="shadcn" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="shadcn" className="w-full">
            ShadCN
          </TabsTrigger>
          <TabsTrigger value="tailwind" className="w-full">
            Tailwind
          </TabsTrigger>
        </TabsList>
        {/* ShadCn */}
        <TabsContent className="grid gap-4" value="shadcn">
          <h1 className="text-base md:text-lg font-semibold">Usage</h1>
          <div className="flex space-x-2">
            <span
              className={` hover:underline cursor-pointer ${
                show === "preview"
                  ? "text-foreground underline"
                  : "text-muted-foreground"
              }`}
              onClick={() => setShow("preview")}
            >
              Preview
            </span>
            <span
              className={` hover:underline cursor-pointer ${
                show === "code"
                  ? "text-foreground underline"
                  : "text-muted-foreground"
              }`}
              onClick={() => setShow("code")}
            >
              Code
            </span>
          </div>
          {show === "preview" && (
            <div className="flex items-center w-full p-2 md:p-4 min-h-96 border rounded-lg">
              <div className="w-full md:w-[70%] lg:w-[50%] mx-auto grid gap-2">
                <Label htmlFor="password">Password</Label>
                <PasswordInputShadCn placeholder="Password" id="password" />
              </div>
            </div>
          )}
          {show === "code" && (
            <CodeBlockComponent
              language="jsx"
              code={PasswordInputShadCnUsage}
            />
          )}
          <h1 className="text-base md:text-lg font-semibold">Code</h1>
          <CodeBlockComponent language="jsx" code={shadCnCode} />
        </TabsContent>
        {/* TailWind CSS */}
        <TabsContent className="grid gap-4" value="tailwind">
          <h1 className="text-base md:text-lg font-semibold">Usage</h1>
          <div className="flex space-x-2">
            <span
              className={` hover:underline cursor-pointer ${
                show === "preview"
                  ? "text-foreground underline"
                  : "text-muted-foreground"
              }`}
              onClick={() => setShow("preview")}
            >
              Preview
            </span>
            <span
              className={` hover:underline cursor-pointer ${
                show === "code"
                  ? "text-foreground underline"
                  : "text-muted-foreground"
              }`}
              onClick={() => setShow("code")}
            >
              Code
            </span>
          </div>
          {show === "preview" && (
            <div className="flex items-center w-full p-2 md:p-4 min-h-96 border rounded-lg">
              <div className="w-full md:w-[70%] lg:w-[50%] mx-auto grid gap-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="password"
                >
                  Password
                </label>
                <PasswordInputTailwind placeholder="Password" id="password" />
              </div>
            </div>
          )}
          {show === "code" && (
            <CodeBlockComponent
              language="jsx"
              code={PasswordInputTailwindUsage}
            />
          )}
          <h1 className="text-base md:text-lg font-semibold">Code</h1>
          <CodeBlockComponent language="jsx" code={tailwindCode} />
        </TabsContent>
      </Tabs>
      <h1 className="text-base md:text-lg font-semibold">Props</h1>
      <Table>
        <TableCaption>A list of props.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-center">Default</TableHead>
            <TableHead className="text-center hidden md:table-cell">
              Description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell className="flex justify-center">
                <Badge variant="secondary" className="font-mono">
                  {item.type}
                </Badge>
              </TableCell>
              <TableCell className="text-center">{item.default}</TableCell>
              <TableCell className="hidden md:table-cell">
                {item.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PasswordInputComponent;
