import { Link } from "react-router-dom";

function Home() {
    return (
        <div>

            <h1>Bem-vindo a página Home</h1><br />
            <span>Nossa primeira aplicação em REACT</span><br /><br />

            <h2>Confira nossos produtos no link abaixo!</h2><br />

            <Link to="/loja"><h1>Loja</h1></Link>

        </div>
    );
}

export default Home;