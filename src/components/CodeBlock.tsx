import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Check, Clipboard } from "lucide-react";
import { Button } from "./ui/button";

const CodeBlockComponent = ({
  language = "tsx",
  code,
  className,
}: {
  language?: string;
  code: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-muted/50 p-4 w-full",
        className
      )}
    >
      <div className="p-2 absolute top-8 right-8">
        <Button
          size="icon"
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          variant="ghost"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Clipboard className="h-4 w-4" />
          )}
        </Button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        wrapLines={true}
        wrapLongLines={true}
        customStyle={{
          height: "100%",
          overflowX: "hidden",
          borderRadius: "0.5rem",
        }}
        lineProps={{
          style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
        }}
        className="text-sm md:text-base code-block-scrollbar"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlockComponent;
