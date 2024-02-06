import PlanSelector from "./PlanSelector";

export default function Plans() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="font-bold text-6xl text-product-purple-600">Clube do Livro</h2>
        <p>Escolha o melhor plano para você.</p>
      </div>
      <PlanSelector />
    </section>
  )
}