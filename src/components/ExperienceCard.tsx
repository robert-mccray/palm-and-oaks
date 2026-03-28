interface ExperienceProps {
  title: string;
  subtitle: string;
  description: string;
  basePrice: number;
  baseGuests: number;
  additionalGuestFee?: number;
  duration: string;
  image: string;
}

export default function ExperienceCard({ 
  title, subtitle, description, basePrice, baseGuests, additionalGuestFee, duration, image 
}: ExperienceProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div 
        className="h-56 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif text-gray-900 mb-1">{title}</h3>
        <p className="text-sm font-semibold text-coastal-blue tracking-wider uppercase mb-3">
          {subtitle}
        </p>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        
        <div className="border-t border-gray-100 pt-4 mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-900 font-bold text-xl">${basePrice}</span>
            <span className="text-sm text-gray-500">Up to {baseGuests} guests</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{duration}</span>
            {additionalGuestFee && <span>+${additionalGuestFee}/extra guest</span>}
          </div>
        </div>
        
        <button className="w-full py-3 bg-gray-900 text-white rounded-md hover:bg-coastal-blue transition-colors font-semibold">
          Request to Book
        </button>
      </div>
    </div>
  );
}