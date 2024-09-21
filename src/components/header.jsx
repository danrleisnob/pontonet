import style from './header.module.css'
import logo from '../assets/android-chrome-512x512.png'
import { FaPhoneAlt, FaWhatsapp  } from "react-icons/fa";

export default function Header(){
    return (
        <div className={style.headers}>
            <img src={logo} alt="Ponto Net" />

            <nav>
                <div className={style.ancoraPhone}>
                    <a href="tel:+5581999318813">
                        <FaPhoneAlt className={style.FaPhoneAlt} />
                        <span>Suporte: 81 99931-8813</span>
                    </a>
                </div>

                <div className={style.ancoraWhats}>
                    <a href="http://wa.me/5581995393615">
                        <FaWhatsapp className={style.FaWhatsapp} />
                        <span>Assinar Pelo Whatsapp</span>
                    </a>
                </div>
            </nav>

        </div>
    )
}