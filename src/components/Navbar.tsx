import { useState } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <h2 className="logo">Dev Gustavo</h2>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className="menu">
          <li>
            <a href="#inicio" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={closeMenu}>
              Apresentação
            </a>
          </li>
          <li>
            <a href="#tecnologias" onClick={closeMenu}>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={closeMenu}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
