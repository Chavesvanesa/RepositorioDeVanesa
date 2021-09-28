import React from 'react';
import '../styles/componentes/pagesPortfolioPages.css';
import '../styles/componentes/pages/normalize.css';
const PortfolioPages = (props) =>{
    return(
        <Main className="holder0">
        <p><audio src="images/Triunfal.mp3" controls></audio> El tango es el referente musical</p>
        <div className="galeria">
            <div className="foto agrandar">
                <img src="images/TAN (3).jpg" alt="imga01"/>
            </div>
            <div className="foto agrandar">
                <img src="images/TAN (4).jpg" alt="imga01"/>
            </div>
            <div className="foto agrandar">
                <img src="images/TAN (5).jpg" alt="imga01"/>
            </div>
            <div className="foto agrandar">
                <img src="images/TAN (6).jpg" alt="imga01"/>
            </div>
            <div className="foto agrandar">
                <img src="images/TAN (7).jpg" alt="imga01"/>
            </div>
            <div className="foto agrandar">
                <img src="images/TAN (8).jpg" alt="imga01"/>
            </div>
            <div className="foto agrandar">
                <img src="images/TAN (9).jpg" alt="imga01"/>
            </div>
            <div className="foto agrandar">
                <img src="images/TAN (11).jpg" alt="imga01"/>
            </div>

            <div className="foto agrandar">
                <img src="images/bsquerido.jpg" alt="imga01"/>
            </div>
            <div className="foto agrandar">
                <img src="images/logo2.png" alt="imga01"/>
            </div>
        </div>
    </Main>
    );
}
export default PortfolioPages;