"use client";

import PreviewCode from "@/components/PreviewCode";
import ImageLoader from "@/components/ui/image-loader";
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
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import CodeBlockComponent from "@/components/CodeBlock";
import {
  customErrorCode,
  customLoaderCode,
  defaultCode,
  defaultErrorCode,
  imageLoaderCode,
} from "@/codes/image";

function page() {
  const imageVariants = [
    {
      title: "Default",
      preview: (
        <ImageLoader src="https://picsum.photos/800/400?random=2" alt="" />
      ),
      code: defaultCode,
    },
    {
      title: "Custom loader",
      preview: (
        <ImageLoader
          customLoader={
            <div className="absolute inset-0 w-full h-full flex items-center justify-center rounded-md bg-muted">
              <svg
                className="animate-spin -ml-1 mr-3 h-16 w-16 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          }
          src="https://picsum.photos/800/400?random=2"
          alt=""
        />
      ),
      code: customLoaderCode,
    },
    {
      title: "Default Error",
      preview: <ImageLoader src="/image.jpg" alt="" />,
      code: defaultErrorCode,
    },

    {
      title: "Custom error",
      preview: (
        <ImageLoader
          customError={
            <div className="w-full h-0 pb-[56.25%] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 910 648"
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <defs>
                  <style>
                    {`
                    .cls-1 {
                      fill: none;
                      stroke: gray;
                      stroke-miterlimit: 10;
                      stroke-width: 25px;
                    }
      
                    .cls-2 {
                      fill: gray;
                    }
                  `}
                  </style>
                </defs>
                <rect
                  className="cls-1"
                  x="12.5"
                  y="12.5"
                  width="885"
                  height="623"
                  rx="48.73"
                  ry="48.73"
                />
                <path
                  className="cls-2"
                  d="M16.5,582.5l188-190s40.45-40,76.72,0,210.28,209,210.28,209c0,0,16.5,5.5,14.5-16.5l-132-133,175-249s38.94-44,79.97,0l264.03,375-2.84,34.5-27.16,15.5H41.48l-15.48-16-9.5-16.31v-13.19Z"
                />
                <circle className="cls-2" cx="242.5" cy="199.5" r="62.5" />
              </svg>
            </div>
          }
          src="/image.jpg"
          alt=""
        />
      ),
      code: customErrorCode,
    },
  ];

  const tableData = [
    {
      name: "containerClassName",
      type: "string",
      description:
        "The class name to be applied to the outer container of the image loader.",
    },
    {
      name: "defaultLoaderClassName",
      type: "string",
      description:
        "The class name to be applied to the default loader of the image loader.",
    },
    {
      name: "imageClassName",
      type: "string",
      description:
        "The class name to be applied to the image of the image loader.",
    },
    {
      name: "defaultErrorClassName",
      type: "string",
      description:
        "The class name to be applied to the default error of the image loader.",
    },
    {
      name: "src",
      type: "string",
      description: "The source URL of the image to be loaded.",
    },
    {
      name: "alt",
      type: "string",
      description: "The alternative text for the image.",
    },
    {
      name: "onClick",
      type: "() => void",
      description:
        "The callback function to be called when the image is clicked.",
    },
    {
      name: "customLoader",
      type: "React.ReactNode",
      description:
        "The custom loader to be displayed while the image is loading.",
    },
    {
      name: "customError",
      type: "React.ReactNode",
      description:
        "The custom error to be displayed if the image fails to load.",
    },
  ];
  return (
    <div className="grid gap-4">
      <h1 className="text-base md:text-lg font-semibold">Image loader</h1>
      <p className="text-sm md:text-base text-muted-foreground">Image loader</p>
      {imageVariants.map(({ title, preview, code }, index) => (
        <div key={index} className="grid gap-4">
          <h3 className="text-base md:text-lg font-semibolds">{title}</h3>
          <PreviewCode codeClassName="h-[50vh]" preview={preview} code={code} />
        </div>
      ))}
      <h1 className="text-base md:text-lg font-semibold">Code</h1>
      <CodeBlockWrapper>
        <CodeBlockComponent code={imageLoaderCode} />
      </CodeBlockWrapper>
      <h1 className="text-base md:text-lg font-semibold">Props</h1>
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
