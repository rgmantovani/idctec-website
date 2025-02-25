import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";
import imgGruoup from "./images/grupo.png"

const AboutP = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição breve dos módulos",
    author: "Lucas Prado",
    views: 5,
    date: "há 21 horas",
    image: "",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição breve do Projeto 2",
    author: "Lucas Prado",
    views: 0,
    date: "há 21 horas",
    image: "",
  },
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium itaque, 
            similique, distinctio, quo natus dignissimos molestiae corrupti nostrum sed vel non...
            {showFullText && (
              <span>
                Facilis provident incidunt, quis laboriosam temporibus rerum voluptatum dicta! Lorem ipsum dolor sit amet consectetur...
              </span>
            )}
          </p>
          <span onClick={toggleFullText} role="button" tabIndex="0" onKeyPress={(e) => { if (e.key === 'Enter') toggleFullText(); }}>
            {showFullText ? 'Mostrar Menos' : 'Continuar Lendo'}
          </span>
        </div>
        <div className="about-info-image">
          <img src={imgGruoup} alt="Imagem nossa" />
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
