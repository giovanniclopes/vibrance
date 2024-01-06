export default function BookClub() {
  return (
    <section className="py-24 bg-cover bg-bgBookclubHome">
      <div className="flex flex-col items-center justify-center gap-12 px-36 mbl:px-12">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h3 className="text-white text-4xl font-bold mbl:text-3xl">
            Experimente o BookClub Professional{" "}
            <span className="text-[#d9a2da] font-extrabold">GRATUITAMENTE</span>{" "}
            com todos os seus recursos durante 30 dias.
          </h3>
          <p className="font-light text-white">
            Não é necessário informar o cartão ou qualquer informação sensível
            ao resgatar os 30 dias grátis!
          </p>
        </div>
        <div>
          <button className="px-12 py-5 bg-[#5A2B5B] font-medium text-lg text-white rounded-md transition-all hover:opacity-85">
            Experimente BookClub gratuitamente
          </button>
        </div>
      </div>
    </section>
  );
}
