import "../style/Projetos.css"
import PratoCerto from "../assets/img/projetos/imagem_pratoCerto.jpg"
import Estetica from "../assets/img/projetos/imagem_estetica.png"


function Projetos() {
  return (
    <section id="projetos" className="section-projetos">
      <h2 className="h2-projetos">Projetos</h2>

      <div className="cards">

  <div className="card-projetos">
    <h3 className="h3-projetos">Prato Certo</h3>
    <img src={PratoCerto}></img>
    <div className="div_icons">
      <img className="img_icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
      <img className="img_icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
      <img className="img_icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
      <img className="img_icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
      <img className="img_icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
      <img className="img_icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
      <img className="img_icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
    </div>
    <button className="button-projetos">Ver Projeto</button>
  </div>

  <div className="card-projetos">
    <h3 className="h3-projetos">Estetica</h3>
    <img src={Estetica}></img>
    <div className="div_icons">
      <img className="img_icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
      <img className="img_icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
    </div>
    <button className="button-projetos">Ver Projeto</button>
  </div>

  {/* NOVO BOTÃO ABAIXO DOS CARDS */}
  <div className="container-botao-geral">
    <a href="https://github.com/GustavoCorrea10" className="button-ver-mais"><img 
      className="icon-github"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    />
      Mais Projetos GitHub
    </a>
  </div>

</div>
    </section>
  )
}

export default Projetos