import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    step: "1",
    title: "Contacto Inicial",
    description: "Déjame tus datos en el formulario o escríbeme por WhatsApp. Te responderé personalmente para entender lo que buscas, sin ningún compromiso.",
  },
  {
    step: "2",
    title: "Asesoría y Test Drive",
    description: "Te preparo una cotización a tu medida y agendamos una prueba de manejo para que sientas la experiencia MG. Resolveré todas tus dudas.",
  },
  {
    step: "3",
    title: "Entrega Fácil y Rápida",
    description: "Gestiono todo el papeleo y el financiamiento. Hago el proceso simple para que solo te preocupes por recibir las llaves de tu nuevo MG.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Tu Camino a un Nuevo MG en 3 Simples Pasos</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Comprar un auto nunca fue tan fácil. Te guío en cada etapa para una experiencia sin estrés.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {steps.map((step) => (
            <Card key={step.step} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold text-2xl flex-shrink-0">
                    {step.step}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};