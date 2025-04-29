
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-marshmallow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">{t('contact.subtitle')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('contact.desc')}
                </p>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-amber-700 font-medium border-l-4 border-amber-500 pl-3 py-2 bg-amber-50">
                    <p>{t('contact.rest_note')}</p>
                  </div>
                </div>
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
