
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white bg-opacity-95 shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-marshmallow-800">
              Fluffy Dreams
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="font-medium hover:text-marshmallow-600 transition-colors">
              About
            </a>
            <a href="#products" className="font-medium hover:text-marshmallow-600 transition-colors">
              Products
            </a>
            <a href="#contact" className="font-medium hover:text-marshmallow-600 transition-colors">
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-100 mt-3">
            <div className="flex flex-col space-y-3">
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium px-3 py-2 rounded-md hover:bg-marshmallow-50"
              >
                About
              </a>
              <a 
                href="#products" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium px-3 py-2 rounded-md hover:bg-marshmallow-50"
              >
                Products
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium px-3 py-2 rounded-md hover:bg-marshmallow-50"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
