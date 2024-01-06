import { ArrowRight } from "phosphor-react";

export default function BooCon() {
  return (
    <section className="bg-product-purple-500 bg-cover bg-booConBackground py-16">
      <div className="flex flex-col items-center justify-center gap-12">
        <h3 className="text-5xl font-semibold text-white text-center">
          Online BooCon <br /> 2023
        </h3>
        <p className="text-white text-lg text-center">
          Venha participar dessa incrível experiência <br /> literária no dia 15
          de Outubro!
        </p>
        <div className="flex group">
          <button className="flex items-center justify-center px-24 py-3 border-2 outline-none text-lg font-medium text-white bg-transparent border-white rounded-es-md rounded-ss-md transition-all group-hover:opacity-85 group-hover:bg-white group-hover:text-product-purple-500">
            Participar
          </button>
          <button className="flex items-center justify-center px-10 bg-white rounded-se-md rounded-ee-md cursor-pointer transition-all group-hover:opacity-85 group-hover:bg-transparent border-2 group-hover:border-white">
            <ArrowRight className="group-hover:text-white" size={24} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
