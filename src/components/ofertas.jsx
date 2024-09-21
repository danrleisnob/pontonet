import { FaArrowUpWideShort, FaWhatsapp } from "react-icons/fa6";
import Cards from "./microcomponents/cards";
import style from './ofertas.module.css';

export default function Ofertas() {
    return (
        <div className={style.ofertas}>

            <div className={style.planosofertas}>
                <h1>
                    Planos e Ofertas
                </h1>
                <p><hr /></p>
            </div>

                <div className={style.cardpromo}>

                    <div className={style.container}>
                            <div>
                            <div className={style.promoferta}>
                            <p>Oferta Custo-Benefício</p>
                            </div>
                            <div className={style.velocidade}>
                                <h1>
                                    100 MEGA
                                </h1>
                            </div>
                            </div>

                            <div>
                            <div className={style.valor}>
                                <p>Por Apenas</p>
                                <div className={style.valormes}>
                                <h1>R$65,00</h1>
                                <p>/mês</p>
                                </div>
                            </div>
                            <div className={style.beneficios}>
                                <p>Benefícios Inclusos</p>
                                <div className={style.icons}>
                                    <p><FaArrowUpWideShort className={style.MdOutlineLiveTv} /> 100% Fibra óptica</p>
                                </div>
                                <hr />
                            </div>
                            </div>
                    </div>
                    <div className={style.ancoraWhats}>
                        <a href="/"><FaWhatsapp className={style.FaWhatsapp} /> Assinar Agora!</a>
                    </div>
                </div>

            <div className={style.oferta}>
                <Cards 
                    assine="Assine 200 leve IPTV" 
                    velocidade="200 MEGA" 
                    valor="Por apenas" 
                    valoremreal="R$ 80,00" 
                    mes="/mês" 
                    beneficios="Benefícios Inclusos" 
                    iptv="IPTV" 
                    fibra="100% Fibra óptica" 
                />

                <Cards 
                    assine="Assine 300 leve IPTV" 
                    velocidade="300 MEGA" 
                    valor="Por apenas" 
                    valoremreal="R$ 100,00" 
                    mes="/mês" 
                    beneficios="Benefícios Premium" 
                    iptv="IPTV Plus" 
                    fibra="100% Fibra óptica" 
                />

                <Cards 
                    assine="Assine 400 leve IPTV" 
                    velocidade="400 MEGA" 
                    valor="Por apenas" 
                    valoremreal="R$ 120,00" 
                    mes="/mês" 
                    beneficios="Benefícios Ultra" 
                    iptv="IPTV Premium" 
                    fibra="100% Fibra óptica" 
                />

                <Cards 
                    assine="Assine 400 leve IPTV" 
                    velocidade="500 MEGA" 
                    valor="Por apenas" 
                    valoremreal="R$ 150,00" 
                    mes="/mês" 
                    beneficios="Benefícios Ultra" 
                    iptv="IPTV Premium" 
                    fibra="100% Fibra óptica" 
                />
            </div>
        </div>
    );
}
