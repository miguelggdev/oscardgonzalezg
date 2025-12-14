import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

const objections = [
  {
    id: "resale",
    question: "¿Y la reventa y los repuestos?",
    answer: "MG cuenta con una red de concesionarios y centros de servicio en las principales ciudades de Colombia. Nuestros autos tienen una demanda creciente, asegurando un excelente valor de reventa. ¡Te conectamos con la red!",
  },
  {
    id: "reliability",
    question: "¿Será confiable?",
    answer: "Disfruta de una de las garantías más extensas del mercado. Además, contamos con el respaldo de SAIC Motor, uno de los gigantes automotrices más importantes del mundo. Calidad y tecnología global, aquí en Colombia.",
  },
  {
    id: "price",
    question: "¿El precio es real?",
    answer: "Conmigo, no hay letra pequeña. Recibes una cotización detallada y clara con el costo total de tu MG. Te ayudo a comparar y ver por qué nuestro precio es insuperable por lo que ofrecemos.",
  },
];

export const ObjectionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Derribamos Tus Dudas</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Resolvemos las preguntas más importantes para que tomes una decisión con total confianza.</p>
        <div className="max-w-3xl mx-auto text-left">
          <Accordion type="single" collapsible className="w-full">
            {objections.map((item) => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{item.answer}</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};