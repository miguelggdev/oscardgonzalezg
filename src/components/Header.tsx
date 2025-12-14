import { Car, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollLink } from "./ScrollLink";

const navLinks = [
  { href: "#models", label: "Modelos" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#contact", label: "Contacto" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#" className="flex items-center gap-2">
          <Car className="h-8 w-8 text-red-600" />
          <span className="font-bold text-xl text-gray-800">
            Oscar David González <span className="font-normal text-red-600">| Asesor MG</span>
          </span>
        </a>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              to={link.href}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out",
          isMenuOpen ? "transform translate-y-0" : "transform -translate-y-[150%]"
        )}
      >
        <nav className="flex flex-col items-center gap-4 p-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              to={link.href}
              className="text-gray-800 text-lg hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
};