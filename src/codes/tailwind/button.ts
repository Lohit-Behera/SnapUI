export const rightIconButtonTailwind = `import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export default const DemoButton = () => {
return (
   <button
        className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
        onClick={() => toast.info("Button Clicked")}
    >
        Button
        <div className="w-0 translate-x-[0%] opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:opacity-100">
            <ArrowRight className="h-4 w-4" />
        </div>
    </button>
)}`;

export const leftIconButtonTailwind = `import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

export default const DemoButton = () => {
return (
   <button
        className="relative group inline-flex items-center justify-center gap-0 hover:gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
        onClick={() => toast.info("Button Clicked")}
    >
        <div className="w-0 translate-y-[0%] opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-y-100 group-hover:opacity-100">
            <ArrowLeft className="h-4 w-4" />
        </div>
        Button
    </button>
)}`;

export const capsuleButtonTailwind = `import { toast } from "sonner";

export default const DemoButton = () => {
return (
    <button
        className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-full duration-200"
        onClick={() => toast.info("Button Clicked")}
    >
        Button
    </button>
)}`;

export const loaderButtonTailwind = `import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default const DemoButton = () => {
return (
    <button
        className="inline-flex items-center justify-center gap-0.5 px-4 py-2 text-sm text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:bg-zinc-400 dark:disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-md duration-200"
        disabled
    >
        <Loader2 className="w-4 h-4 mr-1 my-auto animate-spin" />
        Loading...
    </button>
)}`;
