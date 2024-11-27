"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  capsuleButtonShadCn,
  leftIconButtonShadCn,
  loaderButtonShadCn,
  rightIconButtonShadCn,
} from "@/codes/shadcn/button";
import CodeBlockComponent from "@/components/CodeBlock";
import {
  capsuleButtonTailwind,
  leftIconButtonTailwind,
  loaderButtonTailwind,
  rightIconButtonTailwind,
} from "@/codes/tailwind/button";
import {
  hoverButtonMotion,
  tapButtonMotion,
  tapHoverButtonMotion,
  tapHoverCapsuleButtonMotion,
} from "@/codes/motion/buttton";
import PreviewCode from "@/components/PreviewCode";

const buttonVariants = [
  {
    title: "Right Icon",
    preview: (
      <Button
        className="relative group px-4 gap-0 hover:gap-2"
        size="sm"
        onClick={() => toast.info("Button Clicked")}
      >
        Button
        <div className="w-0 translate-x-[0%] opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:opacity-100">
          <ArrowRight />
        </div>
      </Button>
    ),
    code: rightIconButtonShadCn,
  },
  {
    title: "Left Icon",
    preview: (
      <Button
        className="relative group gap-0 hover:gap-2"
        size="sm"
        onClick={() => toast.info("Button Clicked")}
      >
        <div className="w-0 translate-y-[0%] opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-y-100 group-hover:opacity-100">
          <ArrowLeft />
        </div>
        Button
      </Button>
    ),
    code: leftIconButtonShadCn,
  },
  {
    title: "Capsule",
    preview: (
      <Button
        className="rounded-full"
        size="sm"
        onClick={() => toast.info("Button Clicked")}
      >
        Button
      </Button>
    ),
    code: capsuleButtonShadCn,
  },
  {
    title: "Loading",
    preview: (
      <Button className="relative group gap-0 hover:gap-2" size="sm" disabled>
        <Loader2 className="w-4 h-4 mr-1 my-auto animate-spin" />
        Loading...
      </Button>
    ),
    code: loaderButtonShadCn,
  },
];

const tailwindVariants = [
  {
    title: "Right Icon",
    preview: (
      <button
        className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
        onClick={() => toast.info("Button Clicked")}
      >
        Button
        <div className="w-0 translate-x-[0%] opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:opacity-100">
          <ArrowRight className="h-4 w-4" />
        </div>
      </button>
    ),
    code: rightIconButtonTailwind,
  },
  {
    title: "Left Icon",
    preview: (
      <button
        className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
        onClick={() => toast.info("Button Clicked")}
      >
        <div className="w-0 translate-y-[0%] opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-y-100 group-hover:opacity-100">
          <ArrowLeft className="h-4 w-4" />
        </div>
        Button
      </button>
    ),
    code: leftIconButtonTailwind,
  },
  {
    title: "Capsule",
    preview: (
      <button
        className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-full duration-200"
        onClick={() => toast.info("Button Clicked")}
      >
        Button
      </button>
    ),
    code: capsuleButtonTailwind,
  },
  {
    title: "Loading",
    preview: (
      <button
        className="inline-flex items-center justify-center gap-0.5 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
        disabled
      >
        <Loader2 className="w-4 h-4 mr-1 my-auto animate-spin" />
        Loading...
      </button>
    ),
    code: loaderButtonTailwind,
  },
];

const motionVariants = [
  {
    title: "Tap",
    preview: (
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0 }}
        className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
        onClick={() => toast.info("Button Clicked")}
      >
        Button
      </motion.button>
    ),
    code: tapButtonMotion,
  },
  {
    title: "Hover",
    preview: (
      <motion.button
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0 }}
        className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
        onClick={() => toast.info("Button Clicked")}
      >
        Button
      </motion.button>
    ),
    code: hoverButtonMotion,
  },
  {
    title: "Tap and Hover",
    preview: (
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.85 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
          duration: 0,
        }}
        className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
        onClick={() => toast.info("Button Clicked")}
      >
        Button
      </motion.button>
    ),
    code: tapHoverButtonMotion,
  },
  {
    title: "Capsule Tap and Hover",
    preview: (
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.85 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
          duration: 0,
        }}
        className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-full duration-200"
        onClick={() => toast.info("Button Clicked")}
      >
        Button
      </motion.button>
    ),
    code: tapHoverCapsuleButtonMotion,
  },
];

function ButtonComponent() {
  return (
    <div className="grid gap-4 w-full">
      <Tabs defaultValue="shadcn">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="shadcn">
            Shadcn
          </TabsTrigger>
          <TabsTrigger className="w-full" value="tailwind">
            Tailwind
          </TabsTrigger>
          <TabsTrigger className="w-full" value="motion">
            Motion
          </TabsTrigger>
        </TabsList>
        <TabsContent value="shadcn">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {buttonVariants.map(({ title, preview, code }, index) => (
              <div key={index} className="grid gap-4">
                <h3 className="text-base md:text-lg font-semibold">{title}</h3>
                <PreviewCode
                  preview={
                    <div className="h-72 w-full rounded-md bg-muted flex justify-center items-center">
                      {preview}
                    </div>
                  }
                  code={
                    <CodeBlockComponent
                      language="tsx"
                      code={code}
                      className="h-72"
                    />
                  }
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tailwind">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {tailwindVariants.map(({ title, preview, code }, index) => (
              <div key={index} className="grid gap-4 ">
                <h3 className="text-base md:text-lg font-semibold">{title}</h3>
                <PreviewCode
                  preview={
                    <div className="h-72 w-full rounded-md bg-muted flex justify-center items-center">
                      {preview}
                    </div>
                  }
                  code={
                    <CodeBlockComponent
                      language="tsx"
                      code={code}
                      className="h-72"
                    />
                  }
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="motion">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {motionVariants.map(({ title, preview, code }, index) => (
              <div key={index} className="grid gap-4 ">
                <h3 className="text-base md:text-lg font-semibold">{title}</h3>
                <PreviewCode
                  preview={
                    <div className="h-72 w-full rounded-md bg-muted flex justify-center items-center">
                      {preview}
                    </div>
                  }
                  code={
                    <CodeBlockComponent
                      language="tsx"
                      code={code}
                      className="h-72"
                    />
                  }
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ButtonComponent;
