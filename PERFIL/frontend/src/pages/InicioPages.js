import React from 'react';
import '../styles/componentes/pages/InicioPages.css';
import '../styles/componentes/pages/normalize.css';
const InicioPages = (props) => {
    return (
        <Main className="holder0">
        <div className="historia">
            <h2></h2>
        
            <img className="holder" src="images/Sin título-1.png" alt=""/>
           
            <h5></h5>
            <p></p>
            <p>
            </p>
        </div>


        <div className="staff ">
            <h2>Les dejo aqui un ejemplo de trabajo.</h2>
           
            <div className="personas">
                <div className="persona">
                    <img src="images/TAN (2).jpg" alt=""/>
                    <h5> </h5>
                    <h6></h6>
                </div>
                <div className="persona">
                    <img src="images/TAN (5).jpg" alt=""/>
                    <h5></h5>
                    <h6></h6>
                </div>
                               <div class="persona">
                    <img src="images/TAN (7).jpg" alt=""/>
                    <h5></h5>
                    <h6></h6>
                </div>
                <div className="persona">
                    <img src="images/TAN (9).jpg" alt=""/>
                    <h5></h5>
                    <h6></h6>
                </div>
              
              

            </div>
        </div>
    </Main>
    );
}
export default InicioPages;