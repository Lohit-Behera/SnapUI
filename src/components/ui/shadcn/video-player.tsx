import {
  CornerUpLeft,
  CornerUpRight,
  Maximize2,
  Minimize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useCallback, useEffect, useState, useRef } from "react";

function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [durationSec, setDurationSec] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [tooltipTime, setTooltipTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const togglePlay = useCallback(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      if (video !== videoRef.current && !video.paused) {
        setIsPlaying(false);
        video.pause();
      }
    });
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, []);

  // Toggles fullscreen on click.
  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else if (divRef.current) {
      divRef.current.requestFullscreen();
      setIsFullScreen(true);
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      // Set video duration once it's loaded
      setDurationSec(videoRef.current.duration);

      const interval = setInterval(() => {
        if (videoRef.current) {
          // Update current time and percentage
          setCurrentTimeSec(videoRef.current.currentTime);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Calculate progress bar width based on current time and duration
  const progressWidth = durationSec ? (currentTimeSec / durationSec) * 100 : 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  // Handle mouse/touch movement over the progress bar for the tooltip
  const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (durationSec) {
      const progressBar = e.currentTarget;
      const mouseX = e.clientX - progressBar.getBoundingClientRect().left;
      const percentage = (mouseX / progressBar.offsetWidth) * 100;
      const newTime = (percentage / 100) * durationSec;
      setTooltipTime(newTime);
    }
    if (isDragging && durationSec) {
      const progressBar = e.currentTarget;
      const mouseX = e.clientX - progressBar.getBoundingClientRect().left;
      const percentage = (mouseX / progressBar.offsetWidth) * 100;
      const newTime = (percentage / 100) * durationSec;
      if (videoRef.current) {
        videoRef.current.currentTime = newTime;
      }
      setCurrentTimeSec(newTime);
    }
  };

  // Handle touch movement over the progress bar for the tooltip
  const handleProgressHoverTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (durationSec) {
      const progressBar = e.currentTarget;
      const touchX =
        e.touches[0].clientX - progressBar.getBoundingClientRect().left;
      const percentage = (touchX / progressBar.offsetWidth) * 100;
      const newTime = (percentage / 100) * durationSec;
      setTooltipTime(newTime);
    }
    if (isDragging && durationSec) {
      const progressBar = e.currentTarget;
      const touchX =
        e.touches[0].clientX - progressBar.getBoundingClientRect().left;
      const percentage = (touchX / progressBar.offsetWidth) * 100;
      const newTime = (percentage / 100) * durationSec;
      if (videoRef.current) {
        videoRef.current.currentTime = newTime;
      }
      setCurrentTimeSec(newTime);
    }
  };

  // Handle click/touch on the seekbar to jump to that position
  const handleSeekClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (durationSec) {
      const progressBar = e.currentTarget;
      const offsetX = e.clientX;
      const progressBarX = progressBar.getBoundingClientRect().left;
      const clickPosition = offsetX - progressBarX;
      const percentage = (clickPosition / progressBar.offsetWidth) * 100;
      const newTime = (percentage / 100) * durationSec;
      if (videoRef.current) {
        videoRef.current.currentTime = newTime;
      }
      setCurrentTimeSec(newTime);
      setIsPlaying(true); // Automatically start playing once you seek
    }
  };

  // set Time
  const handleSetTime = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTimeSec(time);
    }
  };

  // toggle volume toggle (mute/unmute)
  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      // Check that videoRef.current is not null
      if (isMuted) {
        videoRef.current.volume = volume; // Set volume to the original value
        setIsMuted(false);
      } else {
        videoRef.current.volume = 0; // Mute the video
        setIsMuted(true);
      }
    }
  }, [isMuted, volume]);

  return (
    <div
      ref={divRef}
      onDoubleClick={toggleFullscreen}
      onTouchEnd={() => {
        setIsDragging(false);
        setTooltipTime(0);
      }}
      onMouseUp={() => setIsDragging(false)}
      className={`relative w-full flex justify-center mx-auto ${
        isFullScreen ? "rounded-none" : "rounded-lg"
      } mb-5 focus:outline-none`}
    >
      <video
        ref={videoRef}
        className={`${isFullScreen ? "rounded-none" : "rounded-lg"}`}
        onClick={togglePlay}
        controls={false}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <>
        <div
          className={`hidden w-full h-[30%] absolute bottom-0 left-0 z-20 pointer-events-none bg-gradient-to-t from-black opacity-80 to-transparent ${
            isFullScreen ? "rounded-none" : "rounded-lg"
          }`}
        ></div>
        {/* Progress bar */}
        <div
          onMouseMove={handleProgressHover}
          onMouseLeave={() => setTooltipTime(0)}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchMove={handleProgressHoverTouch}
          onTouchEnd={() => {
            setIsDragging(false);
            setTooltipTime(0);
          }}
          onTouchStart={() => setIsDragging(true)}
          onClick={handleSeekClick}
          className="absolute bottom-7 md:bottom-11 w-full h-2 group z-40 x"
        >
          {/* Gray background progress bar (static) */}
          <span className="absolute w-full h-full bg-gray-500/50 z-0 group-hover:cursor-pointer group-hover:scale-y-125 transition-all duration-200"></span>

          {/* Red progress bar (dynamic) */}
          <span
            className="absolute w-full h-full bg-red-500 group-hover:bg-red-700 group-hover:cursor-pointer group-hover:scale-y-125 transition-all duration-200 z-10 pointer-events-none"
            style={{
              width: `${progressWidth}%`,
            }}
          ></span>

          {/* Circle at the current playback position */}
          <span
            className="absolute top-1/2 transform -translate-y-1/2 bg-white border-2 border-red-500 rounded-full w-4 h-4 z-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100"
            style={{
              left: `${progressWidth - 0.5}%`, // Offset the circle by 2% (about 2-4px)
              transition: "left 0.1s ease-in-out",
              pointerEvents: "auto", // Ensure the circle is interactive
            }}
          ></span>

          {tooltipTime > 0 && (
            <span
              className="absolute bottom-4 left-0 transform -translate-x-1/2 bg-black text-white text-xs p-1 rounded "
              style={{
                left: `${(tooltipTime / durationSec) * 100}%`,
              }}
            >
              {formatTime(tooltipTime)}
            </span>
          )}
        </div>
        <div className="absolute bottom-0.5 md:bottom-1.5 z-40 w-full flex justify-between">
          <div className="flex">
            <span className="p-1">
              {isPlaying ? (
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
              {formatTime(currentTimeSec ? currentTimeSec : 0)} /{" "}
              {formatTime(durationSec ? durationSec : 0)}
            </span>
            <span className="p-1">
              <CornerUpLeft
                className="w-4 md:w-6 h-4 md:h-6 hover:cursor-pointer"
                onClick={() => {
                  handleSetTime(currentTimeSec - 5);
                }}
              />
            </span>
            <span className="p-1">
              <CornerUpRight
                className="w-4 md:w-6 h-4 md:h-6 hover:cursor-pointer"
                onClick={() => {
                  handleSetTime(currentTimeSec + 5);
                }}
              />
            </span>
            <span className="p-1">
              {isMuted ? (
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
            {isFullScreen ? (
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
      </>
    </div>
  );
}

export default VideoPlayer;
