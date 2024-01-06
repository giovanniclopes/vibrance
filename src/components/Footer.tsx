import { useState } from "react";
import { PaperPlaneTilt } from "phosphor-react";
import LogoVibrance from "../assets/logos/logo-vibrance.png";

export default function Footer() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchButtonClick = () => {
    setSearchValue("");
  };

  return (
    <footer className="flex flex-col items-start justify-center my-8 mx-24 gap-12">
      <div>
        <img className="w-44" src={LogoVibrance} alt="Logo Vibrance" />
      </div>
      <div className="grid grid-cols-4 items-start justify-start gap-3">
        <div className="text-base font-light">
          <h4 className="font-medium text-lg mb-5">Sobre a loja</h4>
          <ul className="list-disc">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Se Torne Um Cliente</a>
            </li>
            <li>
              <a href="#">Sobre Nós</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Entre em Contato</a>
            </li>
          </ul>
        </div>
        <div className="text-base font-light">
          <h4 className="font-medium text-lg mb-5">Jurídico</h4>
          <ul className="list-disc">
            <li>
              <a href="#">Termos & Condições</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Termos de Uso</a>
            </li>
            <li>
              <a href="#">LGPD</a>
            </li>
          </ul>
        </div>
        <div className="text-base font-light">
          <h4 className="font-medium text-lg mb-5">Idioma</h4>
          <ul className="list-disc">
            <li>
              <a href="#">Português (Brasil)</a>
            </li>
            <li>
              <a href="#">Português (Portugal)</a>
            </li>
            <li>
              <a href="#">English (USA)</a>
            </li>
            <li>
              <a href="#">Deustch</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-lg mb-5">Inscreva-se agora</h4>
          <div>
            <div className="flex mr-10">
              <input
                className="p-2 pr-12 py-3 border-2 outline-none font-medium border-product-purple-500 rounded-es-md rounded-ss-md"
                type="text"
                name="email-input-newsletter"
                id="email-input-newsletter"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Seu melhor email"
              />
              <div
                id="submit-btn"
                className="flex items-center justify-center px-8 bg-product-purple-500 rounded-se-md rounded-ee-md cursor-pointer transition-all active:bg-product-purple-400"
                onClick={handleSearchButtonClick}
              >
                <PaperPlaneTilt size={24} weight="fill" color="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
