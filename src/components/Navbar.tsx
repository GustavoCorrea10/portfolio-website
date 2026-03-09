import "../style/Navbar.css"

function Navbar() {
    return (
        <header className="navbar">

            <h2 className="logo">Dev Gustavo</h2>


            <nav>
                <ul className="menu">
                    <li><a href="#apresentacao">Apresentação</a></li>
                    <li><a href="#apresentacao">Tecnologias</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>


    )
}

export default Navbar