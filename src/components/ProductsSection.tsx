
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import ImageCarousel from "./ImageCarousel";

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  flavor: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic Vanilla Bean",
    description: "Our signature marshmallows with real vanilla bean specks throughout for an authentic flavor.",
    images: [
      "https://images.unsplash.com/photo-1578270339785-67307a9174b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ],
    flavor: "Vanilla"
  },
  {
    id: 2,
    name: "Strawberry Bliss",
    description: "Soft pink marshmallows infused with real strawberries for a fruity delight.",
    images: [
      "https://images.unsplash.com/photo-1516747149083-14902f1f662e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    flavor: "Strawberry"
  },
  {
    id: 3,
    name: "Chocolate Swirl",
    description: "Vanilla marshmallows with rich chocolate swirls throughout, perfect for hot chocolate.",
    images: [
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    flavor: "Chocolate"
  },
  {
    id: 4,
    name: "Raspberry Delight",
    description: "Delicate marshmallows with tangy raspberry flavor and a beautiful deep pink hue.",
    images: [
      "https://images.unsplash.com/photo-1637326502587-4b85cd07451d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    flavor: "Raspberry"
  }
];

const ProductsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="bg-marshmallow-50 py-16">
      <div className="section-container">
        <h2 className="section-title">{t('products.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card group">
              <div className="relative overflow-hidden h-48">
                <ImageCarousel 
                  images={product.images}
                  className="h-full"
                  imageClassName="h-48 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 bg-marshmallow-100 text-marshmallow-800 px-3 py-1 rounded-bl-lg">
                  {product.flavor}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button 
                  variant="outline"
                  className="w-full border-marshmallow-300 text-marshmallow-700 hover:bg-marshmallow-100"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.contact')}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t('products.custom.title')}</h3>
            <p className="text-lg text-gray-600 mb-6">
              {t('products.custom.desc')}
            </p>
            <Button 
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('products.custom.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
