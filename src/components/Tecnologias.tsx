import "../style/Tecnologias.css"


function Tecnologias() {
    return (
        <section className="section_tecnologias">
            <h1 className="h1_tecnologias">Habilidades Tecnicas</h1>
            <div className="div_tecnologias">

                <div className="div_card_tecnologia">
                    <h2>Linguagens</h2>
                    <div className="div_img">
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=java" />
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=typescript" />
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=javascript" />
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=html" />
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=css" />
                    </div>
                </div>

                 <div className="div_card_tecnologia">
                    <h2>Frameworks</h2>
                    <div className="div_img">
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=react" />
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=spring" />
                    </div>
                </div>

                 <div className="div_card_tecnologia">
                    <h2>Ferramentas</h2>
                    <div className="div_img">
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=vscode" />
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=idea" />
                    </div>
                </div>

                <div className="div_card_tecnologia">
                    <h2>DevOps</h2>
                    <div className="div_img">
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=git" />
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=github" />
                    </div>
                </div>

                <div className="div_card_tecnologia">
                    <h2>Banco de Dados</h2>
                    <div className="div_img">
                        <img className="img_tecnologia" src="https://skillicons.dev/icons?i=mysql" />
                    </div>
                </div>

                
            </div>
        </section>

    )
}

export default Tecnologias