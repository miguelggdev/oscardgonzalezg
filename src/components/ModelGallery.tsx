"use client";

import * as React from "react";
import { ImageGalleryModal } from "./ImageGalleryModal";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ModelGalleryProps {
  modelName: string;
  images: string[];
}

export const ModelGallery: React.FC<ModelGalleryProps> = ({ modelName, images }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button variant="outline" className="w-full" onClick={handleOpen}>
        <Eye className="mr-2 h-4 w-4" /> Ver Galería
      </Button>
      <ImageGalleryModal
        isOpen={isOpen}
        onClose={handleClose}
        modelName={modelName}
        images={images}
      />
    </>
  );
};