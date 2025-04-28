
const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Our Sweet Story</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-600">
                Welcome to Fluffy Dreams, where passion meets confection! Our journey began in a small kitchen with a simple dream: to create the most delightful, cloud-like marshmallows you've ever tasted.
              </p>
              <p className="mb-6 text-gray-600">
                Each marshmallow is handcrafted with love using premium, natural ingredients. We believe that the perfect marshmallow should be soft, pillowy, and melt in your mouth with each bite.
              </p>
              <p className="text-gray-600">
                From our kitchen to your home, we're dedicated to bringing a touch of sweetness to your special moments, whether that's a cozy night by the fire, a fancy hot chocolate, or a unique gift for someone special.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-marshmallow-100 rounded-lg transform rotate-6"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-marshmallow-200 rounded-lg transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Marshmallow making process" 
                className="relative z-10 w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-marshmallow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-marshmallow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Ingredients</h3>
              <p className="text-gray-600">We use only the finest ingredients to ensure exceptional taste and quality.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-marshmallow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-marshmallow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Handcrafted with Love</h3>
              <p className="text-gray-600">Each batch is made by hand with attention to detail and care.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-marshmallow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-marshmallow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Unique Flavors</h3>
              <p className="text-gray-600">Explore our wide range of flavors from classic vanilla to exciting seasonal creations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
