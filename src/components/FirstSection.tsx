import mainBooksImage from "../assets/main-books.png";
import {} from 'phosphor-react';

export function FirstSection() {
  return (
    <>
      <section className="bg-firstSection p-44 grid grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-magenta-900 text-4xl w-96">
              Qual livro/HQ você está procurando?
            </h1>
            <p className="text-xl font-normal">
              Não tem certeza do que quer ler a seguir? Explore nosso catálogo
              de livros.
            </p>
          </div>
          <div>
            <form>
              <input className="h-full px-2 py-3 bg-white border-2 border-magenta-900 placeholder:font-light text-sm" type="text" placeholder="Pesquisar por um livro..." />
              <button className="h-full bg-magenta-900">
                
              </button>
            </form>
          </div>
        </div>
        <div>
          <img src={mainBooksImage} width={850} draggable={false} alt="" />
        </div>
      </section>
    </>
  );
}

export default FirstSection;
