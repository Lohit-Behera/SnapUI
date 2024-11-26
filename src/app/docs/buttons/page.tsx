"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

function ButtonComponent() {
  return (
    <div className="grid gap-4 w-full">
      <h1 className="text-base md:text-lg font-semibold">Buttons</h1>
      <Tabs defaultValue="shadcn" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="shadcn">
            ShadCN
          </TabsTrigger>
          <TabsTrigger className="w-full" value="tailwind">
            Tailwind
          </TabsTrigger>
          <TabsTrigger className="w-full" value="motion">
            Motion
          </TabsTrigger>
        </TabsList>
        <TabsContent value="shadcn" className="grid gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">
                Right Arrow
              </h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
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
              </div>
            </div>
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">Left Arrow</h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
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
              </div>
            </div>
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">Capsule</h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
                <Button
                  className="relative group gap-0 hover:gap-2 rounded-full"
                  size="sm"
                  onClick={() => toast.info("Button Clicked")}
                >
                  Button
                </Button>
              </div>
            </div>
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">Loading</h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
                <Button
                  className="relative group gap-0 hover:gap-2"
                  size="sm"
                  disabled
                >
                  <Loader2 className="w-4 h-4 mr-1 my-auto animate-spin" />
                  Loading...
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tailwind" className="grid gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">
                Right Arrow
              </h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
                <button
                  className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
                  onClick={() => toast.info("Button Clicked")}
                >
                  Button
                  <div className="w-0 translate-x-[0%] opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </button>
              </div>
            </div>
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">Left Arrow</h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
                <button
                  className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
                  onClick={() => toast.info("Button Clicked")}
                >
                  <div className="w-0 translate-y-[0%] opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-y-100 group-hover:opacity-100">
                    <ArrowLeft />
                  </div>
                  Button
                </button>
              </div>
            </div>
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">Capsule</h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
                <button
                  className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-full duration-200"
                  onClick={() => toast.info("Button Clicked")}
                >
                  Button
                </button>
              </div>
            </div>
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">Loading</h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
                <button
                  className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
                  disabled
                >
                  <Loader2 className="w-4 h-4 mr-1 my-auto animate-spin" />
                  Loading...
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="motion" className="grid gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">Tap</h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  transition={{
                    duration: 0,
                  }}
                  className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
                  onClick={() => toast.info("Button Clicked")}
                >
                  Button
                </motion.button>
              </div>
            </div>
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">Hover</h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  transition={{
                    duration: 0,
                  }}
                  className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
                  onClick={() => toast.info("Button Clicked")}
                >
                  Button
                </motion.button>
              </div>
            </div>
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">
                Tap and Hover
              </h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
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
              </div>
            </div>
            <div className="grid gap-2">
              <h1 className="text-base md:text-lg font-semibold">
                Capsule Tap and Hover
              </h1>
              <div className="flex justify-center items-center min-h-72 bg-muted rounded-md">
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
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ButtonComponent;
