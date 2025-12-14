import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "./OptimizedImage";

const galleryImages = [
  {
    src: "/images/marvel_out.jpg",
    alt: "MG Marvel R en un paisaje escénico",
  },
  {
    src: "/images/mgzsroad.jpg",
    alt: "MG ZS en carretera",
  },
  {
    src: "/images/mgone-out.jpg",
    alt: "MG ONE con diseño exterior deportivo",
  },
  {
    src: "/images/rx5outside.jpg",
    alt: "MG RX5 en un entorno urbano",
  },
];

export const ImageGallerySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Una Galería para Inspirarte</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={4 / 3}>
                <OptimizedImage src={image.src} alt={image.alt} className="object-cover w-full h-full" />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};