import { ArrowRight } from "phosphor-react";
import { useState, useEffect } from "react";

export default function BooCon() {
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
    <section className="bg-product-purple-500 bg-cover bg-booConBackground py-32 mbl:py-24">
      <div className="flex flex-col items-center justify-center gap-12">
        <h3 className="text-5xl font-semibold text-white text-center mbl:text-4xl">
          Online BooCon <br /> 2023
        </h3>
        <p className="text-white text-lg text-center px-60 mbl:px-5">
          Participe de uma experiência literária extraordinária todo dia 15 de
          Outubro, envolvendo narrativas envolventes, celebração do universo
          literário e interação cultural única. Reserve a data para esta jornada
          memorável conosco!
        </p>
        <div className="flex group">
          <div>
            <button
              className="flex items-center justify-center px-24 py-3 border-2 outline-none text-lg font-medium text-white bg-transparent border-white rounded-es-md rounded-ss-md transition-all group-hover:bg-white group-hover:text-product-purple-500 mbl:px-12"
              onClick={handleSaberMaisClick}
            >
              Participar
            </button>
            {linkUnavailable && (
              <p className="text-red-500 mt-2">O link não está disponível.</p>
            )}
          </div>
          <button className="flex items-center justify-center px-10 bg-white rounded-se-md rounded-ee-md cursor-pointer transition-all group-hover:bg-transparent border-2 group-hover:border-white">
            <ArrowRight
              className="group-hover:text-white"
              size={24}
              weight="bold"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
