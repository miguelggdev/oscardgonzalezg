"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { OptimizedImage } from "./OptimizedImage";
import { ScrollLink } from "./ScrollLink";

const backgroundImages = [
  "/images/marvel.jpg",
  "/images/marvel-outside.jpg",
  "/images/marvel_out.jpg",
];

const HeroSection: React.FC = () => {
  const autoplay = React.useRef(Autoplay({ delay: 5000 }));

  return (
    <section className="relative overflow-hidden" aria-label="Hero Section">
      <Carousel loop plugins={[autoplay.current]}>
        <CarouselContent>
          {backgroundImages.map((src, index) => (
            <CarouselItem key={index} className="relative h-[24rem] md:h-[32rem]">
              <OptimizedImage
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 100vw, 100vw"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Tu Nuevo MG Te Espera.
          <br />
          Encuentra el Plan Perfecto para Llevarlo a Casa.
        </h1>
        <p className="text-white max-w-2xl mb-6 text-lg md:text-xl">
          Tecnología de Vanguardia, Seguridad 5 Estrellas y el Asesoramiento Financiero que Sí Te Conviene.
          <br />
          Somos la Nueva Generación de Movilidad.
        </p>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white text-lg py-4 px-8"
          asChild
        >
          <ScrollLink to="#lead-form" className="flex items-center justify-center">
            ¡Agenda Tu Prueba de Manejo y Cotización!
          </ScrollLink>
        </Button>
        <p className="text-white mt-4 text-sm md:text-base">
          Oferta de Lanzamiento: Tasas Preferenciales en Financiamiento.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
export { HeroSection };