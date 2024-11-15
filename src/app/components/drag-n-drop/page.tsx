"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DragNDropShadCn from "@/components/ui/shadcn/drag-n-drop";
import DragNDropTailwind from "@/components/ui/tailwind/drag-n-drop";
import { toast } from "sonner";
import CodeBlockComponent from "@/components/CodeBlock";
import { dragNDropShadCnCode } from "@/codes/shadcn/drag-n-drop";
import { dragNDropTailwindCode } from "@/codes/tailwind/drag-n-drop";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

function DragNDropComponent() {
  const handleOnDrop = (file: File) => {
    toast.success(`File uploaded successfully! ${file.name}`);
  };

  const dragNDropCode = (type: string) => `
  import { DragNDrop } from "@/components/ui/drag-n-drop";
  import { toast } from "sonner";

  export function DragNDrop${
    type === "image" ? "Image" : type === "video" ? "Video" : "Document"
  }Demo() {
    const handleFile = (file: File) => {
      toast.success(\`File uploaded successfully! \${file.name}\`);
    };

    return (
        <DragNDrop
            type="${type}"
            handleFile={handleOnDrop}
            resetButton
        />
    )
  }
  `;

  return (
    <div className="grid gap-4">
      <h1 className="text-base md:text-lg font-semibold">Drag and Drop</h1>
      <p className="text-sm md:text-base text-muted-foreground">
        The Drag-and-Drop File Upload component enables users to upload files
        effortlessly by simply dragging them into the designated drop area or
        selecting them manually.
      </p>
      <Tabs defaultValue="shadcn" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="shadcn">
            ShadCN
          </TabsTrigger>
          <TabsTrigger className="w-full" value="tailwind">
            Tailwind
          </TabsTrigger>
        </TabsList>
        {/* ShadCn */}
        <TabsContent value="shadcn" className="grid gap-4">
          <h1 className="text-base md:text-lg font-semibold">Usage</h1>
          {/* Image */}
          <h1 className="text-base md:text-lg">Use with Image</h1>
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <DragNDropShadCn
                type="image"
                handleFile={handleOnDrop}
                resetButton
              />
            </TabsContent>
            <TabsContent value="code">
              <CodeBlockComponent
                language="jsx"
                code={dragNDropCode("image")}
              />
            </TabsContent>
          </Tabs>
          {/* Video */}
          <h1 className="text-base md:text-lg">Use with Video</h1>
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <DragNDropShadCn
                type="video"
                handleFile={handleOnDrop}
                resetButton
              />
            </TabsContent>
            <TabsContent value="code">
              <CodeBlockComponent
                language="jsx"
                code={dragNDropCode("video")}
              />
            </TabsContent>
          </Tabs>
          {/* Document */}
          <h1 className="text-base md:text-lg">Use with Document</h1>
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <DragNDropShadCn
                type="document"
                handleFile={handleOnDrop}
                resetButton
              />
            </TabsContent>
            <TabsContent value="code">
              <CodeBlockComponent
                language="jsx"
                code={dragNDropCode("document")}
              />
            </TabsContent>
          </Tabs>
          <h1 className="text-base md:text-lg font-semibold">Code</h1>
          <CodeBlockWrapper>
            <CodeBlockComponent language="jsx" code={dragNDropShadCnCode} />
          </CodeBlockWrapper>
        </TabsContent>
        {/* Tailwind */}
        <TabsContent value="tailwind" className="grid gap-4">
          <h1 className="text-base md:text-lg font-semibold">Usage</h1>
          {/* Image */}
          <h1 className="text-base md:text-lg">Use with Image</h1>
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <DragNDropTailwind
                type="image"
                handleFile={handleOnDrop}
                resetButton
              />
            </TabsContent>
            <TabsContent value="code">
              <CodeBlockComponent
                language="jsx"
                code={dragNDropCode("image")}
              />
            </TabsContent>
          </Tabs>
          {/* Video */}
          <h1 className="text-base md:text-lg">Use with Video</h1>
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <DragNDropTailwind
                type="video"
                handleFile={handleOnDrop}
                resetButton
              />
            </TabsContent>
            <TabsContent value="code">
              <CodeBlockComponent
                language="jsx"
                code={dragNDropCode("video")}
              />
            </TabsContent>
          </Tabs>
          {/* Document */}
          <h1 className="text-base md:text-lg">Use with Document</h1>
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <DragNDropTailwind
                type="document"
                handleFile={handleOnDrop}
                resetButton
              />
            </TabsContent>
            <TabsContent value="code">
              <CodeBlockComponent
                language="jsx"
                code={dragNDropCode("document")}
              />
            </TabsContent>
          </Tabs>
          <h1 className="text-base md:text-lg font-semibold">Code</h1>
          <CodeBlockWrapper>
            <CodeBlockComponent language="jsx" code={dragNDropTailwindCode} />
          </CodeBlockWrapper>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default DragNDropComponent;
