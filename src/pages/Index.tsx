
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import PricesSection from "@/components/PricesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <PricesSection />
      
      <section id="contact" className="bg-white py-8">
        <div className="section-container">
          <h2 className="section-title">{t('contact.title')}</h2>
          
          <div className="bg-marshmallow-50 p-4 rounded-lg mb-6 border-l-4 border-marshmallow-300">
            <p className="text-gray-700">{t('contact.rest_note')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="bg-marshmallow-50 p-6 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-4">{t('contact.subtitle')}</h3>
                <p className="text-gray-600">
                  {t('contact.desc')}
                </p>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
