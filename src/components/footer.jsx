import style from './footer.module.css'

export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>

            <div className={style.map}>
                    <div className={style.classmap}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.45606420171373!2d-34.87934021842306!3d-8.009290965620893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab193071114d93%3A0x94f6b0c62cf5034b!2sPonto%20Net!5e0!3m2!1spt-BR!2sbr!4v1726870014279!5m2!1spt-BR!2sbr" style={{ border: 0 }}allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    </div>
                        <div className={style.localizacao}>
                        <h2>Localização</h2>
                        <p>
                        R. São Sebastião, 399 - Peixinhos, Olinda - PE, 53220-590
                        </p>
                        <h3>
                            Atendemos nas regiões:
                        </h3>
                        <p>Peixinhos, Jardim Brasil, Aguazinha, Jardim Brasil, Janga, Casa Caiada e Jaqueira</p>
                    </div>
                </div>

                <div className={style.informacoes}>
                    <h3>Precisa de suporte técnico?</h3>
                    <p>Ligue: 81 99931-8813</p>
                    <h3>Deseja aderir um  novo Plano?</h3>
                    <p>Ligue: 81 99539-3615</p>
                    <h3>Siga nosso instagram</h3>
                    <p><a href="https://www.instagram.com/pontonetpe/">@pontonetpe</a></p>
                </div>
            </div>

        </div>
    )
}
