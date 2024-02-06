import { Link } from "react-router-dom";
import BookClubGirlIllustration from "../assets/svg/BookClubGirlIllustration";
import ExclusiveBooks from "../components/bookclub/ExclusiveBooks";
import Plans from "../components/bookclub/Plans";

export default function BookClub() {
  return (
    <main className="overflow-hidden">
      <section className="flex flex-row px-10 pt-28 bg-cover bg-bookClubFirstSectionImage bg-center mbl:flex mbl:flex-col mbl:gap-24 mbl:pt-28 mbl:px-0 mbl:pb-16">
        <div className="flex flex-col gap-10 items-start justify-center px-12 mbl:pr-5">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-5xl mbl:text-3xl">
              Com o{" "}
              <span className="font-extrabold text-product-purple-500">
                BookClub
              </span>{" "}
              descubra dicas, ideias e muito mais para educadores e famílias.
            </h1>
            <p className="text-lg pr-1">
              Livros com autoria <span className="font-medium">Vibrance</span>.
              Plataforma criada com histórias envolventes e personagens
              divertidos que sua família vai adorar!
            </p>
          </div>
          <div className="w-full flex pr-24 mbl:pr-8">
            <Link to="/login">
              <button className="px-24 py-4 bg-product-purple-500 font-medium text-lg text-white rounded-md transition-all hover:opacity-85 mbl:px-12 mbl:w-full">
                Começar hoje
              </button>
            </Link>
          </div>
        </div>
        <div className="w-fit flex items-center justify-center mbl:hidden">
          <BookClubGirlIllustration />
        </div>
      </section>

      <ExclusiveBooks />
      <Plans />
    </main>
  );
}
