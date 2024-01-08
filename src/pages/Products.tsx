import MaintenancePage from "../assets/svg/MaintenancePage";

export default function Products() {
  return (
    <main className="mt-44 mbl:mt-32">
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="font-bold text-product-purple-500 text-5xl mbl:text-2xl">Página em manutenção</span>
        <div className="w-1/2 mbl:w-full">
          <MaintenancePage />
        </div>
      </div>
    </main>
  )
}