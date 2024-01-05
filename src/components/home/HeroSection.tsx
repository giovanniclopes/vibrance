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
      <div className="flex flex-col gap-5 items-center justify-center px-12">
        <h1 className="font-bold text-5xl text-product-purple-500 w-2/3">
          Qual livro/HQ você está procurando?
        </h1>
        <p className="text-lg w-2/3">
          Não tem certeza do que quer ler a seguir? Explore nosso catálogo de
          livros.
        </p>
        <div className="flex mr-10">
          <input
            className="p-2 pr-12 py-3 border-2 outline-none font-medium border-product-purple-500 rounded-es-md rounded-ss-md"
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
    </section>
  );
}