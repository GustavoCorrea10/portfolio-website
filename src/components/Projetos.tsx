import "../style/Projetos.css"
import PratoCerto from "../assets/img/projetos/imagem_pratoCerto.jpg"


function Projetos() {
  return (
    <section className="section-projetos">
      <h2 className="h2-projetos">Projetos</h2>

      <div className="card-projetos">
        <h3 className="h3-projetos">Prato Certo</h3>
        <img src={PratoCerto}></img>
        <button className="button-projetos">Ver Projeto</button>
      </div>

    </section>
  )
}

export default Projetos