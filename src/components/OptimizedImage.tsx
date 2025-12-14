import React from "react";
import { cn } from "@/lib/utils";
import { assetUrl } from "@/lib/asset";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  ratio?: number; // e.g., 16/9
  fill?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  fill = false,
  ...props
}) => {
  // Resolver rutas que empiezan con / usando assetUrl, dejar URLs externas intactas
  const resolvedSrc = src && src.startsWith("/") ? assetUrl(src) : src;

  // Determine classes: if fill, position absolute to fill container; otherwise full width/height
  const imgClasses = cn(
    fill ? "absolute inset-0 w-full h-full object-cover" : "w-full h-full object-cover",
    className
  );

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading="eager"
      className={imgClasses}
      {...props}
    />
  );
};