interface ProductProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductCard({ title, description, price, image }: ProductProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-w-4 aspect-h-3 bg-gray-200 group-hover:opacity-90 transition-opacity">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover object-center"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif text-gray-900 leading-tight pr-4">{title}</h3>
          <p className="text-lg font-bold text-coastal-blue">${price}</p>
        </div>
        <p className="text-sm text-gray-600 mb-5 line-clamp-2">{description}</p>
        
        <button className="w-full py-2 bg-transparent border-2 border-coastal-blue text-coastal-blue font-semibold rounded hover:bg-coastal-blue hover:text-white transition-colors">
          Add to Stay
        </button>
      </div>
    </div>
  );
}