import Logo from "../public/logo.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/login.png";
import brazilFlag from "../assets/brazilflag.png";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav className="bg-white bg-opacity-60 fixed flex items-center gap-44 px-16 py-4">
        <div>
          <img src={Logo} width={160} alt="Vibrance Logo" />
        </div>
        <div>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="font-medium transition-colors text-magenta-500 hover:text-magenta-600">Home</Link>
            </li>
            <li>
              <Link to="/2" className="font-medium transition-colors hover:text-magenta-600">Produts</Link>
            </li>
            <li>
              <Link to="/3" className="font-medium transition-colors hover:text-magenta-600">BookClub</Link>
            </li>
            <li>
              <Link to="/4" className="font-medium transition-colors hover:text-magenta-600">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <img src={brazilFlag} width={46} alt="Brazil Flag" />
        </div>
        <div className="flex gap-2">
          <img src={cartIcon} width={46} alt="Cart" />
          <img src={userIcon} width={50} alt="User Profile" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
