import "../style/Footer.css";

function Rodape() {
  return (
    <footer id="contato" className="footer-container">
      <div className="div_sobre">
        <p className="p_footer">Vamos construir algo incrível juntos?</p>
        <p className="p_footer_sub">Acesse minhas redes sociais</p>

        <div className="redes_sociais">
          <a
            className="link-rede"
            href="https://github.com/GustavoCorrea10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icone-rede"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
          </a>

          <a
            className="link-rede"
            href="https://www.linkedin.com/in/gustavo-correa11/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icone-rede"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
              alt="LinkedIn"
            />
          </a>

          <a
            className="link-rede"
            href="https://www.instagram.com/_gucorreacz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icone-rede"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
              alt="Instagram"
            />
          </a>
        </div>
        <p className="p_Copyright">
          © 2026 Gustavo Corrêa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
