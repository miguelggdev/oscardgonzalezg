import { OptimizedImage } from "./OptimizedImage";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users } from "lucide-react";

export const AdvisorSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <OptimizedImage 
              src="/images/oscarGM.jpg" 
              alt="Oscar David González, Asesor Certificado MG" 
              className="rounded-lg shadow-2xl w-full max-w-sm object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hola, Soy Oscar David. Tu Asesor Certificado MG en Colombia.</h2>
            <div className="flex gap-4 mb-6 flex-wrap">
              <Badge variant="secondary" className="text-lg py-1 px-3 bg-green-100 text-green-700">
                <CheckCircle className="h-4 w-4 mr-1" /> Asesor Certificado Platinum
              </Badge>
              <Badge variant="secondary" className="text-lg py-1 px-3 bg-red-100 text-red-700">
                <Users className="h-4 w-4 mr-1" /> +150 Familias Asesoradas
              </Badge>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              No solo te ayudo a elegir el MG ideal para tu familia o tu día a día. Mi especialidad es ser tu <strong>estratega financiero</strong>: te ayudo a encontrar el plan de pago que se adapte a tu bolsillo, gestionando los trámites para que tu compra sea fácil, segura y sin sorpresas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Mi compromiso es contigo, antes, durante y después de tu compra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};