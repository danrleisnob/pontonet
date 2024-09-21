import style from './direito.module.css'

export default function Direitos(){
    return(
        <div className={style.direito}>
            <p>
                Direitos Reservados
                <a href="https://www.linkedin.com/in/danrlei-souza/">
                    ©️
                </a>
            </p>
            <p>
                Version 1.0.0
            </p>
        </div>
    )
}