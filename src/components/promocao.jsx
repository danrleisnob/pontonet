import style from './promocao.module.css'
import logopromo from '../assets/promocaonova (1).png'

export default function Promocao (){
    return (
        <div className={style.promocao}>
            <img src={logopromo} alt="" />
        </div>
    )
}