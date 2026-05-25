import "../style/Apresentacao.css";

function Apresentacao() {
  return (
    <div id="inicio" className="hero-container">
      {/* Luzes difusas de fundo (efeito de profundidade tech) */}
      <div className="blur-radial orb-blue"></div>
      <div className="blur-radial orb-purple"></div>

      <section className="hero-content">
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponível para Estágio (São Paulo)
        </div>

        <h1 className="hero-title">
          Gustavo Corrêa
          <span className="hero-subtitle">Full Stack Developer</span>
        </h1>

        <p className="hero-description">
          Estudante de Análise e Desenvolvimento de Sistemas especializado no
          ecossistema <strong>Java, Spring Boot, React e TypeScript</strong>.
          Desenvolvendo aplicações robustas, APIs RESTful e soluções
          inteligentes.
        </p>

        <div className="hero-buttons">
          <a href="#projetos" className="btn-primary">
            Ver Projetos
          </a>
        </div>
      </section>
    </div>
  );
}

export default Apresentacao;
