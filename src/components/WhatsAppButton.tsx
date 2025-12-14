import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573102492212"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button size="lg" className="rounded-full h-16 w-16 md:w-auto md:px-6 bg-green-500 hover:bg-green-600 shadow-xl transition-all duration-300 hover:scale-105">
        <MessageCircle className="h-8 w-8 text-white md:mr-2" />
        <span className="hidden md:inline font-semibold">WhatsApp</span>
        <span className="sr-only">Chatear por WhatsApp</span>
      </Button>
    </a>
  );
};