import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlockComponent from "./CodeBlock";

interface PreviewCodeProps {
  preview: React.ReactNode;
  code: string;
  language?: string;
  codeClassName?: string;
}
function PreviewCode({
  preview,
  code,
  language = "tsx",
  codeClassName,
}: PreviewCodeProps) {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">{preview}</TabsContent>
      <TabsContent value="code">
        <CodeBlockComponent
          language={language}
          code={code}
          className={codeClassName}
        />
      </TabsContent>
    </Tabs>
  );
}

export default PreviewCode;
