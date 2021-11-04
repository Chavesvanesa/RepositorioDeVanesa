import React from 'react';
import '../styles/componentes/pages/ContactoPages.css';
import '../styles/componentes/pages/normalize.css';
const ContactoPages = (props) => {
    return (
        <Main className="container-md columnas">

            <div className="columna left">
                <h3 className="texto">Escribeme:</h3>
                <form action="" method="formulario" class="formulario">
                    <p>

                        <input type="text" name="nombre" placeholder="Nombre" />
                    </p>
                    <p>

                        <input type="text" name="apellido" placeholder="Email" />
                    </p>
                    <p>

                        <input type="telefono" name="tel" placeholder="Telefono" />
                    </p>
                    <p>

                        <textarea id="TuMensaje" placeholder="Tu mensaje"></textarea>
                    </p>
                    <p>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </p>
                </form>

            </div>


            <div className="columna right ">
                <a className="right" href="https://www.google.com/intl/es/gmail/about/"><i class="fab fa-google"></i></a>
                <h6>chaves</h6>
                <h6>vanesa</h6>
                <h6>angelica</h6>
                <h6>@gmail</h6>
                <h6>.com</h6>
                <a className="right" href="https://es-la.facebook.com/"><i className="fab fa-facebook"></i></a>
                <a className="right" href="https://ar.linkedin.com/"><i className="fab fa-linkedin"></i></a>
            </div>

        </Main>
    );
}
export default IndexPages;