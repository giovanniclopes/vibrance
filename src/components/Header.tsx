import { useState } from "react";
import logo from "../assets/svg/logo-vibrance.svg";
import { List, UserCircle, X } from "phosphor-react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Produtos", href: "/products" },
  { name: "BookClub", href: "/bookclub" },
  { name: "Contato", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 150) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <nav
      className={
        fix
          ? "z-50 top-0 fixed w-full flex items-center justify-between flex-wrap px-16 bg-white/95 text-product-purple-500 transition-all mbl:px-5 mbl:p-4 mbl:bg-white"
          : "z-50 top-0 fixed w-full flex items-center justify-between flex-wrap p-6 px-16 bg-transparent text-product-purple-500 opacity-90 transition-all mbl:opacity-95 mbl:px-3 mbl:p-4"
      }
    >
      <div className="flex items-center flex-shrink-0 text-product-purple-500 mr-6 lg:mr-72">
        <NavLink to="/">
          <img
            src={logo}
            className="w-100 h-10 mr-2"
            alt="Logo"
            draggable="false"
          />
        </NavLink>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="hamburguer-btn"
          aria-label="Open or close hamburguer menu on mobile"
          aria-labelledby="labeldiv"
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          {isOpen ? (
            <X size={24} color="#3A1B3B" />
          ) : (
            <List size={24} color="#3A1B3B" />
          )}
        </button>
      </div>
      <div
        className={`p-6 w-full flex flex-grow lg:flex lg:items-center lg:w-auto mbl:bg-white mbl:flex-col mbl:gap-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex gap-3 text-base font-semibold lg:flex-grow mbl:flex-col mbl:gap-0 mbl:mt-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-product-purple-300 focus:text-pink-400 mbl:text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <a href="/login">
            <UserCircle size={42} color="#3a1b3b" />
          </a>
        </div>
      </div>
    </nav>
  );
}
