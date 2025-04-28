
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  className?: string;
  imageClassName?: string;
  autoPlay?: boolean;
}

const ImageCarousel = ({ images, className, imageClassName, autoPlay = true }: ImageCarouselProps) => {
  const showNavigation = images.length > 1;

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
