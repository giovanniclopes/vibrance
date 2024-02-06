import { useState } from "react";

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  price: number;
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
    },
    {
      name: "Bookstan",
      description:
        "Ideal para usuários que precisam de recursos avançados e ferramentas para dar aula.",
      monthlyPrice: 30.0,
      annualPrice: 270.0,
      price: 0,
    },
    {
      name: "Bookaholic",
      description:
        "Ideal para empresas que precisam de serviços personalizados e segurança para grandes equipes.",
      monthlyPrice: 100.0,
      annualPrice: 1020.0,
      price: 0,
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
          className="form-checkbox h-5 w-5 text-indigo-600"
        />
      </div>

      <div className="grid grid-cols-3 mt-4 gap-4">
        {selectedPlans.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col justify-start items-start gap-5 border p-4"
          >
            <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-500">{plan.description}</p>
            <span className="font-semibold text-4xl">{`R$${plan.price}/${
              isAnnual ? "Ano" : "Mês"
            }`}</span>
            <button className="w-full p-3 font-semibold text-product-purple-500 border border-product-purple-500 rounded">
              Comece agora!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanSelector;
