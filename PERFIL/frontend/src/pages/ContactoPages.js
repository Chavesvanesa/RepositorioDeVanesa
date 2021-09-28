import React from 'react';
import '../styles/componentes/pages/ContactoPages.css';
import '../styles/componentes/pages/normalize.css';
const ContactoPages = (props) => {
    return (
        <Main className="holder0">
            <div className="columna left">
                <h2>Escribeme:</h2>
                <form action="" method="formulario" className="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Apellido</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="email" />
                    </p>
                    <p>
                        <label for="">Tu mensaje</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="acciones"><input type="submit" name="Enviar">
                                                          
                    </p>        
                </form>  
            </div>

        </Main>

    );
}
 export default ContactoPages;