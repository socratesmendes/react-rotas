import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <header>

            <h2>Fatec - Franca 2023</h2>

            <div className="menu">

                <Link to="/sobre">
                    <button>Sobre</button>
                </Link>

                <Link to="/informacoes/contato">
                    <button>Contato</button>
                </Link>

                <Link to="/">
                    <button>Home</button>
                </Link>

                <Link to="/loja">
                    <button>Loja</button>
                </Link>

            </div>

        </header>
    )
}

export default Header;