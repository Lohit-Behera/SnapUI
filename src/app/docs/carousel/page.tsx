"use client";

import PreviewCode from "@/components/PreviewCode";
import CarouselMotion from "@/components/ui/shadcn/carousel-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarouselMotionTailwind from "@/components/ui/tailwind/carousel-motion";
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
import InstallModuleCode from "@/components/InstallModuleCode";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import CodeBlockComponent from "@/components/CodeBlock";
import { carouselShadCn } from "@/codes/shadcn/carousel";
import { carouselTailwind } from "@/codes/tailwind/carousel";
import Link from "next/link";

const carouselData = [
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

const tableDataForCarousel = [
  {
    name: "data",
    type: "Array",
    default: <p>[]</p>,
    description: "The data to be displayed in the carousel.",
  },
  {
    name: "containerClassName",
    type: "string",
    default: <p>&quot; &quot;</p>,
    description:
      "The class name to be applied to the outer container of the carousel.",
  },
  {
    name: "textContainerClassName",
    type: "string",
    default: <p>&quot; &quot;</p>,
    description:
      "The class name to be applied to the container containing the text elements in the carousel.",
  },
  {
    name: "titleClassName",
    type: "string",
    default: <p>&quot; &quot;</p>,
    description:
      "The class name to be applied to the title elements in the carousel.",
  },
  {
    name: "descriptionClassName",
    type: "string",
    default: <p>&quot; &quot;</p>,
    description:
      "The class name to be applied to the description elements in the carousel.",
  },
  {
    name: "smallImageContainerClassName",
    type: "string",
    default: <p>&quot; &quot;</p>,
    description:
      "The class name to be applied to the container containing the small images in the carousel.",
  },
  {
    name: "smallImageClassName",
    type: "string",
    default: <p>&quot; &quot;</p>,
    description:
      "The class name to be applied to the small images in the carousel.",
  },
  {
    name: "largeImageClassName",
    type: "string",
    default: <p>&quot; &quot;</p>,
    description:
      "The class name to be applied to the large images in the carousel.",
  },
];
const tableData = [
  {
    name: "className",
    type: "string",
    description:
      "The class name to be applied to the outer container of the carousel.",
  },
  {
    name: "title",
    type: "string",
    description: "The title to be displayed in the carousel.",
  },
  {
    name: "description",
    type: "string",
    description: "The description to be displayed in the carousel.",
  },
  {
    name: "smallImage",
    type: "string",
    description:
      "The source URL of the small image to be displayed in the carousel.",
  },
  {
    name: "smallImageAlt",
    type: "string",
    description: "The alternative text for the small image in the carousel.",
  },
  {
    name: "largeImage",
    type: "string",
    description:
      "The source URL of the large image to be displayed in the carousel.",
  },
  {
    name: "largeImageAlt",
    type: "string",
    description: "The alternative text for the large image in the carousel.",
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
          <PreviewCode
            code={`<CarouselMotion data={carouselData} />`}
            preview={<CarouselMotion data={carouselData} />}
          />
          <h1 className="text-base md:text-lg font-semibold">Installation</h1>
          <InstallModuleCode modules="motion" />
          <p className="text-sm md:text-base">
            install shadcn{" "}
            <Link
              href="https://ui.shadcn.com/docs/components/carousel"
              target="_blank"
              className="underline underline-offset-2"
            >
              Carousel
            </Link>
          </p>
          <CodeBlockWrapper>
            <CodeBlockComponent code={carouselShadCn} />
          </CodeBlockWrapper>
        </TabsContent>
        {/* Tailwind */}
        <TabsContent value="tailwind" className="grid gap-4">
          <h3 className="text-sm md:text-base font-bold">Usage</h3>
          <PreviewCode
            code={`<CarouselMotionTailwind data={carouselData} />`}
            preview={<CarouselMotionTailwind data={carouselData} />}
          />
          <h1 className="text-base md:text-lg font-semibold">Installation</h1>
          <InstallModuleCode modules="motion" />
          <CodeBlockWrapper>
            <CodeBlockComponent code={carouselTailwind} />
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
          {tableDataForCarousel.map((item) => (
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
      <h1 className="text-base md:text-lg font-semibold">Data</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead className="text-center">Type</TableHead>
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
