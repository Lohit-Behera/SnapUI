export const carouselTailwind = `import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type data = {
  className?: string;
  title: string;
  description: string;
  smallImage: string;
  smallImageAlt: string;
  largeImage: string;
  largeImageAlt: string;
};

type CarouselMotionProps = {
  data: data[];
  containerClassName?: string;
  textContainerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  smallImageContainerClassName?: string;
  smallImageClassName?: string;
  largeImageClassName?: string;
};

function CarouselMotion({
  containerClassName,
  textContainerClassName,
  titleClassName,
  descriptionClassName,
  smallImageContainerClassName,
  smallImageClassName,
  largeImageClassName,
  data,
}: CarouselMotionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeImage = (newIndex: number) => {
    if (newIndex < 0) {
      setCurrentIndex(data.length - 1);
    } else if (newIndex >= data.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection(1);
    changeImage(currentIndex + 1);
    setIsAnimating(true);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    changeImage(currentIndex - 1);
    setIsAnimating(true);
  };

  const swipeConfidenceThreshold = 10000;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      scale: 0.6,
      opacity: 0,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      scale: 0.6,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "w-full min-h-[50vh] md:min-h-[70vh] mx-auto relative overflow-hidden rounded-md",
        containerClassName
      )}
    >
      <AnimatePresence
        initial={false}
        custom={direction}
        onExitComplete={() => setIsAnimating(false)}
      >
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 1,
            ease: [0.56, 0.03, 0.12, 1.04],
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;

            if (swipe > swipeConfidenceThreshold) {
              handlePrev();
            } else if (swipe < -swipeConfidenceThreshold) {
              handleNext();
            }
          }}
          className="absolute top-0 left-0 w-full flex items-center justify-center"
        >
          <div
            className={cn(
              "absolute left-5 md:left-10 lg:left-20 top-5 md:top-10 lg:top-20 z-10 space-y-1 md:space-y-4",
              textContainerClassName
            )}
          >
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -30 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.12, 0.8, 0.17, 0.89],
                delay: 0.3,
              }}
              className={cn("text-white text-xs md:text-base", titleClassName)}
            >
              {data[currentIndex].title}
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -30 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.12, 0.8, 0.17, 0.89],
                delay: 0.6,
              }}
              className={cn(
                "w-[70%] text-xl md:text-3xl lg:text-5xl font-bold text-white",
                descriptionClassName
              )}
            >
              {data[currentIndex].description}
            </motion.h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className={cn(
              "absolute bottom-6 md:bottom-10 lg:bottom-20 right-10 lg:right-20 z-10",
              smallImageContainerClassName
            )}
          >
            <img
              src={data[currentIndex].smallImage}
              alt={data[currentIndex].smallImageAlt}
              className={cn(
                "w-full h-28 md:h-40 lg:h-48 object-cover rounded-lg",
                smallImageClassName
              )}
            />
          </motion.div>
          <span className="absolute w-full h-full top-0 left-0 bg-black/50 rounded-md"></span>
          <img
            src={data[currentIndex].largeImage}
            alt={data[currentIndex].largeImageAlt}
            className={cn(
              "w-full h-auto min-h-[50vh] md:min-h-[70vh] object-cover rounded-md",
              largeImageClassName
            )}
          />
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 bg-zinc-800 text-white rounded-full p-2"
        onClick={handleNext}
      >
        <ArrowRight className="w-5 h-5" />
      </button>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 bg-zinc-800 text-white rounded-full p-2"
        onClick={handlePrev}
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
    </div>
  );
}

export default CarouselMotion;`;
