import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PartnersPage.css";
import doc1 from "../HomePage/images/EDHUCCA.png";

const partners = [
  {
    id: 1,
    title: "EDHUCCA",
    description: "A Escola de Desenvolvimento Humano Casa do Caminho (EDHUCCA) é uma instituição sem fins lucrativos localizada em Apucarana, Paraná. Fundada em 24 de junho de 2001, a EDHUCCA atua na área de assistência e serviços sociais, oferecendo acompanhamento psicossocial e oficinas de capacitação, como o programa Jovem Aprendiz. Seu objetivo principal é fortalecer vínculos e promover o desenvolvimento humano de crianças e adolescentes em situação de vulnerabilidade social.",
    author: "IDCTEC",
    views: 5,
    date: "há 21 horas",
    image: doc1,
  },
  // {
  //   id: 2,
  //   title: "Parceiro 2",
  //   description: "Descrição breve do parceiro",
  //   author: "Lucas Prado",
  //   views: 0,
  //   date: "há 21 horas",
  //   image: "",
  // },
];

const PartnersPage = () => {
  const [partnerViews, setPartnersViews] = useState(partners);
  const navigate = useNavigate();

  useEffect(() => {
    const savedViews = JSON.parse(localStorage.getItem('partnerViews') || '[]');
    if (savedViews.length > 0) {
      setPartnersViews(savedViews);
    }
  }, []);

  const handleClickpartner = (id) => {
    setPartnersViews((prevpartners) => {
      const updatedpartners = prevpartners.map((partner) =>
        partner.id === id
          ? { ...partner, views: partner.views + 1 }
          : partner
      );
      localStorage.setItem('partnerViews', JSON.stringify(updatedpartners));
      return updatedpartners;
    });

    navigate(`/partners/${id}`);
  };


  return (
    <div className="partners-page">
      <div className="name_apresentation">
        <div className="logo">
          <span className="idctec">IDC<b>TEC</b></span>
        </div>
        <div className="subtitle">
          <span>Integração Digital e <br/> Capacitação Tecnológica</span>
        </div>
      </div>
      <div className="partners-container">
        {partnerViews.map((partner) => (
          <div
            key={partner.id}
            className="partner-card"
            onClick={() => handleClickpartner(partner.id)}
          >
            <div className="partner-image">
              {partner.image ? (
                <img src={partner.image} alt={partner.title} />
              ) : (
                <div className="placeholder-icon">
                  <span>📘</span>
                </div>
              )}
            </div>

            <div className="partner-info">
              <h2 className="partner-title">{partner.title}</h2>
              <p className="partner-description">{partner.description}</p>
              <p className="partner-author">{partner.author}</p>
              <div className="partner-stats">
                <span>{partner.views} visualizações</span>
                <span>{partner.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
