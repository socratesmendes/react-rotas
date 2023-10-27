import { Link } from "react-router-dom";

function Loja() {
    return(

        <div>

            <h1>Aqui você encontra todos os nossos produtos!</h1>

            <br />

                <a href="http://localhost:3000/produtos/playstation"><h3>PlayStation 5</h3></a>
                <br />

                <a href="http://localhost:3000/produtos/xbox"><h3>XBOX Series X</h3></a>
                <br />

                <a href="http://localhost:3000/produtos/atari"><h3>Atari 2600</h3></a>
                <br />

                <a href="http://localhost:3000/produtos/nintendo"><h3>Super Nintendo</h3></a>
                <br />

        </div>

    )
}

export default Loja;