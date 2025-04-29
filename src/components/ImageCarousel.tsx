
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  className?: string;
  imageClassName?: string;
  autoPlay?: boolean;
}

const ImageCarousel = ({ images, className, imageClassName, autoPlay = true }: ImageCarouselProps) => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const showNavigation = images.length > 1;

  // Check if images are loading correctly
  useEffect(() => {
    const checkImageLoading = () => {
      const loadStates = images.map(() => false);
      images.forEach((src, index) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          console.log(`Image loaded successfully: ${src}`);
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${src}`);
        };
        img.src = src;
      });
      return loadStates;
    };

    setImagesLoaded(checkImageLoading());
  }, [images]);

  if (images.length === 0) {
    return null;
  }

  return (
    <Carousel
      className={cn("w-full", className)}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1 h-full">
              <img
                src={image}
                alt={`Carousel image ${index + 1}`}
                className={cn(
                  "w-full h-full object-cover rounded-xl",
                  imageClassName
                )}
                onError={(e) => console.error(`Error loading image ${index}:`, image)}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {showNavigation && (
        <>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </>
      )}
    </Carousel>
  );
};

export default ImageCarousel;
