import React from 'react';
import '../styles/componentes/pages/ContactoPages.css';
import '../styles/componentes/pages/normalize.css';
const ContactoPages = (props) => {
    return (
        <Main className="holder">
            <div className="Fila2">
            <div className="persona">
            <h5 class ="texto">Escribeme: </h5>
            <form action="" method="formulario" class ="formulario" >
            <p>
            <label for="">Nombre</label>
            <input type ="text" />
            </p>
            <p>
            <label for="">Apellido</label>
            <input type ="text" />
            </p>
            <p>
            <label for="">Email</label>
            <input type ="email" />
            </p>
            <p>
            <label for="">Tu mensaje</label>
            <input type ="text" />
            </p>
            <p>
            <label for="acciones"><input type ="submit" name="Enviar">
            </p>
            </form>
            </div>
            </div>
            <div className="fila2">
            <div className="clase-11 persona">
            <h2 className="texto">Vias de contacto</h2>

            <a href="#"><i class ="fas fa-at"></i></a>
            <a href="#"><i class ="fab fa-google"></i></a>
            <a href="#"><i class ="fab fa-facebook"></i></a>
            <a href="#"><i class ="fab fa-linkedin"></i></a>
            </div>

            </div>

        </Main >

    );
}
export default ContactoPages;