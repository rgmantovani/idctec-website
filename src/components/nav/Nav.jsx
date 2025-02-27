import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import sunIcon from '../assets/sun-icon.png';
import moonIcon from '../assets/moon-icon.png';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // Controle do menu hambúrguer
  const [isDarkMode, setIsDarkMode] = useState(false); // Controle do tema

  const toggleMenu = () => setIsOpen(!isOpen);

  // Alternar o tema
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Atualizar a classe do body conforme o estado de dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <header className="nav-container">
      <nav className="nav-content">
        {/* Logo */}
        <div className="nav-logo">IDCTEC</div>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Página Inicial</Link>
          </li>
          <li>
            <Link to="/courses" onClick={() => setIsOpen(false)}>Cursos</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>Quem Somos</Link>
          </li>
          <li>
            <Link to="/partners" onClick={() => setIsOpen(false)}>Parcerias</Link>
          </li>
        </ul>
        
        {/* Botão de tema */}
        <div className="theme-toggle" onClick={toggleTheme}>
          <div className={`theme-slider ${isDarkMode ? "dark" : "light"}`}>
            <img
              src={isDarkMode ? moonIcon : sunIcon}
              alt={isDarkMode ? "Modo escuro" : "Modo claro"}
              className="theme-icon"
            />
          </div>
        </div>



        {/* Botão de hambúrguer */}
        <button className="nav-toggle" onClick={toggleMenu}>
          <span className={`nav-icon ${isOpen ? "open" : ""}`}></span>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
