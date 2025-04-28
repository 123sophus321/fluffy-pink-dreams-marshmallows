
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import ImageCarousel from "./ImageCarousel";

const heroImages = [
  "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-marshmallow-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-marshmallow-pattern opacity-30"></div>
      <div className="section-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              {t('hero.title')}
              <span className="block text-marshmallow-600">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                className="btn-primary"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.browse')}
              </Button>
              <Button
                variant="outline" 
                className="border-marshmallow-300 text-marshmallow-700 hover:bg-marshmallow-50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.contact')}
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-64 h-64 bg-marshmallow-100 rounded-full absolute -top-12 -left-12 animate-float" style={{ animationDelay: "0s" }}></div>
              <div className="w-48 h-48 bg-marshmallow-200 rounded-full absolute top-32 left-48 animate-float" style={{ animationDelay: "1.5s" }}></div>
              <div className="w-32 h-32 bg-marshmallow-300 rounded-full absolute top-64 left-16 animate-float" style={{ animationDelay: "3s" }}></div>
              <ImageCarousel 
                images={heroImages}
                className="relative z-10 w-full max-w-md mx-auto"
                imageClassName="rounded-2xl shadow-2xl h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
