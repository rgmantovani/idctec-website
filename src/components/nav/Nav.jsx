import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Usando o Link para navegação
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para fechar o menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="nav-container">
      <nav className="nav-content">
        {/* Logo à esquerda */}
        <div className="nav-logo">IDCTEC</div>

        {/* Menu de navegação à direita */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Página Inicial</Link></li>
          <li><Link to="/courses" onClick={closeMenu}>Cursos</Link></li>
          <li><Link to="/about" onClick={closeMenu}>Quem Somos</Link></li>
          <li><Link to="/partners" onClick={closeMenu}>Parcerias</Link></li>
        </ul>

        {/* Botão de hambúrguer para dispositivos móveis */}
        <button
          className="nav-toggle"
          onClick={toggleMenu}
        >
          <span className="nav-icon"></span>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
