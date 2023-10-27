import { Link } from "react-router-dom";
import './style.css';

function Contato() {
    return(
        <div>

            <h1>Essa é nossa página de contato</h1>
            <span>Para entrar em contato, envie um e-mail para: socrates.mendes@outlook.com</span>
            
            <br /><br />

            <div className="geral">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.796888114765!2d-47.40317568547669!3d-20.514550962048602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a650b93c4b5f%3A0xbe0e42f3aa42525c!2sFatec+Franca+-+Faculdade+de+Tecnologia+Dr.+Thomaz+Novelino!5e0!3m2!1spt-BR!2sus!4v1488319213192" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>

                <div className="infos">

                    <h2>Faculdade de Tecnologia de Franca • Fatec Franca</h2><br />
                    <h3>CNPJ/MF: 62.823.257/0109-10</h3>
                    
                    <br /><br />

                    <div>

                        Rua Irênio Grecco nº 4580<br />
                        Vila Imperador<br />
                        Franca/SP<br />
                        14405-191<br/ >
                    
                        <p>Telefone: (16) 3702-3204<br />
                        Fax: (16) 3702-2854</p>
                    
                        <div>
                            <p>E-mail: <a href="mailto:secretaria@fatecfranca.edu.br">secretaria@fatecfranca.edu.br</a><br />
                            <span><br />Sempre verifique a pasta de Spam/Lixo eletrônico ao buscar respostas de e-mails da Fatec Franca</span></p><br />

                            <h3>Linhas de ônibus urbano</h3><br />

                            <ul>
                                
                                <li><a href="https://www.google.com/maps/d/embed?mid=1y3BAGEeg-6s614VNHtMBvgl_v8c&amp;ll=-20.52449736463766%2C-47.39961415529251&amp;z=14" target="_blank">J08 (Vl. Imperador)</a> – ponto na R. Irênio Grecco</li>
                                <li><a href="https://www.google.com/maps/d/embed?mid=10nQcqVUeQMmhW6a2ipH8BQO0scg&amp;ll=-20.523652091552172%2C-47.39405795931816&amp;z=14" target="_blank">C01 (Circular 01)</a>, <a href="https://www.google.com/maps/d/embed?mid=1YUdAFhs5C6kaX22R9sDZikIFo5c&amp;ll=-20.53184840667347%2C-47.39531859722774&amp;z=13" target="_blank">C02 (Circular 02)</a> e <a href="https://www.google.com/maps/d/embed?mid=1aeQB7ErUO_9FBZwD3wOYpCgC1s4&amp;ll=-20.510113002464585%2C-47.40521861347656&amp;z=15" target="_blank">LDN (Linha Direta Norte)</a> – ponto na Av. Orlando Dompieri</li>
                                <li><a href="https://www.google.com/maps/d/u/1/embed?mid=1BCX3U4LHgDo37wvhApSk3OKk64Q&amp;ll=-20.525095207270365%2C-47.397758066654205&amp;z=14" target="_blank">J09 (Vl. Imperador via Jd. Planalto)</a> – ponto na R. Realindo Jacinto Mendonça</li>
                            
                            </ul>

                        </div>

                    </div>

                </div>

            </div>

            

        </div>
    );
}

export default Contato;