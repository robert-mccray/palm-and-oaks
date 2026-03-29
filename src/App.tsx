import Hero from './components/Hero';
import ExperienceCard from './components/ExperienceCard';
import ProductCard from './components/ProductCard';
import experiencesData from './data/experiences.json';
import keepsakesData from './data/keepsakes.json';
import ReviewGrid from './components/ReviewGrid';

function App() {
  return (
    <div className="min-h-screen bg-sand/30 text-gray-900 font-sans">
      {/* Sticky Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-white/90 backdrop-blur-sm shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide text-coastal-blue font-serif">Palm & Oaks</h1>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#experiences" className="text-gray-600 hover:text-coastal-blue font-medium">Experiences</a>
          <a href="#glowforge" className="text-gray-600 hover:text-coastal-blue font-medium">Keepsakes</a>
          <a 
            href="https://www.airbnb.com/rooms/687831562461834966?unique_share_id=5e3073b6-a726-44d6-afb3-867444fa730a&viralityEntryPoint=1&s=76" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-coastal-blue text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition shadow-sm font-medium"
          >
            Book Your Stay
          </a>
        </nav>
      </header>

      <main>
        <Hero />

        {/* Experiences Grid */}
        <section id="experiences" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Curated Experiences</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elevate your stay with signature moments designed for connection, relaxation, and memories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiencesData.map((exp) => (
              <ExperienceCard 
                key={exp.id}
                title={exp.title}
                subtitle={exp.subtitle}
                description={exp.description}
                basePrice={exp.basePrice}
                baseGuests={exp.baseGuests}
                additionalGuestFee={exp.additionalGuestFee}
                duration={exp.duration}
                image={exp.image}
              />
            ))}
          </div>
        </section>

        <ReviewGrid />

        {/* Keepsakes Section */}
        <section id="glowforge" className="py-24 px-6 max-w-7xl mx-auto bg-white rounded-3xl shadow-sm my-12 border border-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Custom Keepsakes & Decor</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a piece of the moment home with you. Add personalized, handcrafted wooden and acrylic pieces to your stay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keepsakesData.map((item) => (
              <ProductCard 
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 text-center">
        <h3 className="text-2xl font-serif mb-4">Palm & Oaks</h3>
        <p className="text-gray-400">Where Soft Life Meets the Shoreline.</p>
        <p className="text-gray-500 text-sm mt-8">© {new Date().getFullYear()} Palm & Oaks. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;