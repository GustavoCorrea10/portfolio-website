import "../style/Projetos.css";
import PratoCerto from "../assets/img/projetos/imagem_pratoCerto.jpg";
import Estetica from "../assets/img/projetos/imagem_estetica.png";
import SpTrans from "../assets/img/projetos/image_SpTrans.png";
import agenteIA from "../assets/img/projetos/image_agenteIA.png";

function Projetos() {
  return (
    <section id="projetos" className="section-projetos">
      <h2 className="h2-projetos">Projetos em Destaque</h2>

      <div className="cards-grid">
        {/* PROJETO 1: Prato Certo */}
        <div className="card-projetos">
          <div className="img-container">
            <img className="img_projetos" src={PratoCerto} alt="Prato Certo" />
          </div>
          <div className="card-body">
            <h3 className="h3-projetos">Prato Certo</h3>
            <p className="project-description">
              Vitrine digital de restaurantes com foco em opções veganas e
              vegetarianas. Apresentado para corporações de mercado (AWS, Itaú,
              Mercado Livre) durante o evento GenDay.
            </p>
            <div className="div_icons">
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                alt="Spring"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
              />
            </div>
            <a
              href="https://unique-kringle-2cc4cd.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-projetos"
            >
              Acessar Projeto
            </a>
          </div>
        </div>

        {/* PROJETO 2: Agente de IA */}
        <div className="card-projetos">
          <div className="img-container">
            <img className="img_projetos" src={agenteIA} alt="Agente de IA" />
          </div>
          <div className="card-body">
            <h3 className="h3-projetos">Agente de IA Assistente</h3>
            <p className="project-description">
              Agente inteligente desenvolvido em Java com integração à API da
              Groq. A aplicação funciona como um assistente de engenharia de
              software: analisa a ideia do projeto do usuário, valida se as
              tecnologias escolhidas são adequadas e gera um plano de ação passo
              a passo para o desenvolvimento.
            </p>
            <div className="div_icons">
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                alt="Spring"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
            </div>
            <a
              href="https://gustavocorrea10.github.io/Front_IA/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-projetos"
            >
              Acessar Projeto
            </a>
          </div>
        </div>

        {/* PROJETO 3: Site de Estética */}
        <div className="card-projetos">
          <div className="img-container">
            <img className="img_projetos" src={Estetica} alt="Estética" />
          </div>
          <div className="card-body">
            <h3 className="h3-projetos">Vitrine Digital - Estética</h3>
            <p className="project-description">
              Plataforma web institucional responsiva desenvolvida do zero e
              publicada em ambiente de produção para uma cliente real. O site
              atua como vitrine, apresentando serviços e facilitando o contato,
              o que ajudou a profissionalizar a presença online e impulsionar a
              captação do negócio.
            </p>
            <div className="div_icons">
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
            </div>
            <a
              href="https://gustavocorrea10.github.io/estetica_front/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-projetos"
            >
              Acessar Projeto
            </a>
          </div>
        </div>

        {/* PROJETO 4: Interface SPTrans */}
        <div className="card-projetos">
          <div className="img-container">
            <img className="img_projetos" src={SpTrans} alt="Foto SpTrans" />
          </div>
          <div className="card-body">
            <h3 className="h3-projetos">Interface SPTrans</h3>
            <p className="project-description">
              Reconstrução completa da interface principal do portal da SPTrans.
              O objetivo principal foi aplicar boas práticas de UI/UX focando na
              usabilidade do usuário urbano, criando fluxos de navegação mais
              intuitivos e um design fluido perfeitamente responsivo para
              celulares.
            </p>
            <div className="div_icons">
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
              />
              <img
                className="img_icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
            </div>
            <a
              href="https://gustavocorrea10.github.io/Interface_sptrans/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="button-projetos"
            >
              Acessar Projeto
            </a>
          </div>
        </div>
      </div>

      <div className="container-botao-geral">
        <a
          href="https://github.com/GustavoCorrea10"
          target="_blank"
          rel="noopener noreferrer"
          className="button-ver-mais"
        >
          <img
            className="icon-github"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
          Ver Mais Projetos no GitHub
        </a>
      </div>
    </section>
  );
}

export default Projetos;
