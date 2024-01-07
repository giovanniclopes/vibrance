import BookClubGirlIllustration from "../assets/svg/BookClubGirlIllustration";
import ExclusiveBooks from "../components/bookclub/ExclusiveBooks";

export default function BookClub() {
  return (
    <main className="overflow-hidden">
      <section className="flex flex-row px-10 pt-28 bg-cover bg-bookClubFirstSectionImage bg-center mbl:flex mbl:flex-col mbl:gap-24 mbl:pt-24">
        <div className="flex flex-col gap-10 items-start justify-center px-12 mbl:pr-5">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-5xl text-product-purple-500 mbl:text-4xl">
              Descubra dicas, ideias e muito mais para educadores e famílias.
            </h1>
            <p className="text-lg pr-1">
              Livros com autoria <span className="font-medium">Vibrance</span>.
              Plataforma criada com histórias envolventes e personagens
              divertidos que sua família vai adorar!
            </p>
          </div>
          <div className="w-full flex pr-24 mbl:pr-8">
            <button className="px-24 py-4 bg-product-purple-500 font-medium text-lg text-white rounded-md transition-all hover:opacity-85 mbl:px-2">
              Começar hoje
            </button>
          </div>
        </div>
        <div className="w-fit flex items-center justify-center mbl:hidden">
          <BookClubGirlIllustration />
        </div>
      </section>

      <ExclusiveBooks />
    </main>
  );
}
