import BienalDoLivro from "../components/home/BienalDoLivro";
import HeroSection from "../components/home/HeroSection";
import TrendingBooks from "../components/home/TrendingBooks";
import TrendingHQs from "../components/home/TrendingHQs";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <TrendingBooks />
      <BienalDoLivro />
      <TrendingHQs />
    </main>
  );
}
