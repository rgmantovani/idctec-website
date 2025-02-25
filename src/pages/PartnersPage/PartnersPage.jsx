import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PartnersPage.css";

const partners = [
  {
    id: 1,
    title: "Parceiro 1",
    description: "Descrição do parceiro",
    author: "Lucas Prado",
    views: 5,
    date: "há 21 horas",
    image: "",
  },
  {
    id: 2,
    title: "Parceiro 2",
    description: "Descrição breve do parceiro",
    author: "Lucas Prado",
    views: 0,
    date: "há 21 horas",
    image: "",
  },
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
