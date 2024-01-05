import { ArrowRight } from "phosphor-react";

export default function BooCon() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchButtonClick = () => {
    setSearchValue("");
  };

  return (
    <section>
      <div>
        <h3>
          Online BooCon <br /> 2023
        </h3>
        <p>
          Venha participar dessa incrível experiência literária no dia 15 de
          Outubro!
        </p>
        <div className="flex mr-10">
          <input
            className="p-2 pr-12 py-3 border-2 outline-none font-medium border-product-purple-500 rounded-es-md rounded-ss-md"
            type="search"
            name="book-input-search"
            id="book-input-search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Pesquise por um livro..."
          />
          <div
            id="search-btn"
            className="flex items-center justify-center px-8 bg-product-purple-500 rounded-se-md rounded-ee-md cursor-pointer transition-all active:bg-product-purple-400"
            onClick={handleSearchButtonClick}
          >
            <ArrowRight size={24} color="#ffffff" />
          </div>
        </div>
      </div>
    </section>
  );
}
