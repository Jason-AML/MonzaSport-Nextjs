import Image from "next/image";
import Link from "next/link";

export default function Card({ data }) {
  return (
    <article
      className="group bg-[#161616] rounded-2xl"
      role="article"
      aria-labelledby={`vehicle-${data.id}`}
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-t-2xl">
        <Image
          alt={`Imagen del vehículo ${data.nombre_vehiculo}`}
          width={300}
          height={200}
          className="w-full h-full object-cover  transition-transform duration-700  group-hover:scale-110"
          src={data.url_img}
          loading="lazy"
          title={data.nombre_vehiculo}
        />
        <div
          className="absolute top-4 left-4 px-3 py-1 bg-[#00C79F] text-background-dark text-[10px] font-bold uppercase tracking-widest rounded"
          aria-label="Disponible en stock"
        >
          In Stock
        </div>
      </div>
      <div className="p-6">
        <h3
          id={`vehicle-${data.id}`}
          className="text-xl font-bold mb-4 tracking-tight"
        >
          {data.nombre_vehiculo}
        </h3>
        <div
          className="grid grid-cols-3 gap-2 mb-6"
          role="list"
          aria-label="Especificaciones del vehículo"
        >
          <div
            className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg"
            role="listitem"
          >
            <span
              className="material-symbols-outlined text-accent text-lg"
              aria-hidden="true"
            >
              bolt
            </span>
            <span className="text-[10px] text-gray-500 uppercase font-bold">
              {data.poder_hp} HP
            </span>
          </div>
          <div
            className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg"
            role="listitem"
          >
            <span
              className="material-symbols-outlined text-accent text-lg"
              aria-hidden="true"
            >
              timer
            </span>
            <span className="text-[10px] text-gray-500 uppercase font-bold">
              {data.aceleracion_0_100} s
            </span>
          </div>
          <div
            className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg"
            role="listitem"
          >
            <span
              className="material-symbols-outlined text-accent text-lg"
              aria-hidden="true"
            >
              settings_input_component
            </span>
            <span className="text-[10px] text-gray-500 uppercase font-bold">
              {data.torque_nm}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/5 pt-6">
          <span
            className="text-2xl font-bold tracking-tighter"
            aria-label={`Precio: ${data.precio}`}
          >
            $ {data.precio}
          </span>
          <button
            className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all"
            aria-label={`Ver detalles de ${data.nombre_vehiculo}`}
          >
            <Link
              href={`/collection/${data.id}`}
              className="material-symbols-outlined"
              aria-hidden="true"
            >
              arrow_forward
            </Link>
          </button>
        </div>
      </div>
    </article>
  );
}
