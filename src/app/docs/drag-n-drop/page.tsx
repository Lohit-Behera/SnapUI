"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DragNDropShadCn from "@/components/ui/shadcn/drag-n-drop";
import DragNDropTailwind from "@/components/ui/tailwind/drag-n-drop";
import { toast } from "sonner";
import CodeBlockComponent from "@/components/CodeBlock";
import { dragNDropShadCnCode } from "@/codes/shadcn/drag-n-drop";
import { dragNDropTailwindCode } from "@/codes/tailwind/drag-n-drop";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PreviewCode from "@/components/PreviewCode";

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
  const tableData = [
    {
      name: "className",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "The className of the component.",
    },
    {
      name: "handleFile",
      type: "function",
      default: <p>&quot; &quot;</p>,
      description: "The function to handle the file upload.",
    },
    {
      name: "type",
      type: "string",
      default: <p>&quot;image&quot;</p>,
      description:
        "The type of file to upload. Can be 'image', 'video', or 'document'.",
    },
    {
      name: "resetButton",
      type: "boolean",
      default: "false",
      description: "Whether to show a reset button.",
    },
    {
      name: "buttonClassName",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "The className of the button.",
    },
  ];
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
          <PreviewCode
            code={dragNDropCode("image")}
            preview={
              <DragNDropShadCn
                type="image"
                handleFile={handleOnDrop}
                resetButton
              />
            }
          />
          {/* Video */}
          <h1 className="text-base md:text-lg">Use with Video</h1>
          <PreviewCode
            code={dragNDropCode("video")}
            preview={
              <DragNDropShadCn
                type="video"
                handleFile={handleOnDrop}
                resetButton
              />
            }
          />
          {/* Document */}
          <h1 className="text-base md:text-lg">Use with Document</h1>
          <PreviewCode
            code={dragNDropCode("document")}
            preview={
              <DragNDropShadCn
                type="document"
                handleFile={handleOnDrop}
                resetButton
              />
            }
          />
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
          <PreviewCode
            code={dragNDropCode("image")}
            preview={
              <DragNDropTailwind
                type="image"
                handleFile={handleOnDrop}
                resetButton
              />
            }
          />
          {/* Video */}
          <h1 className="text-base md:text-lg">Use with Video</h1>
          <PreviewCode
            code={dragNDropCode("video")}
            preview={
              <DragNDropTailwind
                type="video"
                handleFile={handleOnDrop}
                resetButton
              />
            }
          />
          {/* Document */}
          <h1 className="text-base md:text-lg">Use with Document</h1>
          <PreviewCode
            code={dragNDropCode("document")}
            preview={
              <DragNDropTailwind
                type="document"
                handleFile={handleOnDrop}
                resetButton
              />
            }
          />
          <h1 className="text-base md:text-lg font-semibold">Code</h1>
          <CodeBlockWrapper>
            <CodeBlockComponent language="jsx" code={dragNDropTailwindCode} />
          </CodeBlockWrapper>
        </TabsContent>
      </Tabs>
      <h1 className="text-base md:text-lg font-semibold">Props</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-center">Default</TableHead>
            <TableHead className="text-center hidden md:table-cell">
              Description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell className="flex justify-center">
                <Badge variant="secondary" className="font-mono">
                  {item.type}
                </Badge>
              </TableCell>
              <TableCell className="text-center">{item.default}</TableCell>
              <TableCell className="hidden md:table-cell">
                {item.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DragNDropComponent;
