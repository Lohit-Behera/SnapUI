export const rightIconButtonShadCn = `import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export default const DemoButton = () => {
return (
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
)}`;

export const leftIconButtonShadCn = `import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

export default const DemoButton = () => {
return (
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
)}`;

export const capsuleButtonShadCn = `import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default const DemoButton = () => {
return (
    <Button
        className="rounded-full"
        size="sm"
        onClick={() => toast.info("Button Clicked")}
    >
        Button
    </Button>
)}`;

export const loaderButtonShadCn = `import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default const DemoButton = () => {
return (
   <Button
        className="relative group gap-0 hover:gap-2"
        size="sm"
        disabled
    >
            <Loader2 className="w-4 h-4 mr-1 my-auto animate-spin" />
        Loading...
    </Button>
)}`;
