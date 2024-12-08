import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
        <Image
          className={cn(
            "w-full h-full object-cover rounded-md",
            imageClassName
          )}
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
