import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import homeDuplicatedBooks from "../../assets/home-duplicated-books.webp";
import HomeDecoration from "../../assets/svg/HomeDecoration";
import HomeDecorationMobile from "../../assets/home-decoration-mobile.png";

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate(); // Utilize useNavigate para navegação

  const handleSearchButtonClick = () => {
    // Redirecionar para a página "/products" com o texto da pesquisa na URL
    navigate(`/products?search=${searchValue}`);
    setSearchValue(""); // Limpar o valor de pesquisa após o redirecionamento
  };

  return (
    <section className="grid grid-cols-2 gap-x-5 pt-28 bg-homeFirstSectionImage bg-center mbl:flex mbl:flex-col mbl:gap-24 mbl:pt-24 mbl:bg-auto mbl:bg-top">
      <div className="flex flex-col gap-10 items-start justify-center px-12 mbl:pr-5">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-5xl text-product-purple-500 mbl:text-4xl">
            Qual livro/HQ você está procurando?
          </h1>
          <p className="text-lg pr-1">
            Não tem certeza do que quer ler a seguir? <br /> Explore nosso
            catálogo de livros.
          </p>
        </div>
        <div className="w-full flex pr-24 mbl:pr-8">
          <input
            className="w-full p-2 pl-5 py-4 border-2 outline-none font-medium border-product-purple-500 rounded-es-md rounded-ss-md"
            type="search"
            name="book-input-search"
            id="book-input-search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Pesquise por um livro..."
          />
          <button
            id="search-btn"
            className="flex items-center justify-center px-8 bg-product-purple-500 rounded-se-md rounded-ee-md cursor-pointer transition-all active:bg-product-purple-400"
            onClick={handleSearchButtonClick}
          >
            <MagnifyingGlass size={28} color="#ffffff" />
          </button>
        </div>
      </div>
      <div className="mbl:hidden">
        <img src={homeDuplicatedBooks} alt="" />
      </div>
      <div className="mt-10 mbl:hidden">
        <HomeDecoration />
      </div>
      <div className="hidden mbl:block mbl:w-screen mbl:overflow-hidden">
        <img src={HomeDecorationMobile} alt="" />
      </div>
    </section>
  );
}
