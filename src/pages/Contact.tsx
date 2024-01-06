import ContactForm from "../components/contact/ContactForm";

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
            <ContactForm />
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
