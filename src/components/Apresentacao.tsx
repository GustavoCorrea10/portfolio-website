import "../style/Apresentacao.css"
import fotoPerfil from "../assets/img/perfil/fotoPerfil.png"

function Apresentacao() {
  return (

    <div id="inicio" className="div-pai">
      <section className="section-apresentacao">
        <h1 className="h1-apresentacao">Full Stack<br /> Developer</h1>
        <p className="p_apresentacao">
          Desenvolvedor focado em criar aplicações web modernas usando Java, React e TypeScript.

        </p>
        <a href="#sobre" className="botao-saiba-mais">
          Saiba mais
        </a>
      </section>

      <div>
        <img className="foto-perfil" src={fotoPerfil} alt="Foto de perfil" />
      </div>
    </div>
  )
}

export default Apresentacao