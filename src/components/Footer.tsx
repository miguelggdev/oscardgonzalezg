import { Instagram, Mail, Music } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.instagram.com/oscar_d_car/?igsh=MW55b29kY3JkcjRnZg%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="TikTok">
            <Music />
          </a>
          <a href="mailto:oscar19gonzalez@gmail.com" className="text-gray-400 hover:text-white" aria-label="Correo Electrónico">
            <Mail />
          </a>
        </div>
        <p className="font-bold text-white">Oscar David González - Asesor Certificado MG Colombia</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        <div className="mt-4">
          <a href="#" className="text-xs text-gray-500 hover:text-white mr-4">Aviso de Privacidad</a>
          <span className="text-xs text-gray-500">|</span>
          <a href="https://arkanatech.tech" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-white ml-4">Desarrollado por Arkanatech.tech</a>
        </div>
      </div>
    </footer>
  );
};