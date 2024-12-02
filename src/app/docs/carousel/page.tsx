"use client";

import CarouselMotion from "@/components/ui/shadcn/carousel-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarouselMotionTailwind from "@/components/ui/tailwind/carousel-motion";
const shadCnCarouselData = [
  {
    title: "Nature",
    description: "Explore the beauty of nature",
    smallImage: "https://picsum.photos/100/100?random=1",
    smallImageAlt: "Nature Thumbnail",
    largeImage: "https://picsum.photos/800/400?random=1",
    largeImageAlt: "Nature Full Image",
  },
  {
    title: "Architecture",
    description: "Discover stunning architecture",
    smallImage: "https://picsum.photos/100/100?random=2",
    smallImageAlt: "Architecture Thumbnail",
    largeImage: "https://picsum.photos/800/400?random=2",
    largeImageAlt: "Architecture Full Image",
  },
  {
    title: "Adventure",
    description: "Embrace the thrill of adventure",
    smallImage: "https://picsum.photos/100/100?random=3",
    smallImageAlt: "Adventure Thumbnail",
    largeImage: "https://picsum.photos/800/400?random=3",
    largeImageAlt: "Adventure Full Image",
  },
  {
    title: "Travel",
    description: "Travel to breathtaking destinations",
    smallImage: "https://picsum.photos/100/100?random=4",
    smallImageAlt: "Travel Thumbnail",
    largeImage: "https://picsum.photos/800/400?random=4",
    largeImageAlt: "Travel Full Image",
  },
  {
    title: "Art",
    description: "Marvel at creative artwork",
    smallImage: "https://picsum.photos/100/100?random=5",
    smallImageAlt: "Art Thumbnail",
    largeImage: "https://picsum.photos/800/400?random=5",
    largeImageAlt: "Art Full Image",
  },
];

function page() {
  return (
    <div className="grid gap-4">
      <h1 className="text-base md:text-lg font-semibold">Carousel</h1>
      <p className="text-sm md:text-base text-muted-foreground">carousel</p>
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
          <h3 className="text-sm md:text-base font-bold">Usage</h3>
          <CarouselMotion data={shadCnCarouselData} />
        </TabsContent>
        {/* Tailwind */}
        <TabsContent value="tailwind" className="grid gap-4">
          <h3>Usage</h3>
          <CarouselMotionTailwind data={shadCnCarouselData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default page;
