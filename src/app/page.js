import CategorySplit from "@/components/home/CategorySplit";
import HeroVideo from "@/components/home/HeroVideo";
import LatestNews from "@/components/home/LatestNews";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "Home",
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
