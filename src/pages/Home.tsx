import { MagnifyingGlass } from "phosphor-react";
import HomeDecoration from "../assets/svg/HomeDecoration";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="grid grid-cols-2 gap-x-5 pt-5 bg-homeFirstSectionImage bg-cover bg-center">
        <div className="flex flex-col gap-5 items-center justify-center px-12">
          <h1 className="font-bold text-5xl text-product-purple-500 w-2/3">
            Qual livro/HQ você está procurando?
          </h1>
          <p className="text-lg w-2/3">
            Não tem certeza do que quer ler a seguir? Explore nosso catálogo de
            livros.
          </p>
          <div className="w-full flex px-32">
            <input
              className="w-full p-2 py-3 border-2 outline-none font-medium border-product-purple-500 rounded-es-md rounded-ss-md"
              type="search"
              name="book-search"
              id="book-search"
              placeholder="Pesquise por um livro..."
            />
            <div className="flex items-center justify-center px-8 bg-product-purple-500 rounded-se-md rounded-ee-md">
              <MagnifyingGlass size={24} color="#ffffff" />
            </div>
          </div>
        </div>
        <div>
          <img
            className=""
            src="../src/assets/home-duplicated-books.webp"
            alt=""
          />
        </div>
        <div className="mt-10">
          <HomeDecoration />
        </div>
      </div>
    </main>
  );
}
