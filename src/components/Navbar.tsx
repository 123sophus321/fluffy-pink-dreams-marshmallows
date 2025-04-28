
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-marshmallow-400 to-marshmallow-500 flex items-center justify-center">
            <span className="text-white font-bold">FM</span>
          </div>
          <span className={`ml-2 font-bold text-xl ${isScrolled ? "text-gray-800" : "text-marshmallow-700"}`}>
            FluffyMarshmallows
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-1">
          <a href="#" className="px-4 py-2 text-gray-700 hover:text-marshmallow-600 transition-colors">
            {t('home')}
          </a>
          <a href="#about" className="px-4 py-2 text-gray-700 hover:text-marshmallow-600 transition-colors">
            {t('about')}
          </a>
          <a href="#products" className="px-4 py-2 text-gray-700 hover:text-marshmallow-600 transition-colors">
            {t('products')}
          </a>
          <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-marshmallow-600 transition-colors">
            {t('contact')}
          </a>
          <LanguageSelector />
        </div>
        
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <Button
            variant="ghost"
            className="p-1"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
