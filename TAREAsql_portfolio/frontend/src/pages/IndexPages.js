import React from 'react';
import '../styles/componentes/pages/IndexPages.css';
import '../styles/componentes/pages/normalize.css';
const IndexPages = (props) => {
    return (
        <Main>
            <div className="container-md">

            <div className="clase-06">
            <div className="texto1">
            <h4>PERFIL</h4>
            <p className="perfil">Mi nombre es Vanesa, soy diseñadora y actualmente me dedico al desarrollo web.La motivación de seguir perfeccionando habilidades y crecer profesionalmente me impulsan en el camino  del desarrollo web y el diseño de proyectos interesantes por descubrir.</p>
            </div>
            <div className="texto1">
            <h4>EDUCACION</h4>
            <p > UBA.Carrera de Diseño</p>
            <p > UTN.Diplomatura en programación web full Stack con Reacts JS</p>
            <p > UTN.Fundamentos de la programación</p>

            </div>

            <div className="texto1">
            <h4>HABILIDADES</h4>

            </div>
            <div className ="texto1">

            </div>
            </div>


            <div className ="clase-07 foto">

            <div className ="autor">


            <img src="images/autor00.jpg" />
            <h4 className ="texto">CONTACTO</h4>
            <div>
            <div className="texto1"><a href="#"><i class ="fas fa-globe"></i></a>
            chavesvanesa.000webhostapp.com</div>
            <div className="texto1"><a href="#"><i class ="far fa-envelope"></i></a> chavesvanesaangelica @gmail.com</div>
            <div className="texto1"><a href="#"><i class ="fas fa-map-marker-alt"></i></a> Buenos Aires.Argentina.
            </div>

            </div>
            </div>
            </div>
            </div>
        </Main >

    );
}
export default IndexPages;