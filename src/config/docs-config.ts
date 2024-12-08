export type DocsConfig = {
  title: string;
  path?: string;
  pages?: DocsConfig[];
};

export const Pages: DocsConfig[] = [
  {
    title: "Docs",
    path: "/docs/introduction",
  },
  {
    title: "Components",
    path: "/components",
  },
];

export const docsConfig: DocsConfig[] = [
  {
    title: "Getting Started",
    pages: [
      {
        title: "Introduction",
        path: "/docs/introduction",
      },
      {
        title: "Installation",
        path: "/docs/installation",
      },
    ],
  },
  {
    title: "Components",
    pages: [
      {
        title: "Buttons",
        path: "/docs/buttons",
      },
      {
        title: "Carousel",
        path: "/docs/carousel",
      },
      {
        title: "Drag and drop",
        path: "/docs/drag-n-drop",
      },
      {
        title: "Image",
        path: "/docs/image",
      },
      {
        title: "Password input",
        path: "/docs/password-input",
      },
      {
        title: "Video player",
        path: "/docs/video-player",
      },
    ],
  },
];
