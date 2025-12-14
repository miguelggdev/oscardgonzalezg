import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { assetUrl } from "@/lib/asset";

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  modelName: string;
  images: string[];
}

export const ImageGalleryModal = ({ isOpen, onClose, modelName, images }: ImageGalleryModalProps) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Galería de Imágenes: {modelName}</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={assetUrl(src)}
                            alt={`${modelName} - Imagen ${index + 1}`}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </AspectRatio>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
};