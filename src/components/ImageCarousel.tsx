
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

interface ImageCarouselProps {
  images: string[];
  className?: string;
  imageClassName?: string;
  autoPlay?: boolean;
}

const ImageCarousel = ({ images, className, imageClassName, autoPlay = true }: ImageCarouselProps) => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [failedImages, setFailedImages] = useState<boolean[]>([]);
  const showNavigation = images.length > 1;

  // Check if images are loading correctly
  useEffect(() => {
    const checkImageLoading = () => {
      const loadStates = images.map(() => false);
      const failureStates = images.map(() => false);
      
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
          setFailedImages(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          
          // Show toast notification for failed images
          toast({
            title: "Image Error",
            description: `Failed to load image: ${src}`,
            variant: "destructive",
          });
        };
        img.src = src;
      });
      
      return loadStates;
    };

    setImagesLoaded(checkImageLoading());
  }, [images]);

  // If no images or all images failed, show helper message
  if (images.length === 0 || (failedImages.length > 0 && failedImages.every(failed => failed))) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-xl text-center">
        <p className="text-gray-600 mb-2">No images available</p>
        <p className="text-sm text-gray-500">
          Upload your images to /public/images/ in the appropriate folders
        </p>
      </div>
    );
  }

  // Filter out failed images
  const validImages = images.filter((_, index) => !failedImages[index]);
  const showNavigationFiltered = validImages.length > 1;

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
                onError={(e) => {
                  console.error(`Error loading image ${index}:`, image);
                  setFailedImages(prev => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                  });
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {showNavigation && showNavigationFiltered && (
        <>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </>
      )}
    </Carousel>
  );
};

export default ImageCarousel;
