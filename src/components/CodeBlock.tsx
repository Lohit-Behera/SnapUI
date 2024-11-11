"use client";

import { CopyBlock, tomorrowNightBright, tomorrow } from "react-code-blocks";
import { useTheme } from "next-themes";

const CodeBlockComponent = ({
  language,
  code,
}: {
  language: string;
  code: string;
}) => {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden rounded-lg bg-muted/50 p-4 w-full">
      <CopyBlock
        text={code}
        language={language}
        theme={theme === "dark" ? tomorrowNightBright : tomorrow}
        wrapLongLines
        showLineNumbers={false}
        codeBlock
      />
    </div>
  );
};

export default CodeBlockComponent;
