"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { showSuccess, showError, showLoading, dismissToast } from "@/utils/toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido." }),
  email: z.string().email({ message: "Por favor ingresa un email válido." }),
  phone: z.string().min(7, { message: "El teléfono es requerido." }),
  city: z.string().min(3, { message: "La ciudad es requerida." }),
  model: z.string({ required_error: "Por favor selecciona un modelo." }),
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/movgrkzv";

export const LeadMagnetSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      model: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const loadingToastId = showLoading("Enviando formulario...");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      
      dismissToast(loadingToastId);

      if (res.ok) {
        showSuccess("Formulario enviado correctamente. ¡Revisa tu email!");
        form.reset();
      } else {
        // Formspree usually returns a 200 or 302 on success. If not ok, assume failure.
        showError("Error al enviar el formulario. Intenta de nuevo.");
      }
    } catch (err) {
      dismissToast(loadingToastId);
      console.error(err);
      showError("Error de conexión al enviar el formulario.");
    }
  }

  return (
    <section id="lead-form" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Guía Gratuita: 'Los 5 Pasos para un Financiamiento de Auto Sin Dolores de Cabeza en Colombia'
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Descarga esta guía y al recibirla, obtendrás una cotización
              pre-aprobada con condiciones especiales en tu email.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span>Calcula tu capacidad de endeudamiento real.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span>Conoce los documentos que sí necesitas tener a la mano.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span>
                  Aprende a comparar diferentes opciones de crédito de forma
                  inteligente.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-2xl text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-center">
              ¡Conversemos y recibe tu guía!
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Ana Pérez" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono / WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="3001234567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ciudad</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Bogotá" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Modelo de Interés</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un modelo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="MG ZS">MG ZS</SelectItem>
                          <SelectItem value="Marvel R">Marvel R</SelectItem>
                          <SelectItem value="MG4 Cross">MG4 Cross</SelectItem>
                          <SelectItem value="MG RX5">MG RX5</SelectItem>
                          <SelectItem value="MG ONE">MG ONE</SelectItem>
                          <SelectItem value="MG3 Hybrid">MG3 Hybrid</SelectItem>
                          <SelectItem value="Otro">Otro Modelo</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  ¡Enviar y recibir guía!
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};