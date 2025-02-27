import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";
import imgGroup from "./images/quemsomos.png"

const AboutP = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Curso de Informática Básica",
    author: "Lucas Prado",
    views: 5,
    date: "há 21 horas",
    image: "",
  },
  // {
  //   id: 2,
  //   title: "Projeto 2",
  //   description: "Descrição breve do Projeto 2",
  //   author: "Lucas Prado",
  //   views: 0,
  //   date: "há 21 horas",
  //   image: "",
  // },
];

const AboutPage = () => {
  const [aboutViews, setAboutViews] = useState(AboutP);
  const [showFullText, setShowFullText] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedViews = JSON.parse(localStorage.getItem('aboutViews') || '[]');
    if (savedViews.length > 0) {
      setAboutViews(savedViews);
    }
  }, []);

  const handleClickAbout = (id) => {
    setAboutViews((prevAboutP) => {
      const updatedAboutP = prevAboutP.map((about) =>
        about.id === id ? { ...about, views: about.views + 1 } : about
      );
      localStorage.setItem('aboutViews', JSON.stringify(updatedAboutP));
      return updatedAboutP;
    });
    navigate(`/AboutP/${id}`);
  };

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
      <div className="AboutP-container">
        {aboutViews.map((about) => (
          <div key={about.id} className="about-card" onClick={() => handleClickAbout(about.id)}>
            <div className="about-image">
              {about.image ? (
                <img src={about.image} alt={about.title} />
              ) : (
                <div className="placeholder-icon"><span>📘</span></div>
              )}
            </div>
            <div className="about-info">
              <h2 className="about-title">{about.title}</h2>
              <p className="about-description">{about.description}</p>
              <p className="about-author">{about.author}</p>
              <div className="about-stats">
                <span>{about.views} visualizações</span>
                <span>{about.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
