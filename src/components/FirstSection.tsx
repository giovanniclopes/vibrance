import mainBooksImage from '../assets/main-books.png';

export function FirstSection() {
  return (
    <>
      <section className="bg-firstSection p-44 grid grid-cols-2">
				<div>
          <h1 className=''>Qual livro/HQ você está procurando?</h1>
          <p>Não tem certeza do que quer ler a seguir? Explore nosso catálogo de livros.</p>
          <form action="">
            <input type="text" placeholder='Pesquisar por um livro...' />
            <input type="submit" className='bg-magenta-900' value=" " />
          </form>
        </div>
        <div>
          <img src={mainBooksImage} width={850} alt="" />
        </div>
			</section>
    </>
  );
}

export default FirstSection;
