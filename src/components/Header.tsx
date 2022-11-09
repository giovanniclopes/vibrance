import Logo from '../public/logo.png';
import cartIcon from '../assets/cart.png';
import userIcon from '../assets/login.png';
import brazilFlag from '../assets/brazilflag.png';

export function Header() {
    return (
        <header>
            <nav>
                <div>
                    <img src={Logo} width={160} alt="Vibrance Logo" />
                </div>
                <div>
                    <ul className='flex bg-green-500'>
                        <li>Home</li>
                        <li>Produtos</li>
                        <li>BookClub</li>
                        <li>Ebooks</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div>
                    <img src={brazilFlag} width={36} alt="Brazil Flag" />
                </div>
                <div>
                    <img src={cartIcon} width={46} alt="Cart" />
                    <img src={userIcon} width={42} alt="User Profile" />
                </div>
            </nav>
        </header>
    )
}

export default Header;