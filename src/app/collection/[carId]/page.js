import Detail from "./Detail";
import { getCollectionById } from "@/services/collectionClient";
export async function generateMetadata({ params }) {
  const { carId } = await params;
  const vehicle = await getCollectionById(carId);
  return {
    title: vehicle.nombre_vehiculo,
    description: `Detalles del ${vehicle.nombre_vehiculo}`,
    openGraph: {
      title: vehicle.nombre_vehiculo,
      description: `Compra el ${vehicle.nombre_vehiculo}`,
      images: [
        {
          url: vehicle.url_img,
          alt: vehicle.nombre_vehiculo,
        },
      ],
    },
  };
}
const page = async ({ params }) => {
  const { carId } = await params;
  
  const vehicle = await getCollectionById(carId);
  return <Detail  vehicle={vehicle} />;
};

export default page;
