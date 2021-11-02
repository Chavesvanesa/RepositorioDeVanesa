import React from 'react';
import '../styles/componentes/pages/ServiciosPages.css';
import '../styles/componentes/pages/normalize.css';
const ServiciosPages = (props) => {
    return (

        <Main>
            <div className="holder personas">
                <div className="fila2">
                    <div className="clase-11 persona">
                        <img src="images/diseño.png" alt="" />
                        <h2 class="texto"> DISEÑO</h2>

                        <h3 className="texto"> Creamos diseños segun tus necesidades.</h3>
                    </div>

                </div>
                <div class="fila2">
                    <div class="clase-11 persona">
                        <img src="images/desarrollo.png" alt=""/>
                        <h2 class ="texto"> DESARROLLO</h2>
                        <h3 class ="texto">La programacion y el desarrollo para tu proyecto.</h3>
                    </div>

                </div>
                <div className="fila2">
                    <div className="clase-11 persona">
                        <img src="images/experiencia.png" alt="" />
                        <h2 className="texto"> EXPERIENCIA UI</h2>

                        <h3 className="texto">Que el producto final llegue a tus clientes.</h3>
                    </div>

                </div>

            </div>

            <div className="holder personas">
                <div className="fila2 persona">
                    <a href="#"><i class="fas fa-code"></i></a>
                    <a href="#"><i class="fab fa-css3"></i></a>
                    <a href="#"><i class="fab fa-html5"></i></a>
                    <a href="#"><i class="fab fa-js"></i></a>
                    <a href="#"><i class="fab fa-react"></i></a>
                    <a href="#"><i class="fab fa-node"></i></a>
                </div>
                <div className="fila2 persona">
                    <a href="pagina04.html">Consultas</a>
                </div>

            </div>
        </Main>
    );
}
export default ServiciosPages;