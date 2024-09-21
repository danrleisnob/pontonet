import { useState } from 'react';
import style from './questionario.module.css'
import { FaArrowAltCircleDown } from "react-icons/fa";

const faqData = [
    {
        question: 'O que é a Pontonet?',
        answer: 'A Pontonet é uma empresa pioneira em Olinda na distribuição de internet de fibra óptica, com mais de 12 anos de experiência. Nossa missão é fornecer internet de alta velocidade com estabilidade e um atendimento personalizado, garantindo a satisfação dos nossos clientes.',
      },
      {
        question: 'Qual a cobertura da Pontonet?',
        answer: 'Atendemos as regiões de Olinda e proximidades, com forte atuação nos bairros de Peixinhos e Jardim Brasil. Estamos constantemente expandindo nossa cobertura para levar a melhor conexão de fibra óptica a mais lares e empresas.',
      },
      {
        question: 'Como posso falar com o técnico?',
        answer: 'Para falar diretamente com um técnico especializado, você pode nos contatar pelo telefone ou WhatsApp. Nossa equipe de suporte técnico está sempre pronta para te ajudar com qualquer necessidade, seja remotamente ou agendando uma visita técnica.',
      },
      {
        question: 'Minha internet está lenta, o que devo fazer?',
        answer: 'Caso esteja enfrentando lentidão na sua conexão, tente reiniciar o modem. Se o problema persistir, entre em contato com nosso suporte técnico pelo WhatsApp ou telefone, e realizaremos um diagnóstico completo para resolver o problema rapidamente.',
      },
      {
        question: 'Quais são os planos disponíveis?',
        answer: 'A Pontonet oferece diversos planos de internet que variam de acordo com sua necessidade, seja para uso residencial ou empresarial. Temos planos com velocidades que vão de 100Mbps até 500Mbps, todos com preços acessíveis. Entre em contato e encontre o plano ideal para você.',
      },
      {
        question: 'Qual é o endereço da empresa?',
        answer: 'Nossa sede está localizada em Olinda. Para visitar ou falar conosco, entre em contato pelo nosso WhatsApp ou telefone. Estamos sempre à disposição para atendê-lo da melhor forma possível.',
      },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={style.faqcontainer}>
        <div className={style.titulo}>
            <h1>Dúvidas frequentes!</h1>
        </div>
      {faqData.map((item, index) => (
        <div key={index} className={style.faqitem}>
          <div className={style.faqquestion} onClick={() => toggleQuestion(index)}>
            {item.question} <FaArrowAltCircleDown />
          </div>
          {activeIndex === index && (
            <div className={style.faqanswer}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
