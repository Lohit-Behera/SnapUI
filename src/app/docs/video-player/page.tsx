"use client";

import VideoPlayerShadCn from "@/components/ui/shadcn/video-player";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function page() {
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
        <TabsContent value="shadcn">
          <VideoPlayerShadCn
            src="/Madara_edit_2.mp4"
            thumbnailSrc="/madara.jpg"
          />
        </TabsContent>
        <TabsContent value="tailwind"></TabsContent>
      </Tabs>
    </div>
  );
}

export default page;
