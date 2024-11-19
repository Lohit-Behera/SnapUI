import {
  CornerUpLeft,
  CornerUpRight,
  FastForward,
  Loader2,
  Maximize2,
  Minimize2,
  Pause,
  Play,
  Rewind,
  RotateCcw,
  TriangleAlert,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  thumbnailSrc: string;
  ambientGlow?: boolean;
  ambientGlowBlur?: number;
  containerClassName?: string;
  videoClassName?: string;
  circle?: boolean;
  circleClassName?: string;
  progressBarClassName?: string;
}

function VideoPlayer({
  src,
  thumbnailSrc,
  ambientGlow = true,
  ambientGlowBlur = 50,
  containerClassName,
  videoClassName,
  circle = false,
  circleClassName,
  progressBarClassName,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const STOP_DELAY = 2000;

  const [state, setState] = useState({
    isPlaying: false,
    currentTimeSec: 0,
    durationSec: 0,
    isDragging: false,
    tooltipTime: 0,
    isMuted: false,
    isFullScreen: false,
    isHovering: false,
    isBuffering: false,
    end: false,
    error: false,
    showThumbnail: true,
    buffer: 0,
    showPause: false,
    showForward: false,
    showRewind: false,
  });

  const updateState = (key: keyof typeof state, value: any) =>
    setState((prev) => ({ ...prev, [key]: value }));

  // Handles mouse move event within the div
  const handleMouseMove = useCallback(() => {
    updateState("isHovering", true);

    // If there was a previous timeout, clear it
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to detect when the mouse stops
    timeoutRef.current = setTimeout(() => {
      updateState("isHovering", false);
    }, STOP_DELAY);
  }, []);

  // Toggles play and pause
  const togglePlay = useCallback(() => {
    updateState("showThumbnail", false);
    updateState("end", false);
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      if (video !== videoRef.current && !video.paused) {
        updateState("isPlaying", false);
        video.pause();
      }
    });
    if (videoRef.current?.paused) {
      videoRef.current.play();
      updateState("isPlaying", true);
    } else {
      videoRef.current?.pause();
      updateState("isPlaying", false);
      updateState("showPause", true);
      setTimeout(() => {
        updateState("showPause", false);
      }, 1000);
    }
  }, []);

  // Toggles fullscreen on click.
  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      updateState("isFullScreen", false);
    } else if (divRef.current) {
      divRef.current.requestFullscreen();
      updateState("isFullScreen", true);
    }
  }, []);

  // get duration
  useEffect(() => {
    if (videoRef.current) {
      updateState("durationSec", videoRef.current.duration);
      const interval = setInterval(() => {
        if (videoRef.current) {
          updateState("currentTimeSec", videoRef.current.currentTime);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [state.isPlaying]);

  // get buffer percentage
  useEffect(() => {
    if (videoRef.current) {
      let frameId: number;

      const updateBuffer = () => {
        if (videoRef.current) {
          const buffered = videoRef.current.buffered;
          if (buffered.length > 0) {
            const bufferEnd = buffered.end(buffered.length - 1);
            const bufferPercentage =
              (bufferEnd / videoRef.current.duration) * 100;

            updateState("buffer", bufferPercentage);
          }
        }
        frameId = requestAnimationFrame(updateBuffer);
      };

      if (videoRef.current.paused === false) {
        updateBuffer();
      }

      return () => {
        cancelAnimationFrame(frameId);
      };
    }
  }, [state.isPlaying]);

  // Calculate progress bar width based on current time and duration
  const progressWidth = state.durationSec
    ? (state.currentTimeSec / state.durationSec) * 100
    : 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  // Handle mouse/touch movement over the progress bar for the tooltip
  const handleProgressHover = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (state.durationSec) {
      const progressBar = e.currentTarget;
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const offsetX = clientX - progressBar.getBoundingClientRect().left;
      const percentage = (offsetX / progressBar.offsetWidth) * 100;
      const newTime = (percentage / 100) * state.durationSec;

      updateState("tooltipTime", newTime);

      if (state.isDragging) {
        if (videoRef.current) {
          videoRef.current.currentTime = newTime;
        }
        updateState("currentTimeSec", newTime);
      }
    }
  };

  // Handle click/touch on the seek bar to jump to that position
  const handleSeekClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (state.durationSec) {
      const progressBar = e.currentTarget;
      const offsetX = e.clientX;
      const progressBarX = progressBar.getBoundingClientRect().left;
      const clickPosition = offsetX - progressBarX;
      const percentage = (clickPosition / progressBar.offsetWidth) * 100;
      const newTime = (percentage / 100) * state.durationSec;
      if (videoRef.current) {
        videoRef.current.currentTime = newTime;
      }
      updateState("currentTimeSec", newTime);
      updateState("isPlaying", true); // Automatically start playing once you seek
    }
  };

  // set Time
  const handleSetTime = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      updateState("currentTimeSec", time);
    }
  };

  // toggle volume toggle (mute/unmute)
  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      if (state.isMuted) {
        videoRef.current.volume = 1;
        updateState("isMuted", false);
      } else {
        videoRef.current.volume = 0;
        updateState("isMuted", true);
      }
    }
  }, [state.isMuted]);

  // Handles key presses.
  const handleKeys = useCallback(
    (e: React.KeyboardEvent) => {
      e.preventDefault();
      if (e.key === " ") {
        togglePlay();
      } else if (e.key === "f") {
        toggleFullscreen();
      } else if (e.key === "ArrowRight") {
        if (state.durationSec && state.durationSec - state.currentTimeSec > 5) {
          handleSetTime(state.currentTimeSec + 5);
          updateState("showForward", true);
          setTimeout(() => updateState("showForward", false), 1000);
        }
      } else if (e.key === "ArrowLeft") {
        if (state.currentTimeSec > 5) {
          handleSetTime(state.currentTimeSec - 5);
          updateState("showRewind", true);
          setTimeout(() => updateState("showRewind", false), 100);
        }
      } else if (e.key === "m") {
        toggleMute();
      }
    },
    [
      state.currentTimeSec,
      togglePlay,
      handleSetTime,
      toggleFullscreen,
      toggleMute,
    ]
  );

  useEffect(() => {
    const video = videoRef.current;
    if (ambientGlow) {
      const canvas = canvasRef.current;
      if (canvas && video) {
        const ctx = canvas.getContext("2d");

        const updateCanvas = () => {
          if (video.paused || video.ended) return;
          ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
          requestAnimationFrame(updateCanvas);
        };

        if (video) {
          video.addEventListener("play", () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            updateCanvas();
          });
        }
      }
    }

    if (video) {
      video.addEventListener("waiting", () => updateState("isBuffering", true));
      video.addEventListener("playing", () =>
        updateState("isBuffering", false)
      );
    }

    return () => {
      if (video) {
        video.removeEventListener("waiting", () =>
          updateState("isBuffering", true)
        );
        video.removeEventListener("playing", () =>
          updateState("isBuffering", false)
        );
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      onDoubleClick={toggleFullscreen}
      onTouchEnd={() => {
        updateState("isDragging", false);
        updateState("tooltipTime", 0);
      }}
      onMouseUp={() => updateState("isDragging", false)}
      onKeyDown={handleKeys}
      onMouseMove={handleMouseMove}
      className={cn(
        `relative w-full h-full flex justify-center mx-auto focus:outline-none ${
          state.isFullScreen ? "rounded-none" : "rounded-lg"
        } ${state.isHovering ? "cursor-pointer" : "cursor-none"}`,
        containerClassName
      )}
    >
      {/* thumbnail image */}
      {state.showThumbnail && (
        <img
          src={thumbnailSrc}
          alt=""
          className="absolute inset-0 z-40 w-full h-full object-cover rounded-lg"
          onClick={togglePlay}
        />
      )}
      {/* error overlay */}
      {state.error && (
        <div className="absolute top-0 left-0 w-full h-full z-30 flex flex-col justify-center items-center pointer-events-none bg-gray-400 text-base md:text-lg font-semibold rounded-lg">
          <TriangleAlert className="mb-1 w-[30%] md:w-[50%] h-[30%] md:h-[50%]" />
          &nbsp;Something went wrong
        </div>
      )}
      {/* video player */}
      <motion.video
        ref={videoRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: state.isPlaying ? 1 : 0.5 }} // Fade-in/out animation
        transition={{ duration: 0.5 }}
        className={cn(
          `z-10 ${state.isFullScreen ? "rounded-none" : "rounded-lg"}`,
          videoClassName
        )}
        onClick={togglePlay}
        controls={false}
        onEnded={() => updateState("end", true)}
        onError={() => updateState("error", true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      {/* loading animation */}
      {state.isPlaying && state.isBuffering && (
        <div className="absolute top-0 left-0 w-full h-full z-40 flex justify-center items-center pointer-events-none">
          <Loader2 className="w-14 h-14 animate-spin" strokeWidth={3} />
        </div>
      )}
      {/* show Play button */}
      {!state.isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full z-40 flex justify-center items-center pointer-events-none"
        >
          <span className="flex justify-center items-center w-[100px] h-[100px] rounded-full p-4 z-40 bg-black/50">
            <Play className="w-14 h-14" fill="#fff" color="#ffffff" />
          </span>
        </motion.div>
      )}

      {/* show replay button */}
      {state.end && (
        <div className="absolute top-0 left-0 w-full h-full z-40 flex justify-center items-center pointer-events-none">
          <span className="flex justify-center items-center w-[100px] h-[100px] rounded-full p-4 z-40 bg-black/50">
            <RotateCcw className="w-14 h-14" />
          </span>
        </div>
      )}
      {/* play icon animation */}
      <div className="absolute inset-0 z-30 w-full h-full flex justify-center items-center pointer-events-none overflow-hidden">
        {state.isPlaying && (
          <AnimationIcon
            icon={
              <Play
                className="w-10 md:w-16 h-10 md:h-16"
                fill="#fff"
                color="#ffffff"
              />
            }
            show={state.isPlaying}
          />
        )}
      </div>
      {/* pause icon animation */}
      <div className="absolute inset-0 z-30 w-full h-full flex justify-center items-center pointer-events-none overflow-hidden">
        {state.showPause && (
          <AnimationIcon
            icon={
              <Pause
                className="w-10 md:w-16 h-10 md:h-16"
                fill="#fff"
                color="#ffffff"
              />
            }
            show={state.showPause}
          />
        )}
      </div>
      {/* Mute icon animation */}
      <div className="absolute inset-0 z-30 w-full h-full flex justify-center items-center pointer-events-none overflow-hidden">
        {state.isMuted && (
          <AnimationIcon
            icon={<VolumeX className="w-10 md:w-16 h-10 md:h-16" />}
            show={state.isMuted}
          />
        )}
      </div>
      {/* UnMute icon animation */}
      <div className="absolute inset-0 z-30 w-full h-full flex justify-center items-center pointer-events-none overflow-hidden">
        {!state.isMuted && (
          <AnimationIcon
            icon={<Volume2 className="w-10 md:w-16 h-10 md:h-16" />}
            show={!state.isMuted}
          />
        )}
      </div>
      {/* Show Forward icon animation */}
      <div className="absolute inset-0 z-30 w-full h-full flex justify-end items-center pointer-events-none overflow-hidden">
        {!state.showForward && (
          <AnimationIcon
            className=""
            icon={
              <FastForward
                className="w-10 md:w-16 h-10 md:h-16"
                fill="#fff"
                color="#ffffff"
              />
            }
            show={!state.showForward}
          />
        )}
      </div>
      {/* Show Rewind icon animation */}
      <div className="absolute inset-0 z-30 w-full h-full flex justify-start items-center pointer-events-none overflow-hidden">
        {!state.showRewind && (
          <AnimationIcon
            icon={
              <Rewind
                className="w-10 md:w-16 h-10 md:h-16"
                fill="#fff"
                color="#ffffff"
              />
            }
            show={!state.showRewind}
          />
        )}
      </div>
      {!state.showThumbnail && (
        <>
          {/* shadow for controls */}
          <motion.span
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            animate={state.isHovering ? "visible" : "hidden"}
            transition={{ opacity: { duration: 0.3 } }}
            className={`w-full h-[30%] absolute bottom-0 left-0 bg-gradient-to-t from-black opacity-80 to-transparent pointer-events-none z-10 ${
              state.isFullScreen ? "rounded-none" : "rounded-lg"
            }`}
          ></motion.span>
          {/* controls */}
          {!state.error && (
            <motion.div
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              animate={state.isHovering ? "visible" : "hidden"}
              transition={{ opacity: { duration: 0.3 } }}
              className={`absolute bottom-0 z-40 w-full flex justify-between pointer-events-auto`}
            >
              {/* Progress bar */}
              <div
                onMouseMove={handleProgressHover}
                onMouseLeave={() => updateState("tooltipTime", 0)}
                onMouseDown={() => updateState("isDragging", true)}
                onMouseUp={() => updateState("isDragging", false)}
                onTouchMove={handleProgressHover}
                onTouchEnd={() => {
                  updateState("isDragging", false);
                  updateState("tooltipTime", 0);
                }}
                onTouchStart={() => updateState("isDragging", true)}
                onClick={handleSeekClick}
                className="absolute bottom-7 md:bottom-11 w-full h-2 group z-40 "
              >
                {/* show buffer bar  */}
                <span
                  className={`absolute w-full h-full bg-white/50 z-10 pointer-events-none`}
                  style={{
                    width: `${state.buffer}%`,
                  }}
                ></span>

                {/* Gray background progress bar (static) */}
                <span className="absolute w-full h-full bg-gray-500/50 z-0 group-hover:cursor-pointer group-hover:scale-y-125 transition-all duration-200"></span>

                {/* Red progress bar (dynamic) */}
                <span
                  className={cn(
                    "absolute w-full h-full bg-red-500 group-hover:bg-red-700 group-hover:cursor-pointer group-hover:scale-y-125 transition-all duration-200 z-10 pointer-events-none",
                    progressBarClassName
                  )}
                  style={{
                    width: `${progressWidth}%`,
                  }}
                ></span>

                {/* Circle at the current playback position */}
                {circle && (
                  <span
                    className={cn(
                      "absolute top-1/2 transform -translate-y-1/2 bg-white border-2 border-red-500 rounded-full w-4 h-4 z-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100",
                      circleClassName
                    )}
                    style={{
                      left: `${progressWidth - 0.5}%`,
                      transition: "left 0.1s ease-in-out",
                      pointerEvents: "auto",
                    }}
                  ></span>
                )}

                {state.tooltipTime > 0 && (
                  <span
                    className="absolute bottom-4 left-0 transform -translate-x-1/2 bg-black text-white text-xs p-1 rounded "
                    style={{
                      left: `${(state.tooltipTime / state.durationSec) * 100}%`,
                    }}
                  >
                    {formatTime(state.tooltipTime)}
                  </span>
                )}
              </div>
              <div className="absolute bottom-0.5 md:bottom-1.5 z-40 w-full flex justify-between">
                <div className="flex">
                  <span className="p-1">
                    {state.isPlaying ? (
                      <Pause
                        className="w-4 md:w-6 h-4 md:h-6 hover:cursor-pointer"
                        strokeWidth={1}
                        fill="#fff"
                        color="#ffffff"
                        onClick={togglePlay}
                      />
                    ) : (
                      <Play
                        className="w-4 md:w-6 h-4 md:h-6 hover:cursor-pointer"
                        fill="#fff"
                        color="#ffffff"
                        onClick={togglePlay}
                      />
                    )}
                  </span>
                  <span className="text-sm md:text-base my-auto mx-2">
                    {formatTime(
                      state.currentTimeSec ? state.currentTimeSec : 0
                    )}{" "}
                    / {formatTime(state.durationSec ? state.durationSec : 0)}
                  </span>
                  <span className="p-1">
                    <CornerUpLeft
                      className="w-4 md:w-6 h-4 md:h-6 hover:cursor-pointer"
                      onClick={() => {
                        if (state.currentTimeSec > 5) {
                          handleSetTime(state.currentTimeSec - 5);
                          updateState("showRewind", true);
                          setTimeout(
                            () => updateState("showRewind", false),
                            100
                          );
                        }
                      }}
                    />
                  </span>
                  <span className="p-1">
                    <CornerUpRight
                      className="w-4 md:w-6 h-4 md:h-6 hover:cursor-pointer"
                      onClick={() => {
                        if (
                          state.durationSec &&
                          state.durationSec - state.currentTimeSec > 5
                        ) {
                          handleSetTime(state.currentTimeSec + 5);
                          updateState("showForward", true);
                          setTimeout(
                            () => updateState("showForward", false),
                            100
                          );
                        }
                      }}
                    />
                  </span>
                  <span className="p-1">
                    {state.isMuted ? (
                      <VolumeX
                        className="w-4 md:w-6 h-4 md:h-6 hover:cursor-pointer"
                        onClick={toggleMute}
                      />
                    ) : (
                      <Volume2
                        className="w-4 md:w-6 h-4 md:h-6 hover:cursor-pointer"
                        onClick={toggleMute}
                      />
                    )}
                  </span>
                </div>
                <div className="mr-2 p-1">
                  {state.isFullScreen ? (
                    <Minimize2
                      className="w-4 md:w-6 h-4 md:h-6 hover:cursor-pointer"
                      onClick={toggleFullscreen}
                    />
                  ) : (
                    <Maximize2
                      className="w-4 md:w-6 h-4 md:h-6 hover:cursor-pointer"
                      onClick={toggleFullscreen}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
      {/* Ambient glow effect */}
      <motion.canvas
        ref={canvasRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: state.isPlaying ? 1 : 0.5 }} // Fade-in/out animation
        transition={{ duration: 0.5 }}
        className="w-full h-full absolute inset-0 z-0"
        style={{
          filter: `blur(${ambientGlowBlur}px)`,
          WebkitFilter: `blur(${ambientGlowBlur}px)`,
        }}
      ></motion.canvas>
    </div>
  );
}

export default VideoPlayer;

interface AnimationIconProps {
  icon: React.ReactNode;
  show: boolean;
  className?: string;
}

function AnimationIcon({ icon, show, className }: AnimationIconProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: show ? [0, 1, 0] : 0,
        scale: show ? [0, 1] : 0,
      }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
      transition={{
        opacity: {
          duration: 1,
          times: [0, 0.5, 1],
          ease: [0.11, 0.78, 0.23, 0.9],
        },
        scale: {
          duration: 1,
          times: [0, 1],
          ease: [0.11, 0.78, 0.23, 0.9],
        },
      }}
      className={cn(
        "flex justify-center items-center w-[100px] h-[100px] rounded-full p-4 z-50 bg-black/50",
        className
      )}
    >
      {icon}
    </motion.span>
  );
}
