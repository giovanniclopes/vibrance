import PlanSelector from "./PlanSelector";
import WavesUp from "../../assets/svg/wavesUp.svg";
import WavesDown from "../../assets/svg/wavesDOwn.svg";

export default function Plans() {
  return (
    <section>
      <img className="mb-20" src={WavesUp} alt="" />
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="mb-12 font-bold text-6xl text-product-purple-600">
          Clube do Livro
        </h2>
        <p>Escolha o melhor plano para você.</p>
      </div>
      <PlanSelector />
      <img className="mt-20" src={WavesDown} alt="" />
    </section>
  );
}
