import React from 'react';
import {Link } from 'react-router-dom';

const Nav = (props) =>{
    return(
        <Nav>
            <div className="holder">
        <ul>
            <li><Link to="/" target="blank">Home</Link></li>
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/acercade">Acerca de</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        </div>
    </Nav>
    );
}
export default Nav;