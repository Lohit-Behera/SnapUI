"use client";

import { CopyBlock, anOldHope } from "react-code-blocks";
import { cn } from "@/lib/utils";

const CodeBlockComponent = ({
  language,
  code,
  className,
}: {
  language: string;
  code: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-muted/50 p-4 w-full",
        className
      )}
    >
      <CopyBlock
        text={code}
        language={language}
        theme={anOldHope}
        wrapLongLines
        showLineNumbers={false}
        codeBlock
        customStyle={{
          height: "100%",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      />
    </div>
  );
};

export default CodeBlockComponent;
