// src/App.tsx

function App() {
  return (
    <div className="min-h-screen bg-sand text-gray-900 font-sans">
      {/* Temporary Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide text-coastal-blue">Palm and Oaks</h1>
        <nav className="flex gap-4">
          <a href="#experiences" className="text-gray-600 hover:text-gray-900 pt-2">Experiences</a>
          {/* Flow A: The Airbnb Deep Link */}
          <a 
            href="https://www.airbnb.com/your-listing-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-coastal-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
          >
            Book Your Stay
          </a>
        </nav>
      </header>

      <main>
        {/* Temporary Hero */}
        <section className="py-20 text-center bg-coastal-blue text-white">
          <h2 className="text-5xl font-serif mb-4">Where Soft Life Meets the Shoreline</h2>
          <p className="text-lg max-w-2xl mx-auto">Luxury Picnics, Coastal Moments & Bay Breezes.</p>
        </section>

        {/* Temporary Experiences Section */}
        <section id="experiences" className="py-20 px-6 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Curated Experiences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* We will map over your experiences.json here later */}
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h4 className="text-xl font-bold mb-2">Bay Breeze Escape</h4>
              <p className="text-gray-600 mb-4">Guided kayak session + luxury picnic setup.</p>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md w-full">
                Reserve Experience
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h4 className="text-xl font-bold mb-2">Custom Glowforge Sign</h4>
              <p className="text-gray-600 mb-4">Personalized keepsake for your event.</p>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md w-full">
                Add to Booking
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;