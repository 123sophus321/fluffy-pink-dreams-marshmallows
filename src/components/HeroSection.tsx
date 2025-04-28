
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-marshmallow-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-marshmallow-pattern opacity-30"></div>
      <div className="section-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              Handcrafted Marshmallows
              <span className="block text-marshmallow-600">Made With Love</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg">
              Indulge in our cloud-like, artisanal marshmallows made with premium ingredients and a dash of magic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                className="btn-primary"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Products
              </Button>
              <Button
                variant="outline" 
                className="border-marshmallow-300 text-marshmallow-700 hover:bg-marshmallow-50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-64 h-64 bg-marshmallow-100 rounded-full absolute -top-12 -left-12 animate-float" style={{ animationDelay: "0s" }}></div>
              <div className="w-48 h-48 bg-marshmallow-200 rounded-full absolute top-32 left-48 animate-float" style={{ animationDelay: "1.5s" }}></div>
              <div className="w-32 h-32 bg-marshmallow-300 rounded-full absolute top-64 left-16 animate-float" style={{ animationDelay: "3s" }}></div>
              <img 
                src="https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Fluffy marshmallows"
                className="relative z-10 w-full h-auto max-w-md rounded-2xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-gray-500">
          <span>Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
