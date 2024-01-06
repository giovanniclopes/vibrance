export default function Contact() {
  return (
    <main className="bg-bgContactPage pt-36">
      <div className="items-start justify-center gap-24">
        <div>
          <h1 className="font-extrabold text-6xl text-product-purple-500">
            Perguntas? <br /> Estamos aqui para ajudar.
          </h1>
        </div>
        <div>
          <form
            className="flex flex-col gap-3"
            action="https://formsubmit.co/giovanniclopes@gmail.com"
            method="POST"
          >
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="userName">
                Nome completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Me diga seu nome"
                required
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="userEmail">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Me diga seu e-mail"
                required
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="userMessage">Organização</label>
              <input type="text" name="userOrganization" id="userOrganization" />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="">
                Sua mensagem <span className="text-red-500">*</span>
              </label>
              <textarea
                name="userMessage"
                id="userMessage"
                rows={5}
                placeholder="Olá! Eu gostaria de falar sobre {assunto}..."
                required
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
