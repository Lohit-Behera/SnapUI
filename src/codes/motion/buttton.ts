export const tapButtonMotion = `import { motion } from "motion/react";
import { toast } from "sonner";

export const DemoButton = () => {
return (
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
}};`;

export const hoverButtonMotion = `import { motion } from "motion/react";
import { toast } from "sonner";

export const DemoButton = () => {
return (
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
}};`;

export const tapHoverButtonMotion = `import { motion } from "motion/react";
import { toast } from "sonner";

export const DemoButton = () => {
return (
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
}};`;

export const tapHoverCapsuleButtonMotion = `import { motion } from "motion/react";
import { toast } from "sonner";

export const DemoButton = () => {
return (
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
}};`;
