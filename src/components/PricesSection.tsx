
import { useLanguage } from "@/hooks/useLanguage";

const PricesSection = () => {
  const { t } = useLanguage();

  const prices = [
    { size: "prices.small", price: 20 },
    { size: "prices.medium", price: 40 },
    { size: "prices.large", price: 100 },
  ];

  return (
    <section className="bg-white py-8">
      <div className="section-container">
        <h2 className="section-title">{t('prices.title')}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          {prices.map((item) => (
            <div key={item.size} className="card p-6 text-center">
              <h3 className="text-xl font-bold mb-3">{t(item.size)}</h3>
              <p className="text-2xl font-bold text-marshmallow-600">
                {item.price} {t('prices.currency')}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-600 italic">
          {t('prices.business')}
        </p>
      </div>
    </section>
  );
};

export default PricesSection;
