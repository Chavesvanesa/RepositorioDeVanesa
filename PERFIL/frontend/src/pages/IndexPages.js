import React from 'react';
import '../styles/componentes/pages/IndexPages.css';
import '../styles/componentes/pages/normalize.css';
const IndexPages = (props) => {
    return (

        <Main className="holder0">
            <div className="homeimg">
                <img src="img/Sin título-1.png" alt="Home" />
            </div>

            <div className="columnas">
                <div class="bienvenidos left">
                    <h2>Bienvenidos a mi Portfolio</h2>
                    <p>Les dejo aqui un ejemplo de trabajo.</p>
                    <p>El tango es el referente musical</p>

                </div>
                <div className="testimonios right">


                </div>
                <img src="img/bsquerido.jpg" width="160" alt="Logo" />
            </div>

        </Main >
    );
}
export default IndexPages;