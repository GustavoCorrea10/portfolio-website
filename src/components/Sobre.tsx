import "../style/Sobre.css";

function Sobre() {
  return (
    <section id="sobre" className="sobre-section">
      <h2 className="sobre-title">Sobre Mim</h2>

      <div className="sobre-grid">
        <div className="sobre-card-info">
          <h3>Educação Estruturada</h3>

          <div className="timeline-item">
            <h4>Análise e Desenvolvimento de Sistemas</h4>
            <p className="institution">
              UNICID - Universidade Cidade de São Paulo
            </p>
            <span className="badge-date">Conclusão: 06/2027 (3º Semestre)</span>
          </div>

          <div className="timeline-item">
            <h4>Bootcamp Full Stack Java</h4>
            <p className="institution">Generation Brasil</p>
            <span className="badge-date">Concluído em: 03/2025</span>
          </div>
        </div>

        <div className="sobre-card-text">
          <h3>Minha Trajetória</h3>
          <p>
            Sou um desenvolvedor focado em criar softwares eficientes, limpos e
            de alto impacto comercial. Minha base sólida em{" "}
            <strong>Programação Orientada a Objetos (POO)</strong> e o padrão de
            arquitetura <strong>MVC</strong> foram consolidados no bootcamp
            intensivo da Generation Brasil, onde dediquei centenas de horas
            construindo APIs robustas utilizando{" "}
            <strong>Java e Spring Boot</strong>.
          </p>
          <p>
            No desenvolvimento visual, utilizo{" "}
            <strong>React e TypeScript</strong> combinados com conceitos de
            componentização limpa e design responsivo para construir interfaces
            web ricas, organizadas e totalmente reutilizáveis.
          </p>
          <p>
            Possuo experiência prática em entregas orientadas a metodologias
            ágeis (Scrum) e trabalho em equipe. Meu perfil proativo e
            comunicativo me permite rápida adaptação a novas pilhas tecnológicas
            e regras de negócio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
