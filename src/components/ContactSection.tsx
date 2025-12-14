import { Button } from "@/components/ui/button";
import { Car, MessageCircle, Phone } from "lucide-react";
import { ScrollLink } from "./ScrollLink";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold">Contacto</h2>
        <p className="text-center max-w-xl">
          ¡Estamos aquí para ayudarte! Contáctanos a través de los siguientes medios:
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 w-full">
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2"
          >
            <ScrollLink to="#lead-form" className="flex items-center justify-center gap-2">
              <Car className="h-5 w-5" />
              Agendar Prueba de Manejo
            </ScrollLink>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-gray-300 hover:bg-gray-400 flex items-center justify-center gap-2"
          >
            <a href="tel:+573102492212" className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Llamar Ahora
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2 text-white"
          >
            <a
              href="https://wa.me/573102492212"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Enviar Mensaje
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};