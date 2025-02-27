import React, { useState } from "react";
import "./AboutPage.css";
import imgGroup from "./images/quemsomos.png"


const AboutPage = () => {
  const [showFullText, setShowFullText] = useState(false);


  const toggleFullText = () => setShowFullText(!showFullText);

  return (
    <div className="AboutP-page">
      <div className="name_apresentation">
        <div className="logo">
          <span className="idctec">IDC<b>TEC</b></span>
        </div>
        <div className="subtitle">
          <span>Integração Digital e <br /> Capacitação Tecnológica</span>
        </div>
      </div>
      <div className="about-label">
        <div className="about-info">
          <h1 className="about-info-title">QUEM SOMOS</h1>
          <p className="about-info-text">
            Nós somos o projeto extensionista IDCTec, vulgo Inclusão Digital e Capacitação Tecnológica. Oriundos da UTFPR , campus Apucarana, nosso objetivo sempre foi proporcionar uma educação de qualidade, capacitando nossos alunos no caminho da Informática. 
            {showFullText && (
              <span>
               Com diversos alunos atuando na construção de materiais e na elaboração e ministração de aulas, nosso foco se mantém em facilitar o acesso ao conhecimento sobre os mais diversos usos dos computadores, com ênfase na usabilidade do dia-a-dia e também em alguns aspectos profissionalizantes para uma boa introdução ao mercado de trabalho.
              Atualmente, fazemos parceria com a ONG de Apucarana, intitulada EDHUCCA (Escola de Desenvolvimento Humano Casa do Caminho), promovendo um ensino planejado e com foco em atender à comunidade foco da instituição.
              </span>
            )}
          </p>
          <span onClick={toggleFullText} role="button" tabIndex="0" onKeyPress={(e) => { if (e.key === 'Enter') toggleFullText(); }}>
            {showFullText ? 'Mostrar Menos' : 'Continuar Lendo'}
          </span>
        </div>
        <div className="about-info-image">
          <img src={imgGroup} alt="Imagem nossa" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
