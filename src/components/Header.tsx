import { useState } from "react";
import logo from "../assets/svg/logo-vibrance.svg";
import { List, X, UserCircle } from "phosphor-react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Produtos", href: "/products" },
  { name: "BookClub", href: "/bookclub" },
  { name: "Contato", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 px-16 bg-white text-product-purple-500 mbl:px-5">
      <div className="flex items-center flex-shrink-0 text-product-purple-500 mr-6 lg:mr-72">
        <NavLink to="/">
          <img src={logo} className="h-12 mr-2" alt="Logo" draggable="false" />
        </NavLink>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="hamburguer-btn"
          aria-label="Open or close hamburguer menu on mobile"
          aria-labelledby="labeldiv"
          className="flex items-center px-3 py-2 rounded text-product-gray-500 hover:text-product-gray-400"
        >
          {isOpen ? (
            <X size={24} color="#3A1B3B" />
          ) : (
            <List size={24} color="#3A1B3B" />
          )}
        </button>
      </div>
      <div
        className={`w-full flex flex-grow lg:flex lg:items-center lg:w-auto mbl:flex-col mbl:gap-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex gap-3 text-base font-semibold lg:flex-grow mbl:flex-col mbl:gap-0 mbl:mt-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-product-purple-300 focus:text-product-purple-400"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <NavLink to="/contact">
            <UserCircle size={42} color="#3a1b3b" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
