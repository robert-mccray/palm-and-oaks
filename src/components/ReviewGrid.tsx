import reviewsData from '../data/reviews.json';

export default function ReviewGrid() {
  return (
    <section className="py-24 bg-sand/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Host Highlights */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="h-20 w-20 bg-coastal-blue rounded-full flex items-center justify-center text-white text-2xl font-serif">
              C
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Hosted by Cassandra</h3>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                <span className="font-semibold text-gray-900">Superhost</span> • 68 Reviews
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-1 text-yellow-500 text-3xl mb-2">
              ★★★★★
            </div>
            <p className="text-3xl font-bold text-gray-900">4.93 <span className="text-lg text-gray-500 font-normal">Guest favorite</span></p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-50">
              <div className="flex text-yellow-500 text-sm mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location} • {review.date}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}