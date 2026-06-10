import CategorySplit from "@/components/home/CategorySplit";
import HeroVideo from "@/components/home/HeroVideo";
import LatestNews from "@/components/home/LatestNews";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  metadataBase: new URL("https://www.monzamotors.com"),
  title: "Monza Motors - Home",
  description:
    "Bienvenido a Monza Motors, donde la precisión se encuentra con la pasión por los vehículos. Explora nuestra colección de vehículos y aplicaciones desarrollados con dedicación y excelencia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Monza Motors - Home",
    description:
      "Bienvenido a Monza Motors, donde la precisión se encuentra con la pasión por los vehículos. Explora nuestra colección de vehículos y aplicaciones desarrollados con dedicación y excelencia.",
    url: "https://www.monzamotors.com",
    siteName: "Monza Motors",
    images: [
      {
        url: "https://www.monzamotors.com/motos.webp",
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
  return (
    <>
      <HeroVideo />
      <CategorySplit />
      <Testimonials />
      <LatestNews />
    </>
  );
}
