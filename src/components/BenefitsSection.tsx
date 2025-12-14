import { ShieldCheck, Cpu, ThumbsUp, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-red-600" />,
    title: "Seguridad 5 Estrellas",
    description: "Viaja con la máxima tranquilidad. Nuestros modelos cuentan con las más altas calificaciones en seguridad para proteger a tu familia.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-red-600" />,
    title: "Tecnología de Vanguardia",
    description: "Disfruta de sistemas de asistencia al conductor, conectividad total y un rendimiento eficiente que te pone a la delantera.",
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-red-600" />,
    title: "Garantía y Respaldo Total",
    description: "Con una de las mejores garantías del mercado y el respaldo de SAIC Motor, tu inversión está segura y protegida a largo plazo.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-red-600" />,
    title: "Diseño Espectacular",
    description: "Líneas modernas y acabados de primera calidad que no solo se ven bien, sino que se sienten increíbles. Prepárate para girar cabezas.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">¿Por Qué MG es Tu Mejor Decisión?</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Más que un auto, es una compra inteligente. Aquí te damos las razones lógicas que respaldan tu emoción.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm text-center">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};