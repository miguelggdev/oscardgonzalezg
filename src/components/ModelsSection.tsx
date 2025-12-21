"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Eye, Download } from "lucide-react";
import { ScrollLink } from "./ScrollLink";
import { OptimizedImage } from "./OptimizedImage";
import { assetUrl } from "@/lib/asset";

interface Model {
  name: string;
  image: string;
  description: string;
  label?: string;
  pdf?: string;
}

const featuredModels: Model[] = [
  {
    name: "MG ZS",
    image: "/images/mgzs.jpg",
    description: "El SUV familiar por excelencia. Espacio, confort y tecnología para todos.",
    label: "Últimas Unidades",
    pdf: "/documents/FICHA-ZS.pdf",
  },
  {
    name: "Marvel R",
    image: "/images/marvel.jpg",
    description: "Tecnología y elegancia se unen en este SUV 100% eléctrico.",
    label: "Oferta Exclusiva",
    pdf: "/documents/FICHA-MARVEL.pdf",
  },
  {
    name: "MG4 Cross",
    image: "/images/mg4.jpg",
    description: "Moderno, eficiente y divertido. El hatchback que redefine la movilidad.",
    // No hay PDF disponible para este modelo
  },
];

const ModelsSection: React.FC = () => {
  return (
    <section id="models" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Modelos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredModels.map((model) => (
            <Card key={model.name} className="relative overflow-hidden">
              {model.label && (
                <Badge className="absolute top-4 right-4 bg-red-600 text-white">
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
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold mt-4">{model.name}</h3>
                <p className="mt-2 text-gray-700">{model.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" /> Ver Galería
                </Button>
                <div className="flex gap-3">
                  <Button asChild className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                    <ScrollLink to="#lead-form" className="w-full text-center">
                      Solicitar Oferta
                    </ScrollLink>
                  </Button>
                  {model.pdf && (
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
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;