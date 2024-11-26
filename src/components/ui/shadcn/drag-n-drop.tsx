import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FileText, ImageUp, RefreshCcw, Video } from "lucide-react";

type DragNDropProps = {
  className?: string;
  handleFile: (file: File) => void;
  type: "image" | "video" | "document";
  resetButton: boolean;
  buttonClassName?: string;
};

const DragNDrop = ({
  className,
  handleFile,
  type,
  buttonClassName,
  resetButton,
}: DragNDropProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) {
      setError("No file selected");
      return;
    }
    if (type === "image" && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
      handleFile(droppedFile);
    } else if (type === "video" && droppedFile.type.startsWith("video/")) {
      setFile(droppedFile);
      handleFile(droppedFile);
    } else if (
      type === "document" &&
      droppedFile.type.startsWith("application/")
    ) {
      setFile(droppedFile);
      handleFile(droppedFile);
    } else {
      setError(`Please select a valid ${type} file`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setIsDragging(false);
    if (!selectedFile) {
      setError("No file selected");
    } else {
      if (type === "image" && selectedFile.type.startsWith("image/")) {
        setFile(selectedFile);
        handleFile(selectedFile);
      } else if (type === "video" && selectedFile.type.startsWith("video/")) {
        setFile(selectedFile);
        handleFile(selectedFile);
      } else if (
        type === "document" &&
        selectedFile.type.startsWith("application/")
      ) {
        setFile(selectedFile);
        handleFile(selectedFile);
      } else {
        setError(`Please select a valid ${type} file`);
      }
    }
  };

  return (
    <>
      {file ? (
        <div className="flex flex-col justify-center items-center space-y-4">
          {type === "image" ? (
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded Image"
              className="w-[70%] h-full object-cover rounded-lg"
            />
          ) : type === "video" ? (
            <video
              src={URL.createObjectURL(file)}
              controls
              className="w-[70%] h-full object-cover rounded-lg"
            />
          ) : (
            <p>{file.name}</p>
          )}
          {resetButton && (
            <Button
              variant="outline"
              onClick={() => {
                setFile(null);
                setError(null);
              }}
            >
              <RefreshCcw className="mr-0.5 h-4 w-4" /> Reset
            </Button>
          )}
        </div>
      ) : (
        <div className="flex flex-col space-y-4 ">
          <Label
            htmlFor="fileInput"
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setIsDragging(true)}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e: React.DragEvent<HTMLLabelElement>) => handleDrop(e)}
            className={cn(
              `w-full min-h-80 border-4 ${
                error ? "border-destructive" : "border-primary/50"
              }  rounded-lg ${
                isDragging &&
                "bg-muted border-dashed border-primary/50 dark:border-primary/50 "
              } flex flex-col justify-center items-center rounded-md text-sm md:text-lg cursor-pointer group`,
              className
            )}
          >
            {error ? (
              <p className="text-destructive font-semibold">{error}</p>
            ) : (
              <>
                <div
                  className="flex flex-col justify-center items-center my-auto"
                  onDragLeave={(e) => e.stopPropagation()}
                >
                  {type === "image" ? (
                    <ImageUp
                      className={`w-8 md:w-12 h-8 md:h-12 mx-auto mb-4 ${
                        isDragging && "animate-bounce"
                      }`}
                    />
                  ) : type === "video" ? (
                    <Video
                      className={`w-8 md:w-12 h-8 md:h-12 mx-auto mb-4 ${
                        isDragging && "animate-bounce"
                      }`}
                    />
                  ) : (
                    <FileText
                      className={`w-8 md:w-12 h-8 md:h-12 mx-auto mb-4 ${
                        isDragging && "animate-bounce"
                      }`}
                    />
                  )}
                  {isDragging ? (
                    <p>Drop the image here</p>
                  ) : (
                    <p className="flex flex-col">
                      <span className="text-primary font-bold cursor-pointer text-center group-hover:underline">
                        Click Here
                      </span>
                      <span>
                        &nbsp; or Drag and Drop the {type} here to upload
                      </span>
                    </p>
                  )}
                </div>
                <Input
                  type="file"
                  id="fileInput"
                  accept={
                    type === "image"
                      ? "image/*"
                      : type === "video"
                      ? "video/*"
                      : "application/*"
                  }
                  className="hidden"
                  onChange={handleInputChange}
                />
              </>
            )}
          </Label>
          {error && (
            <Button
              className={cn("", buttonClassName)}
              variant="outline"
              onClick={() => {
                setFile(null);
                setError(null);
              }}
            >
              <RefreshCcw className="mr-0.5 h-4 w-4" /> Reset
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default DragNDrop;
