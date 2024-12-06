// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importação corrigida para a versão 6
import Nav from "./components/nav/Nav"; 
import Footer from "./components/footer/footer";
import HomePage from "./pages/HomePage/HomePage"; 
import AboutPage from "./pages/AboutPage/AboutPage"; 
import PartnersPage from "./pages/PartnersPage/PartnersPage"; 
import CoursesPage from "./pages/CoursesPage/CoursesPage"; 


import "./index.css"; 

function App() {
  return (
    <Router>
      {/* Cabeçalho - Componente de Navegação */}
      <Nav />
      <div className="App">
        {/* Roteamento das páginas */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Página Inicial */}
          <Route path="/about" element={<AboutPage />} /> {/* Sobre */}
          <Route path="/partners" element={<PartnersPage />} /> {/* Parcerias */}
          <Route path="/courses" element={<CoursesPage />} /> {/* Parcerias */}
        </Routes>
      </div>
      {/* Rodapé */}
      <Footer />
    </Router>
  );
}

export default App;
