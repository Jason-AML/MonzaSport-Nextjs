import CategorySplit from "@/components/home/CategorySplit";
import HeroVideo from "@/components/home/HeroVideo";
import LatestNews from "@/components/home/LatestNews";
import Testimonials from "@/components/home/Testimonials";
const HomeView = () => {
  return (
    <>
      <HeroVideo />
      <CategorySplit />
      <Testimonials />
      <LatestNews />
    </>
  );
};

export default HomeView;
