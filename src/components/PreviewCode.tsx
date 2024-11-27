import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PreviewCodeProps {
  preview: React.ReactNode;
  code: React.ReactNode;
}
function PreviewCode({ preview, code }: PreviewCodeProps) {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">{preview}</TabsContent>
      <TabsContent value="code">{code}</TabsContent>
    </Tabs>
  );
}

export default PreviewCode;
