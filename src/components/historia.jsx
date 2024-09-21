import style from './historia.module.css'
import historiaphoto from '../assets/historiapontonet.png'

export default function Historia(){
    return(
        <div className={style.historia}>
            <div className={style.cardimage}>
                <img src={historiaphoto} alt="" />
            </div>
            <div className={style.texto}>
                <h1>Conheça nossa história</h1>
                <p>A Pontonet, há 12 anos no mercado, somos pioneiros na distribuição de fibra óptica em Olinda, nos bairros de Peixinhos e Jardim Brasil. Com mais de 1000 clientes satisfeitos, temos como compromisso oferecer internet de alta qualidade a um preço acessível para as famílias. Nossa missão é garantir uma conexão estável e eficiente, mantendo a satisfação de quem confia nos nossos serviços.</p>
                <h1>Feedback dos nossos clientes</h1>
                <p>Estou extremamente satisfeito com o serviço da Pontonet! Desde a instalação até o suporte técnico, a experiência foi impecável. A internet de fibra óptica é super rápida e estável, perfeita para trabalhar de casa e assistir a vídeos em alta qualidade sem interrupções. O atendimento ao cliente é sempre muito atencioso e rápido para resolver qualquer dúvida. Recomendo a Pontonet para quem busca uma internet de alta performance e um serviço de excelência!</p>
            </div>
        </div>
    )
}