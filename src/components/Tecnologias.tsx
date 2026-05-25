import "../style/Tecnologias.css";

function Tecnologias() {
  return (
    <section id="tecnologias" className="section_tecnologias">
      <h2 className="h1_tecnologias">Habilidades Técnicas</h2>
      <div className="div_tecnologias">
        <div className="div_card_tecnologia">
          <h3>Linguagens</h3>
          <div className="div_img">
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=java"
              alt="Java"
            />
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=typescript"
              alt="TS"
            />
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=javascript"
              alt="JS"
            />
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=html"
              alt="HTML"
            />
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=css"
              alt="CSS"
            />
          </div>
        </div>

        <div className="div_card_tecnologia">
          <h3>Frameworks</h3>
          <div className="div_img">
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=react"
              alt="React"
            />
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=spring"
              alt="Spring"
            />
          </div>
        </div>

        <div className="div_card_tecnologia">
          <h3>Ferramentas</h3>
          <div className="div_img">
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=vscode"
              alt="VSCode"
            />
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=idea"
              alt="IntelliJ"
            />
          </div>
        </div>

        <div className="div_card_tecnologia">
          <h3>DevOps</h3>
          <div className="div_img">
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=git"
              alt="Git"
            />
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
            />
          </div>
        </div>

        <div className="div_card_tecnologia">
          <h3>Banco de Dados</h3>
          <div className="div_img">
            <img
              className="img_tecnologia"
              src="https://skillicons.dev/icons?i=mysql"
              alt="MySQL"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tecnologias;
