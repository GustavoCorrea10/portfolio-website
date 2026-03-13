import "../style/Footer.css"

function Rodape() {
  return (
    <footer>
      <div className="div_sobre">
        <p className="p_Copyright">Gustavo Corrêa | Copyright: 2026</p>
        <p className="p_footer">Acesse as minhas redes sociais</p>

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
            />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Rodape