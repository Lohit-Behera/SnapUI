"use client";

import CodeBlockComponent from "@/components/CodeBlock";
import VideoPlayerShadCn from "@/components/ui/shadcn/video-player";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { videoPlayerCode } from "@/codes/video-player";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

function page() {
  const VideoPlayerCode = `
  import { VideoPlayer } from "@/components/ui/video-player";

  export function VideoPlayerDemo() {
    return (
      <VideoPlayer
        src="/video.mp4"
        thumbnailSrc="/thumbnail.jpg"
      />
    )
  }`;
  const tableData = [
    {
      name: "src",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "The source URL of the video file.",
    },
    {
      name: "thumbnailSrc",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "The source URL of the thumbnail image.",
    },
    {
      name: "ambientGlow",
      type: "boolean",
      default: "false",
      description: "Whether to apply an ambient glow effect to the video.",
    },
    {
      name: "ambientGlowBlur",
      type: "number",
      default: "50",
      description: "The blur radius of the ambient glow effect.",
    },
    {
      name: "containerClassName",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "Custom CSS class for the container element.",
    },
    {
      name: "videoClassName",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "Custom CSS class for the video element.",
    },
    {
      name: "circle",
      type: "boolean",
      default: "false",
      description: "Whether to display a circular progress bar.",
    },
    {
      name: "circleClassName",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "Custom CSS class for the circular progress bar.",
    },
    {
      name: "progressBarClassName",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "Custom CSS class for the progress bar.",
    },
    {
      name: "progressBarContainerClassName",
      type: "string",
      default: <p>&quot; &quot;</p>,
      description: "Custom CSS class for the progress bar container.",
    },
  ];
  return (
    <div className="grid gap-4">
      <h1 className="text-base md:text-lg font-semibold">Video Player</h1>
      <p className="text-sm md:text-base text-muted-foreground">
        A versatile and interactive Video Player component, designed with
        advanced features like ambient glow effects, custom progress bars, and
        seamless playback control. It supports features such as autoplay,
        fullscreen toggling, keyboard shortcuts, thumbnail previews, buffering
        indicators, and animations for actions like play, pause, mute, and
        seeking. Customizable styling options allow you to tailor the player’s
        appearance to fit your design needs.
      </p>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="preview">
            Preview
          </TabsTrigger>
          <TabsTrigger className="w-full" value="code">
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="my-8">
          <VideoPlayerShadCn
            src="/Madara_edit_2.mp4"
            thumbnailSrc="/madara.jpg"
          />
        </TabsContent>
        <TabsContent value="code">
          <CodeBlockComponent language="tsx" code={VideoPlayerCode} />
        </TabsContent>
      </Tabs>
      <h1 className="text-base md:text-lg font-semibold">Code</h1>
      <CodeBlockWrapper>
        <CodeBlockComponent language="tsx" code={videoPlayerCode} />
      </CodeBlockWrapper>
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

export default page;
