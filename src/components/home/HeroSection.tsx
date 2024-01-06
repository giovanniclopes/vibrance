import { useState } from "react";
import HomeDecoration from "../../assets/svg/HomeDecoration";
import { MagnifyingGlass } from "phosphor-react";

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchButtonClick = () => {
    setSearchValue("");
  };

  return (
    <section className="grid grid-cols-2 gap-x-5 pt-5 bg-homeFirstSectionImage bg-cover bg-center">
      <div className="flex flex-col gap-10 items-start justify-center px-12">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-5xl text-product-purple-500 ">
            Qual livro/HQ você está procurando?
          </h1>
          <p className="text-lg pr-1">
            Não tem certeza do que quer ler a seguir? <br /> Explore nosso
            catálogo de livros.
          </p>
        </div>
        <div className="w-full flex pr-24">
          <input
            className="w-full p-2 pl-5 py-4 border-2 outline-none font-medium border-product-purple-500 rounded-es-md rounded-ss-md"
            type="search"
            name="book-input-search"
            id="book-input-search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Pesquise por um livro..."
          />
          <div
            id="search-btn"
            className="flex items-center justify-center px-8 bg-product-purple-500 rounded-se-md rounded-ee-md cursor-pointer transition-all active:bg-product-purple-400"
            onClick={handleSearchButtonClick}
          >
            <MagnifyingGlass size={28} color="#ffffff" />
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
    </section>
  );
}
