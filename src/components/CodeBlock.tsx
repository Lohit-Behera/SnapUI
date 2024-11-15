"use client";

import { CopyBlock, anOldHope } from "react-code-blocks";

const CodeBlockComponent = ({
  language,
  code,
}: {
  language: string;
  code: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-muted/50 p-4 w-full">
      <CopyBlock
        text={code}
        language={language}
        theme={anOldHope}
        wrapLongLines
        showLineNumbers={false}
        codeBlock
        customStyle={{
          maxHeight: "600px",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      />
    </div>
  );
};

export default CodeBlockComponent;
