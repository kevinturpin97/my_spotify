import Logo from '../images/logo.jpeg';
import { Link } from "react-router-dom";

function HeaderLeft()
{
    return (
        <header className="col-md-2">
            <nav className="navbar bg-black">
                <a href='#' className='navbar-brand text-white'>
                    <img src={Logo} width="75" />
                    Spotify
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className='nav-link' to="/home">
                            <i className="fa fa-home"></i>
                            Accueil
                        </Link>
                    </li>
                    <li id="find" className="nav-item">
                        <Link className='nav-link' to="/search">
                            <i className="fa fa-search"></i>
                            Rechercher
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="fa fa-compact-disc"></i>
                            Bibliothèque
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default HeaderLeft;