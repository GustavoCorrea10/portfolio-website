import Apresentacao from "./components/Apresentacao"
import Contato from "./components/Contato"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projetos from "./components/Projetos"
import Sobre from "./components/Sobre"


function App(){
  return(
    <>
    <Navbar />
    <Apresentacao />
    <Sobre />
    <Projetos />
    <Contato />
    <Footer />
    </>
  )
}

export default App