import { useParams } from "react-router-dom";

function Produtos() {
    
    const { id } = useParams();
    
    if(id == "playstation"){
        return (
            <div>
    
                <h1>Console PlayStation 5</h1><br />
                <h2>R$ 4.445,00</h2><br />
                <h3>À vista no PIX e boleto (1% off)</h3><br />
    
                <img src='https://i.ytimg.com/vi_webp/_NX8F9FBvg0/maxresdefault.webp' alt="Console PlayStation 5" width={800} />
    
            </div>
        )
    }

    if(id == "xbox"){
        return(

            <div>

                <h1>Console XBOX Series X</h1><br />
                <h2>R$ 4.799,99</h2><br />
                <h3>À vista no PIX ou em até 10x de R$ 479,99 sem juros no cartão</h3>

                <img src="https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png" alt="Console XBOX Series X" width={800} />

            </div>

        )
    }

    if(id == "atari"){
        return(

            <div>

                <h1>Console Atari 2600</h1><br />
                <h2>R$ 2.999,90</h2><br />
                <h3>À vista no PIX ou boleto (5% off)</h3>

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Atari-2600-Wood-4Sw-Set.png/1920px-Atari-2600-Wood-4Sw-Set.png" alt="Console Atari 2600" width={800} />

            </div>
        )

    }

    if(id == "nintendo"){

        return(

            <div>

                <h1>Console Super Nintendo</h1><br />
                <h2>R$ 9.999,90</h2><br />
                <h3>Em até 10x de 999,99 sem juros no cartão</h3>

                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/SNES-Mod1-Console-Set.jpg" alt="Console Super Nintendo" width={800} />

            </div>
        )

    }

}

export default Produtos;