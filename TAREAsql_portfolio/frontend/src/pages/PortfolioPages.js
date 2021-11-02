import React from 'react';
import '../styles/componentes/pagesPortfolioPages.css';
import '../styles/componentes/pages/normalize.css';
const PortfolioPages = (props) =>{
    return(
        <Main className="holder">
        <div className="fila2 galeria">
            <div className="clase-11 foto">
                <img className="agrandar" src="images/colecciondeflores.png" alt=""/>
            </div>
            <div className="clase-08 foto">
                <img className="agrandar" src="images/contenido02.png" alt=""/>
            </div>
        </div>
        <div >
            <div className="fila2 galeria">
                <div className="clase-09 foto">
                    <img className="agrandar" src="images/coleccionpampa.png" alt=""/>
                </div>
                <div className="clase-10 foto">
                    <img class="agrandar" src="images/coleccionhoteleria.png" alt=""/>
                </div>
            </div>
        </div>
        <div className="fila2 galeria">
            <div className="clase-11 foto">
                <img className="agrandar" src="images/coleccionmarino03.png" alt=""/>
            </div>
            <div className="clase-08 foto">
                <img className="agrandar" src="images/coleccionmarino.png" alt=""/>
            </div>
        </div>
        <div>
            <div className="fila2 galeria">
                <div className="clase-09 foto">
                    <img className="agrandar" src="images/coleccionmarino01.png" alt=""/>
                </div>
                <div className="clase-10 foto">
                    <img className="agrandar" src="images/coleccionmarino02.png" alt=""/>
                </div>
            </div>
        </div>
        <div className="fila2 galeria">
            <div className="clase-11 foto">
                <img className="agrandar" src="images/" alt=""/>
            </div>
            <div className="clase-08 foto">
                <img className="agrandar" src="images/coleccionurbana.png" alt=""/>
            </div>
        </div>
        <div>
            <div className="fila2 galeria">
                <div className="clase-09 foto">
                    <img className="agrandar" src="images/colecciontango.png" alt=""/>
                </div>
                <div className="clase-10 foto">
                    <img class="agrandar" src="images/colecciontango01.png" alt=""/>
                </div>
            </div>
        </div>

    </Main>
    );
}
export default PortfolioPages;