import { useState } from "react";

export default function ContactForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [nameErrorMessage, setNameErrorMessage] = useState<string | null>(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  );

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const maxLength = 300;
    const pastedText = event.clipboardData.getData("text");

    if (pastedText.length > maxLength) {
      setErrorMessage(
        "O seguinte texto possui mais caracteres que o permitido"
      );
      event.preventDefault();

      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } else {
      setErrorMessage(null);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length > 65) {
      setNameErrorMessage("O texto possui mais caracteres que o permitido");
    } else if (value.length < 4) {
      setNameErrorMessage("Caracteres insuficientes");
    } else {
      setNameErrorMessage(null);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!value.includes("@")) {
      setEmailErrorMessage("Símbolo arroba (@) em falta");
    } else {
      setEmailErrorMessage(null);
    }
  };

  return (
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
          maxLength={65}
          onChange={handleNameChange}
          required
        />
        {nameErrorMessage && <p className="text-red-500">{nameErrorMessage}</p>}
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
          maxLength={65}
          onChange={handleEmailChange}
          required
        />
        {emailErrorMessage && (
          <p className="text-red-500">{emailErrorMessage}</p>
        )}
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
          maxLength={50}
        />
        <span className="text-sm text-gray-700">
          {" "}
          - Insira sua organização, caso possua.
        </span>
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
          maxLength={300}
          onPaste={handlePaste}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <span className="text-sm text-gray-700"> - Máximo 300 caracteres.</span>
      </div>
      <input type="hidden" name="_template" value="table" />
      <button
        aria-label="Enviar mensagem"
        className="mt-4 px-4 py-5 border-none bg-product-purple-500 text-white font-semibold cursor-pointer rounded transiton-all hover:opacity-90"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
