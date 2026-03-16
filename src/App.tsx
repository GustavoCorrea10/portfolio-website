import Apresentacao from "./components/Apresentacao"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projetos from "./components/Projetos"
import Sobre from "./components/Sobre"
import Tecnologias from "./components/Tecnologias"


function App(){
  return(
    <>
    <Navbar />
    <Apresentacao />
    <Sobre />
    <Tecnologias />
    <Projetos />
    <Footer />
    </>
  )
}

export default App