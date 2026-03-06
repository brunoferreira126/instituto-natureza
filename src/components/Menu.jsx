import { useState } from "react";
import "./menu.css";

function Menu() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="menu reveal">
      <div className="menu-container">
        {/* Logo */}
        <img
          src="/logo/LOGO.png"
          alt="Instituto da Natureza"
          className="logo"
        />

        {/* Botão hamburguer */}
        <button
          className="hamburguer"
          onClick={() => setAberto(!aberto)}
        >
          ☰
        </button>

        {/* Navegação */}
        <nav className={`nav ${aberto ? "ativo" : ""}`}>
          <a href="#hero" onClick={() => setAberto(false)}>Início</a>
          <a href="#sobre" onClick={() => setAberto(false)}>Quem Somos</a>
          <a href="#diferencial" onClick={() => setAberto(false)}>Acreditamos</a>
          <a href="#missao" onClick={() => setAberto(false)}>Missão, Visão e Valores</a>
          <a href="#impacto" onClick={() => setAberto(false)}>Impacto</a>
          <a href="#escola" onClick={() => setAberto(false)}>Escola da Natureza</a>
          <a href="#equipe" onClick={() => setAberto(false)}>Equipe</a>
          <a href="#leituras" onClick={() => setAberto(false)}>Leituras</a>
          <a href="#contato" onClick={() => setAberto(false)}>Contatos</a>
         
        </nav>
      </div>
    </header>
  );
}

export default Menu;

