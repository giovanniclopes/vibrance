import { useState, useEffect } from "react";
import BienalDoLivroImage from "../../assets/bienal-do-livro.webp";

export default function BienalDoLivro() {
  const [linkUnavailable, setLinkUnavailable] = useState(false);

  const handleSaberMaisClick = () => {
    setLinkUnavailable(true);

    // Agendar a remoção da mensagem após 5 segundos
    setTimeout(() => {
      setLinkUnavailable(false);
    }, 5000);
  };

  // Limpar a mensagem se o componente for desmontado antes do tempo
  useEffect(() => {
    return () => {
      setLinkUnavailable(false);
    };
  }, []);

  return (
    <section className="px-10 py-16">
      <div className="grid grid-cols-2 items-center justify-center mbl:flex mbl:flex-col-reverse">
        <div className="flex flex-col items-start justify-center gap-10 pl-10 mbl:items-center mbl:pl-0">
          <h2 className="text-6xl font-bold text-product-purple-500 mbl:text-4xl mbl:text-center mbl:mt-6">
            Bienal do Livro
          </h2>
          <p className="text-xl w-5/6 mbl:w-full mbl:text-center">
            A partir de 2021, passamos a participar da Bienal do Livro, onde
            você pode nos encontrar, conhecer mais sobre nós e conferir nossos
            livros exclusivos da coleção Vibrance.
          </p>
          <div>
            <button
              className="flex items-center justify-center px-16 py-4 bg-product-purple-500 text-white rounded-md text-xl font-medium transition-all hover:opacity-90 mbl:px-20"
              onClick={handleSaberMaisClick}
            >
              Saber mais
            </button>
            {linkUnavailable && (
              <p className="text-red-500 mt-2">O link não está disponível.</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-11/12"
            src={BienalDoLivroImage}
            alt="Bienal Internacional do Livro de São Paulo"
          />
        </div>
      </div>
    </section>
  );
}
