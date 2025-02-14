import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Nav from "./components/nav/Nav"; 
import Footer from "./components/footer/footer";
import HomePage from "./pages/HomePage/HomePage"; 
import AboutPage from "./pages/AboutPage/AboutPage"; 
import PartnersPage from "./pages/PartnersPage/PartnersPage"; 
import CoursesPage from "./pages/CoursesPage/CoursesPage"; 

import "./index.css"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // UseEffect para aplicar o tema escuro ao body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      {/* Cabeçalho - Componente de Navegação */}
      <Nav toggleTheme={toggleTheme} darkMode={darkMode} />
      <div className="App">
        {/* Roteamento das páginas */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Página Inicial */}
          <Route path="/about" element={<AboutPage />} /> {/* Sobre */}
          <Route path="/partners" element={<PartnersPage />} /> {/* Parcerias */}
          <Route path="/courses" element={<CoursesPage />} /> {/* Cursos */}
        </Routes>
      </div>
      {/* Rodapé */}
      <Footer />  
    </Router>
  );
}

export default App;
