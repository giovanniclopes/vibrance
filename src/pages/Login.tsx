import { useState } from "react";
import { ArrowLeft, CaretRight, Star, Eye, EyeSlash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import userVibeTestimonial from "../assets/userVibeTestimonial.png";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <div className="grid grid-cols-2 justify-center h-max mbl:flex mbl:flex-col">
        <div className="flex flex-col items-start justify-between bg-cover bg-bgLogin w-full px-12 pt-24 pb-32 rounded-ee-xl mbl:gap-24 mbl:pb-12">
          <div className="flex flex-col gap-5">
            <div className="flex items-start justify-start">
              <button onClick={() => navigate("/")}>
                <ArrowLeft size={24} color="#ffffff" weight="bold" />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="font-semibold text-5xl text-white mbl:text-4xl">
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

        <div className="pt-36 px-12 pb-12 mbl:pt-16 mbl:px-6">
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
                className="w-full p-3 rounded border border-gray-400 focus:outline-none focus:border-2 focus:border-[#723d73]"
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
                className="w-full p-3 rounded border border-gray-400 focus:outline-none focus:border-2 focus:border-[#723d73]"
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
              <div className="relative">
                <input
                  className="w-full p-3 rounded border border-gray-400 focus:outline-none focus:border-2 focus:border-[#723d73]"
                  type={showPassword ? "text" : "password"}
                  name="userPassword"
                  id="userPassword"
                  placeholder="Senha"
                  maxLength={128}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </span>
              </div>
              {password && (
                <p className="text-sm mt-2">
                  {password.length > 128
                    ? "A senha possui mais caracteres que o permitido"
                    : ""}
                </p>
              )}
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2">
                <input type="checkbox" name="userRemember" id="userRemember" />
                <label htmlFor="userRemember">Lembrar de mim</label>
              </div>
              <a href="#" className="text-blue-600 mbl:text-sm">
                Esqueceu sua senha?
              </a>
            </div>
            <button
              aria-label="Enviar mensagem"
              className="mt-4 px-4 py-5 border-none bg-[#723d73] text-white font-semibold cursor-pointer rounded transiton-all hover:opacity-90"
            >
              Entrar
            </button>
            <div className="flex flex-row items-center justify-start gap-3 mbl:text-sm">
              <span className="text-gray-600">Novo na Vibrance?</span>
              <div className="flex flex-row items-center justify-center gap-0">
                <a className="text-blue-600" href="#">
                  crie sua conta agora
                </a>
                <CaretRight size={16} color="#2563eb" weight="bold" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
