import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos R.",
    city: "Bogotá",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    initials: "CR",
    text: "Compré mi MG ZS con Oscar David. Su gestión para el crédito fue increíble, conseguí una tasa que en otros lados no me ofrecían. ¡Un 10/10!",
    rating: 5,
  },
  {
    name: "Ana María G.",
    city: "Medellín",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    initials: "AG",
    text: "El proceso fue súper transparente. Oscar me explicó cada detalle del financiamiento y del carro. Muy recomendado, me sentí segura en toda la compra.",
    rating: 5,
  },
  {
    name: "Javier P.",
    city: "Cali",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    initials: "JP",
    text: "Pensé que por ser una marca nueva sería complicado, pero el respaldo y la asesoría de Oscar David me dieron toda la confianza. Feliz con mi Marvel R.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
    ))}
  </div>
);

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Lo que dicen nuestros clientes en Colombia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="text-left flex flex-col justify-between">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-red-200" />
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.city}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};