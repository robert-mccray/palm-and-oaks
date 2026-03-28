export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full bg-slate-900 flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-md">
          Where Soft Life Meets the Shoreline
        </h1>
        <p className="text-xl md:text-2xl text-sand mb-10 font-light drop-shadow-sm">
          Luxury Picnics, Coastal Moments & Bay Breezes at Palm and Oaks.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#experiences" 
            className="px-8 py-4 bg-white text-coastal-blue font-semibold rounded-md hover:bg-sand transition shadow-lg"
          >
            Explore Experiences
          </a>
          <a 
            href="https://www.airbnb.com/your-listing-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition shadow-lg"
          >
            Book the Cottage
          </a>
        </div>
      </div>
    </div>
  );
}