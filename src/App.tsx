import Hero from './components/Hero';
import ExperienceCard from './components/ExperienceCard';
import experiencesData from './data/experiences.json';

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
      </main>
    </div>
  );
}

export default App;