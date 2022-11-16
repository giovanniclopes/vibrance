import mainBooksImage from '../assets/main-books.png';
import searchIcon from '../assets/icons/search.png';

export function FirstSection() {
  return (
    <>
      <section className="bg-firstSection p-44 grid grid-cols-2">
				<div>
          <h1>Qual livro/HQ você está procurando?</h1>
          <p>Não tem certeza do que quer ler a seguir? Explore nosso catálogo de livros.</p>
          <form action="">
            <input type="text" placeholder='Pesquisar por um livro...' />
            <input type="submit" value={searchIcon} />
          </form>
        </div>
        <div>
          <img src={mainBooksImage} width={630} alt="" />
        </div>
			</section>
    </>
  );
}

export default FirstSection;
