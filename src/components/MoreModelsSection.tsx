"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollLink } from "./ScrollLink";
import { OptimizedImage } from "./OptimizedImage";
import { assetUrl } from "@/lib/asset";

interface Model {
  name: string;
  subtitle: string;
  image: string;
  description: string;
  label?: string;
  pdf: string;
}

const moreModels: Model[] = [
  {
    name: "MG RX5",
    subtitle: "MG RX5",
    image: "/images/rx5outside.jpg",
    description: "Un SUV robusto y versátil, listo para cualquier aventura.",
    label: "Últimas Unidades",
    pdf: "/documents/FICHA-MG-RX5.pdf",
  },
  {
    name: "MG ONE",
    subtitle: "MG ONE",
    image: "/images/mgone-out.jpg",
    description: "Diseño deportivo y tecnología de punta en un SUV único.",
    pdf: "/documents/FICHA-MG-ONE.pdf",
  },
  {
    name: "MG3 Hybrid",
    subtitle: "MG3 Hybrid",
    image: "/images/mg3-hibrido.jpg",
    description: "El futuro es híbrido. Eficiencia y diseño en un compacto revolucionario.",
    label: "Nuevo Modelo",
    pdf: "/documents/FICHA-MG3-HB.pdf",
  },
];

export const MoreModelsSection = () => {
  return (
    <section id="more-models" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Otros Modelos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moreModels.map((model) => (
            <Card key={model.name} className="overflow-hidden">
              <div className="relative">
                {model.label && (
                  <Badge className="absolute top-4 right-4 bg-pink-200 text-pink-700 z-10">
                    {model.label}
                  </Badge>
                )}
                <AspectRatio ratio={4 / 3}>
                  <OptimizedImage
                    src={model.image}
                    alt={model.name}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold mt-4">{model.name}</h3>
                <p className="text-gray-600">{model.subtitle}</p>
                <p className="mt-4 text-gray-700">{model.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" /> Ver Galería
                </Button>
                <div className="flex gap-3 w-full">
                  <Button asChild className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                    <ScrollLink to="#lead-form" className="w-full text-center">
                      Solicitar Oferta
                    </ScrollLink>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <a
                      href={assetUrl(model.pdf)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full"
                    >
                      <Download className="h-4 w-4" /> Ficha Técnica
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};