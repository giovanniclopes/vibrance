import mainBooksImage from "../assets/main-books.png";
import { MagnifyingGlass } from 'phosphor-react';

export function FirstSection() {
  return (
    <>
      <section className="bg-firstSection bg-cover p-44 pb-60 flex flex-row items-center justify-center gap-40">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 w-96">
            <h1 className="font-bold text-magenta-900 text-4xl">
              Qual livro/HQ você está procurando?
            </h1>
            <p className="text-lg font-normal">
              Não tem certeza do que quer ler a seguir? Explore nosso catálogo
              de livros.
            </p>
          </div>
          <div>
            <form className="flex flex-row items-center w-full h-12">
              <input
                className="w-64 h-full px-2 py-3 bg-white text-lg border-2 rounded-none border-magenta-900 placeholder:font-light placeholder:text-sm"
                type="text"
                placeholder="Pesquisar por um livro..."
              />
              <button className="h-full px-12 py-2 bg-magenta-900 rounded-tr-md rounded-br-md">
                <MagnifyingGlass size={26} color="#fff" />
              </button>
            </form>
          </div>
        </div>
        <div className="md:hidden">
          <img src={mainBooksImage} width={500} draggable={false} alt="" />
        </div>
      </section>
    </>
  );
}

export default FirstSection;
