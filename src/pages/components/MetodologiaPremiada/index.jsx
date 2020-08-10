import React from 'react';

import metodologiaPremiada from  '../../../assets/metodologia-premiada.jpg';
import captacao from  '../../../assets/captacao.jpg';
import ambiente from  '../../../assets/ambiente.jpg';

export default function MetodologiaPremiada() {
  const Component = ({ img, firstText, secondText }) => (
    <div className="container">
      <img src={img} alt="image" title="image" />
      <p>{firstText}</p>
      <p>{secondText}</p>
    </div>
  )

  return (
    <div className="section">
      <Component
        img={metodologiaPremiada}
        firstText="METODOLOGIA PREMIADA PARA MÁXIMO ENGAJAMENTO DOS ALUNOS"
        secondText="Dinâmicas de aprendizagem atuais e alinhadas ao que o aluno procura, garantindo excelente retenção"
      />
      <Component
        img={captacao}
        firstText="CAPTAÇÃO DE ALUNOS 100% OTIMIZADA E MOBILE"
        secondText="Especialidade em marketing digital permite crescimento acelerado e escalável"
      />
      <Component
        img={ambiente}
        firstText="AMBIENTE VIRTUAL DE ÚLTIMA GERAÇÃO"
        secondText="Plataforma digital moderna e de fácil usabilidade"
      />
    </div>
  )
}
