import TrendingBooksCarousel from "./TrendingBooksCarousel";

export default function TrendingBooks() {
  return (
    <section className=" my-24">
      <div className="flex items-center justify-center flex-col gap-12">
        <div>
          <h2 className="text-5xl text-product-purple-500 font-semibold">
            Livros populares no momento
          </h2>
        </div>
        <div className="w-screen overflow-hidden">
          <TrendingBooksCarousel />
        </div>
      </div>
    </section>
  );
}