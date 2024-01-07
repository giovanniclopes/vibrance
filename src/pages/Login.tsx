import { ArrowLeft, CaretRight, Star } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import userVibeTestimonial from "../assets/userVibeTestimonial.png";

export default function Login() {
  const navigate = useNavigate();

  return (
    <main className="">
      <div className="grid grid-cols-2 justify-center h-max">
        <div className="flex flex-col items-start justify-between bg-cover bg-bgLogin w-full px-12 pt-24 pb-32 rounded-ee-xl">
          <div className="flex flex-col gap-5">
            <div className="flex items-start justify-start">
              <button onClick={() => navigate(-1)}>
                <ArrowLeft size={24} color="#ffffff" weight="bold" />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="font-semibold text-5xl text-white">
                Boas-vindas a nossa comunidade!
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <div className="flex flex-row items-center justify-center gap-1">
              <Star size={24} color="#FFCE00" weight="fill" />
              <Star size={24} color="#FFCE00" weight="fill" />
              <Star size={24} color="#FFCE00" weight="fill" />
              <Star size={24} color="#FFCE00" weight="fill" />
              <Star size={24} color="#FFCE00" weight="fill" />
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <p className="text-white">
                "Nós amamos a Vibrance! Nossos usuários nos mandam avaliações
                positivas a cada dia. Isto só nos faz querer entregar o melhor
                para todos.”
              </p>
              <div className="flex flex-row items-center justify-center text-white">
                <div>
                  <img className="w-4/5" src={userVibeTestimonial} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">@Vibe</span>
                  <span>CEO da Vibrance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-36 px-12 pb-12">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-5xl">
              Junte-se a{" "}
              <span className="text-product-purple-500 font-bold">
                Vibrance
              </span>
            </h2>
            <p>
              A Vibrance oferece os livros e HQs que você deseja para iniciar a
              leitura dos sonhos.
            </p>
          </div>
          <form className="w-full flex flex-col gap-5 mt-8" action="">
            <div>
              <label className="font-medium text-lg" htmlFor="userName">
                Nome completo <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-3 rounded border border-gray-400"
                type="text"
                name="userName"
                id="userName"
                placeholder="Nome"
                maxLength={70}
                required
              />
            </div>
            <div>
              <label className="font-medium text-lg" htmlFor="userEmail">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-3 rounded border border-gray-400"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Email"
                maxLength={125}
                required
              />
            </div>
            <div>
              <label className="font-medium text-lg" htmlFor="userPassword">
                Senha <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-3 rounded border border-gray-400"
                type="password"
                name="userPassword"
                id="userPassword"
                placeholder="Senha"
                maxLength={128}
                required
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2">
                <input type="checkbox" name="userRemember" id="userRemember" />
                <label htmlFor="userRemember">Lembrar de mim</label>
              </div>
              <a href="#" className="text-blue-600">Esqueceu sua senha?</a>
            </div>
            <button
              aria-label="Enviar mensagem"
              className="mt-4 px-4 py-5 border-none bg-[#723d73] text-white font-semibold cursor-pointer rounded transiton-all hover:opacity-90"
            >
              Entrar
            </button>
            <div className="flex flex-row items-center justify-start gap-1">
              <span className="text-gray-600">Novo na Vibrance?</span>
              <a className="text-blue-600" href="#">
                crie sua conta agora
              </a>
              <CaretRight size={16} color="#2563eb" weight="bold" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
