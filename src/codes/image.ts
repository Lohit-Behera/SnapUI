export const imageLoaderCode = `import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

type ImageLoaderProps = {
  containerClassName?: string;
  defaultLoaderClassName?: string;
  imageClassName?: string;
  defaultErrorClassName?: string;
  src: string;
  alt: string;
  onClick?: () => void;
  customLoader?: React.ReactNode;
  customError?: React.ReactNode;
};
function ImageLoader({
  containerClassName,
  defaultLoaderClassName,
  imageClassName,
  defaultErrorClassName,
  src,
  alt,
  onClick,
  customLoader,
  customError,
}: ImageLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <div
      className={cn(
        "relative flex justify-center mx-auto rounded-md w-full min-h-[50vh]",
        containerClassName
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "absolute inset-0 w-full h-full flex items-center justify-center rounded-md"
        )}
        style={{
          opacity: loading ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {customLoader ? (
          customLoader
        ) : (
          <div
            className={cn(
              "absolute inset-0 w-full h-full rounded-md bg-zinc-400 dark:bg-zinc-700 animate-pulse",
              defaultLoaderClassName
            )}
          />
        )}
      </div>
      {error ? (
        <>
          {customError ? (
            customError
          ) : (
            <div
              className={cn(
                "absolute inset-0 w-full h-full rounded-md bg-zinc-300 dark:bg-zinc-800 flex flex-col items-center justify-center space-y-2 text-red-600 text-base md:text-lg text-balance text-center font-semibold",
                defaultErrorClassName
              )}
            >
              <TriangleAlert className="w-16 h-16" />
              <p>Something went wrong to load the image</p>
            </div>
          )}
        </>
      ) : (
        <img
          className={cn(
            "w-full h-full object-cover rounded-md",
            imageClassName
          )}
          src={src}
          alt={alt}
          style={{
            opacity: loading ? 0 : 1,
            transition: "opacity 0.5s ease-in-out",
          }}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default ImageLoader;
`;

export const defaultCode = `import ImageLoader from "@/components/ui/image-loader";

function DemoImage() {
  return (
    <ImageLoader src="https://picsum.photos/800/400?random=2" alt="" />
  );
}

export default DemoImage;`;

export const defaultErrorCode = `import ImageLoader from "@/components/ui/image-loader";

function DemoImage() {
  return (
    <ImageLoader src="/image.jpg" alt="" />
  );
}

export default DemoImage;`;

export const customLoaderCode = `import ImageLoader from "@/components/ui/image-loader";

function DemoImage() {
  return (
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
  );
}

export default DemoImage;`;

export const customErrorCode = `import ImageLoader from "@/components/ui/image-loader";

function DemoImage() {
  return (
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
                    {\`
                    .cls-1 {
                        fill: none;
                        stroke: gray;
                        stroke-miterlimit: 10;
                        stroke-width: 25px;
                    }
        
                    .cls-2 {
                        fill: gray;
                    }
                    \`}
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
  );
}

export default DemoImage;`;
