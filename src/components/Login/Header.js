import Logo from "../images/logo.jpeg";

function Header()
{
    return (
        <header>
            <nav className="navbar bg-black">
                <div className="container">
                    <a className="navbar-brand text-white" href="#">
                        <img src={Logo} width="75" />
                        Spotify
                    </a>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item m-3"><a className="text-white nav-link" href="#">S'inscrire</a></li>
                        <li className="nav-item m-3"><a className="text-white nav-link" href="#">Connexion</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;