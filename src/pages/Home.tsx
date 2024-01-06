import BienalDoLivro from "../components/home/BienalDoLivro";
import BooCon from "../components/home/BooCon";
import BookClub from "../components/home/BookClub";
import HeroSection from "../components/home/HeroSection";
import Partnerships from "../components/home/Partnerships";
import TrendingBooks from "../components/home/TrendingBooks";
import TrendingHQs from "../components/home/TrendingHQs";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <TrendingBooks />
      <BienalDoLivro />
      <TrendingHQs />
      <BooCon />
      <Partnerships />
      <BookClub />
    </main>
  );
}
