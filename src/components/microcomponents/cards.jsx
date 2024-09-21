/* eslint-disable react/prop-types */
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineLiveTv } from "react-icons/md";
import { FaArrowUpWideShort } from 'react-icons/fa6';
import style from './cards.module.css';

// Receber as props corretamente como um objeto desestruturado
export default function Cards({ assine, velocidade, valor, valoremreal, mes, beneficios, iptv, fibra }) {
    return (
        <div className={style.card}>
            <div className={style.assinar}>
                <p>{assine}</p>
            </div>
            <div className={style.velocidade}>
                <h1>{velocidade}</h1>
            </div>

            <div className={style.valor}>
                <p>{valor}</p>
                <div className={style.valormes}>
                    <h1>{valoremreal}</h1>
                    <p>{mes}</p>
                </div>
            </div>

            <div className={style.beneficios}>
                <p>{beneficios}</p>
                <hr />
                <div className={style.icons}>
                    <p><MdOutlineLiveTv className={style.MdOutlineLiveTv} /> {iptv}</p>
                </div>
                <hr />
                <div className={style.icons}>
                    <p><FaArrowUpWideShort className={style.MdOutlineLiveTv} /> {fibra}</p>
                </div>
                <hr />
                <div className={style.ancoraWhats}>
                    <a href="http://wa.me/5581995393615"><FaWhatsapp className={style.FaWhatsapp} /> Assinar Agora!</a>
                </div>
            </div>
        </div>
    )
}
