import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

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
  return (
    <Carousel
      className={cn(
        `w-full min-h-[60vh] max-h-[60vh] mx-auto relative `,
        containerClassName
      )}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className={cn(
              "w-full h-full max-h-[80vh] rounded-lg relative",
              item.className
            )}
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
                className={cn(
                  "text-white text-xs md:text-base",
                  titleClassName
                )}
              >
                {item.title}
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
                {item.description}
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
                src={item.smallImage}
                alt={item.smallImageAlt}
                className={cn(
                  "w-full h-28 md:h-40 lg:h-48 object-cover rounded-lg",
                  smallImageClassName
                )}
              />
            </motion.div>
            <span className="absolute w-full h-full top-0 left-0 bg-black/50 rounded-lg"></span>
            <img
              src={item.largeImage}
              alt={item.largeImageAlt}
              className={cn(
                "w-full max-h-[60vh] object-cover rounded-md",
                largeImageClassName
              )}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0" />
      <CarouselNext className="absolute right-0" />
    </Carousel>
  );
}

export default CarouselMotion;
