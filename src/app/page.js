import Card from "@/components/Card";
import HeroVideo from "@/components/home/HeroVideo";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Monza Motors - Home",
  description:
    "Bienvenido a Monza Motors, donde la precisión se encuentra con la pasión por los vehículos. Explora nuestra colección de vehículos y aplicaciones desarrollados con dedicación y excelencia.",
openGraph: {
    title: "Monza Motors - Home",
    description:
      "Bienvenido a Monza Motors, donde la precisión se encuentra con la pasión por los vehículos. Explora nuestra colección de vehículos y aplicaciones desarrollados con dedicación y excelencia.",
    url: "https://www.monzamotors.com",
    siteName: "Monza Motors",
    images: [
      {
        url: "https://www.monzamotors.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monza Motors - Precision in Motion",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default async function Home() {
  let vehicles = [];

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/vehicles`, {
      cache: "no-store", // Desactiva el caché para datos frescos
    });

    if (!response.ok) {
      throw new Error("Error al obtener vehículos");
    }

    vehicles = await response.json();
  } catch (error) {
    console.error("Error fetching vehicles:", error);
  }

  return (
    <> 
    <Navbar />
      <HeroVideo />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mis Vehículos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una colección de vehículos y aplicaciones que he desarrollado.
              Cada card muestra información detallada sobre cada vehículo.
            </p>
          </div>

          {vehicles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((card) => (
                  <Card key={card.id} card={card} />
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-500">
                  Total de vehículos: {vehicles.length}
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No hay vehículos disponibles en este momento.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
