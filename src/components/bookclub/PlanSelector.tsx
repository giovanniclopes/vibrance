// src/components/PlanSelector.tsx

import { useState } from "react";
import { Check, X } from "phosphor-react";

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  price: number;
  services: {
    name: string;
    available: boolean;
  }[];
}

function PlanSelector() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: Plan[] = [
    {
      name: "Freebie",
      description:
        "Ideal para usuários que precisam de acesso rápido aos recursos básicos.",
      monthlyPrice: 0,
      annualPrice: 0,
      price: 0,
      services: [
        { name: "Conversão de arquivos ilimitada", available: true },
        { name: "Acesso exclusivo a livros Vibrance", available: true },
        { name: "Acesso antecipado a todos livros", available: false },
        { name: "Cupons de desconto", available: false },
        { name: "Meet and greet em eventos", available: false },
        { name: "Modo Leitor Avançado", available: false },
        { name: "Palestras exclusivas", available: false },
        {
          name: "Audiência para discutir melhorias e petições",
          available: false,
        },
      ],
    },
    {
      name: "Bookstan",
      description:
        "Ideal para usuários que precisam de recursos avançados e ferramentas para dar aula.",
      monthlyPrice: 30.0,
      annualPrice: 270.0,
      price: 0,
      services: [
        { name: "Conversão de arquivos ilimitada", available: true },
        { name: "Acesso exclusivo a livros Vibrance", available: true },
        { name: "Acesso antecipado a todos livros", available: true },
        { name: "Cupons de desconto", available: true },
        { name: "Meet and greet em eventos", available: false },
        { name: "Modo Leitor Avançado", available: false },
        { name: "Palestras exclusivas", available: false },
        {
          name: "Audiência para discutir melhorias e petições",
          available: false,
        },
      ],
    },
    {
      name: "Bookaholic",
      description:
        "Ideal para empresas que precisam de serviços personalizados e segurança para grandes equipes.",
      monthlyPrice: 100.0,
      annualPrice: 1020.0,
      price: 0,
      services: [
        { name: "Conversão de arquivos ilimitada", available: true },
        { name: "Acesso exclusivo a livros Vibrance", available: true },
        { name: "Acesso antecipado a todos livros", available: true },
        { name: "Cupons de desconto", available: true },
        { name: "Meet and greet em eventos", available: true },
        { name: "Modo Leitor Avançado", available: true },
        { name: "Palestras exclusivas", available: true },
        {
          name: "Audiência para discutir melhorias e petições",
          available: true,
        },
      ],
    },
  ];

  const selectedPlans = isAnnual
    ? plans.map((plan) => ({ ...plan, price: plan.annualPrice }))
    : plans.map((plan) => ({ ...plan, price: plan.monthlyPrice }));

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center items-center">
        <span className="mr-2">Plano Anual</span>
        <input
          type="checkbox"
          checked={isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
          className="form-checkbox h-5 w-5 text-product-purple-500"
        />
      </div>

      <div className="grid grid-cols-3 mt-4 gap-4 mbl:grid-cols-1 mbl:mx-6">
        {selectedPlans.map((plan, index) => (
          <div
            key={plan.name}
            className={`flex flex-col justify-start items-start gap-5 p-8 border border-gray-300 rounded-lg ${
              index === 1 ? "bg-product-purple-500 text-white" : ""
            }`}
          >
            <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>
            <p>{plan.description}</p>
            <span className="font-semibold text-4xl">{`R$${plan.price}/${
              isAnnual ? "Ano" : "Mês"
            }`}</span>
            <div className="w-full mt-4">
              <button
                className={`w-full p-3 font-semibold hover:opacity-80 ${
                  index === 1
                    ? "bg-white text-product-purple-500"
                    : "text-product-purple-500"
                } border border-product-purple-500 rounded`}
              >
                Comece agora!
              </button>
            </div>
            <ul className="mt-4">
              {plan.services.map((service, serviceIndex) => (
                <li
                  key={serviceIndex}
                  className={`flex items-center ${
                    !service.available ? "text-gray-500 font-thin" : "font-medium"
                  }`}
                >
                  {service.available ? (
                    <Check weight="bold" className="mr-2 text-green-500" />
                  ) : (
                    <X className="mr-2" />
                  )}
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanSelector;
