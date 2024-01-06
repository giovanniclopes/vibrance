export default function Contact() {
  return (
    <main className="bg-bgContactPage pt-36 px-12 pb-24 mbl:px-8">
      <div className="items-start justify-center gap-24">
        <div>
          <h1 className="font-extrabold text-6xl text-product-purple-500 mbl:text-5xl">
            Perguntas? <br /> Estamos aqui para ajudar.
          </h1>
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-32 mt-24 mbl:flex mbl:flex-col">
          <div className="mbl:w-full">
            <form
              className="flex flex-col gap-8"
              action="https://formsubmit.co/giovanniclopes@gmail.com"
              method="POST"
            >
              <div className="flex flex-col items-start justify-center gap-2">
                <label className="font-medium text-lg" htmlFor="userName">
                  Nome completo <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-product-purple-500"
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Me diga seu nome"
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <label className="font-medium text-lg" htmlFor="userEmail">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-product-purple-500"
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  placeholder="Me diga seu e-mail"
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <label className="font-medium text-lg" htmlFor="userMessage">
                  Organização
                </label>
                <input
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-product-purple-500"
                  type="text"
                  name="userOrganization"
                  id="userOrganization"
                  placeholder="Sua organização"
                />
                <span className="text-sm text-gray-700"> - Insira sua organização, caso possua</span>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <label className="font-medium text-lg" htmlFor="userMessage">
                  Sua mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-product-purple-500"
                  name="userMessage"
                  id="userMessage"
                  rows={5}
                  placeholder="Olá! Eu gostaria de falar sobre {assunto}..."
                  required
                />
              </div>
              <input type="hidden" name="_template" value="table" />
              <button
                aria-label="Enviar mensagem"
                className="mt-4 px-4 py-5 border-none bg-product-purple-500 text-white font-semibold cursor-pointer rounded transiton-all hover:opacity-90"
              >
                Enviar mensagem
              </button>
            </form>
          </div>


          <div className="grid grid-cols-2 gap-20 mbl:px-1">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-lg">Perguntas</span>
                <span>Confira nosso FAQ:</span>
                <ul className="text-blue-800 underline">
                  <li>
                    <a href="">Livros FAQ</a>
                  </li>
                  <li>
                    <a href="">Equipe FAQ</a>
                  </li>
                  <li>
                    <a href="">BookClub FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-lg">Como comprar</span>
                <span>
                  Para comprar um produto, você primeiramente precisa ser um
                  cliente registrado.
                </span>
                <ul className="text-blue-800 underline">
                  <li>
                    <a href="">Se registre</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-lg">Onde comprar</span>
                <span>Nossos produtos estão a venda apenas em nosso site.</span>
                <ul className="text-blue-800 underline">
                  <li>
                    <a href="">Conferir produtos</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-lg">Entre em contato</span>
                <span>(11) 9 1234-4321</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-lg">Vibrance Company©</span>
                <ul className="flex flex-col gap-2 list-disc">
                  <li>Rua dos Almirantes, São Caetano, Brasil</li>
                  <li>Rua Sophia dos Pinhares, Brasília, Brasil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
