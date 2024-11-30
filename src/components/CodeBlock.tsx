import SyntaxHighlighter from "react-syntax-highlighter";
import anOldHope from "react-syntax-highlighter/dist/cjs/styles/hljs/an-old-hope";
import vs from "react-syntax-highlighter/dist/cjs/styles/hljs/vs";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Check, Clipboard } from "lucide-react";
import { Button } from "./ui/button";

const CodeBlockComponent = ({
  language,
  code,
  className,
  showLineNumbers = false,
  wrapLongLines = true,
}: {
  language: string;
  code: string;
  className?: string;
  showLineNumbers?: boolean;
  wrapLongLines?: boolean;
}) => {
  const theme = useTheme();
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
        style={theme.theme === "dark" ? anOldHope : vs}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        wrapLongLines={wrapLongLines}
        customStyle={{
          height: "100%",
          overflowX: "hidden",
          borderRadius: "0.5rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlockComponent;
