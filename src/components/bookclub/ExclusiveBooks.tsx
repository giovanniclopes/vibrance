import ExclusiveBooksCarousel from "./ExclusiveBooksCarousel";

export default function ExclusiveBooks() {
  return (
    <section className="my-24">
      <div className="flex items-start justify-center flex-col gap-12">
        <div className="px-24">
          <h2 className="text-4xl text-product-purple-500 font-bold mbl:text-3xl mbl:text-center">
            Livros exclusivos
          </h2>
        </div>
        <div className="w-screen overflow-hidden">
          <ExclusiveBooksCarousel />
        </div>
      </div>
    </section>
  );
}
