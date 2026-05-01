import Image from "next/image";

export default function Card({ card }) {
 
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={card.url_img}
          alt={card.nombre_vehiculo}
          loading="eager"
          fill  
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{card.nombre_vehiculo}</h3>
          <p className="text-sm text-gray-500">{card.modelo}</p>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{card.motor}</p>

        <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
          Ver detalles
        </button>
      </div>
    </div>
  );
}