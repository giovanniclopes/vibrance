import { Link } from "react-router-dom";
import ErrorImage from "../components/ErrorImage";

export function NotFound() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-10 gap-6">
        <ErrorImage />
        <h1 className="text-5xl font-bold select-none">Oops!</h1>
        <h1 className="text-3xl font-medium select-none">
          Parece que esta página não existe.
        </h1>
        <p className="select-none text-xl">
          Você pode seguir com os links abaixo:
        </p>
        <div className="flex flex-row gap-1">
          <Link
            to="/"
            className="text-magenta-500 underline font-medium text-lg transition-all hover:text-magenta-700"
          >
            Home |
          </Link>
          <Link
            to="/2"
            className="text-magenta-500 underline font-medium text-lg transition-all hover:text-magenta-700"
          >
            Products |
          </Link>
          <Link
            to="/3"
            className="text-magenta-500 underline font-medium text-lg transition-all hover:text-magenta-700"
          >
            BookClub
          </Link>
        </div>
      </div>
    </>
  );
}
