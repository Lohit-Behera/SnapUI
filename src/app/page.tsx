"use client";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";

const textLines = ["Build Faster with Stunning", "UI Components"];
const subText = [
  "A modern and customizable UI library crafted with ShadCN, Tailwind CSS, and Framer Motion.",
  " Accelerate your development with ease and style with Snap Ui.",
];

const AnimatedText = ({
  lines,
  className,
  delay = 0.2,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) => {
  return (
    <div
      className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-bold text-center",
        className
      )}
    >
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * delay }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-[98%] md:w-[70%] lg:w-[60%] mx-auto grid gap-8">
      <div className="grid gap-0 md:gap-4">
        {textLines.map((line, index) => (
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          >
            {line}
          </motion.h1>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="text-muted-foreground text-base md:text-lg text-center"
      >
        A modern and customizable UI library crafted with ShadCN, Tailwind CSS,
        and Framer Motion., Accelerate your development with ease and style with
        Snap Ui.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="flex justify-center space-x-8"
      >
        <Button
          className="relative group px-4 gap-0 hover:gap-2 font-semibold"
          size="sm"
          onClick={() => router.push("/docs/introduction")}
        >
          Get Started
          <div className="w-0 translate-x-[0%] opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:opacity-100">
            <SquareArrowOutUpRight />
          </div>
        </Button>
        <Button variant="secondary" size="sm">
          GitHub
        </Button>
      </motion.div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className="[mask-image:radial-gradient(900px_circle_at_top,white,transparent)]"
      />
    </div>
  );
}
