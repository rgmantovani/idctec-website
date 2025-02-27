import React, { useState, useEffect } from "react";
import "./CoursesPage.css";
import doc1 from "./capaDoc.png";

const course = {
  id: 1,
  title: "Curso de Informática Básica",
  description: "Informática básica, Google Docs, Planilhas e Apresentações",
  author: "IDCTEC",
  views: 5,
  date: "há 21 horas",
  image: doc1,
  pdf: "Material1.pdf",
};

const CoursesPage = () => {
  const [views, setViews] = useState(course.views);

  useEffect(() => {
    const savedViews = JSON.parse(localStorage.getItem("courseViews") || "{}");
    if (savedViews[course.id]) {
      setViews(savedViews[course.id]);
    }
  }, []);

  const handleView = () => {
    const updatedViews = views + 1;
    setViews(updatedViews);
    localStorage.setItem("courseViews", JSON.stringify({ [course.id]: updatedViews }));
  };

  return (
    <div className="courses-page">
      <div className="name_apresentation">
        <div className="logo">
          <span className="idctec">IDC<b>TEC</b></span>
        </div>
        <div className="subtitle">
          <span>Integração Digital e <br /> Capacitação Tecnológica</span>
        </div>
      </div>
      <div className="courses-container">
        <div className="course-card">
          <div className="course-image">
          <img src={course.image} alt={course.title} />
          </div>
          <div className="course-info">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <p className="course-author">{course.author}</p>
            <div className="course-stats">
              <span>{views} visualizações</span>
              <span>{course.date}</span>
            </div>
            <div className="course-links">
              <a href={course.pdf} target="_blank" rel="noopener noreferrer" onClick={handleView} className="view-pdf">
                Abrir PDF
              </a>
              <a href={course.pdf} download="Material1.pdf" className="download-pdf">
                Baixar PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
