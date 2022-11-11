import Logo from "../public/logo.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/login.png";
import brazilFlag from "../assets/brazilflag.png";

export function Header() {
  return (
    <header>
      <nav className="fixed flex items-center gap-44 px-16 py-4">
        <div>
          <img src={Logo} width={160} alt="Vibrance Logo" />
        </div>
        <div>
          <ul className="flex gap-6">
            <li>
              <a className="font-medium transition-colors text-[#98499A] hover:text-magenta-600 ">Home</a>
            </li>
            <li>
              <a className="font-medium transition-colors hover:text-magenta-600 ">Produtos</a>
            </li>
            <li>
              <a className="font-medium transition-colors hover:text-magenta-600 ">BookClub</a>
            </li>
            <li>
              <a className="font-medium transition-colors hover:text-magenta-600 ">Ebooks</a>
            </li>
            <li>
              <a className="font-medium transition-colors hover:text-magenta-600 ">Contato</a>
            </li>
          </ul>
        </div>
        <div>
          <img src={brazilFlag} width={36} alt="Brazil Flag" />
        </div>
        <div className="flex gap-2">
          <img src={cartIcon} width={46} alt="Cart" />
          <img src={userIcon} width={42} alt="User Profile" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
