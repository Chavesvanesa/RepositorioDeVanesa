import { NavLink } from 'react-router-dom';
import '../../styles/componentes/layout/Nav.css';

const Nav = (props) => {
    return (
        <Nav className="holder">
            <div className="holder">
            <div className="container">
            <div className="circleBehind">
            <ul>
            <a><NavLink activeClassName="activo" exact to="/">Portada</NavLink></a>
            <a><NavLink activeClassName="activo" exact to="/">Inicio</NavLink></a>
            <a><NavLink activeClassName="activo" exact to="/">Acerca de</NavLink></a>
            <a><NavLink activeClassName="activo" exact to="/">Portfolio</NavLink></a>
            <a><NavLink activeClassName="activo" exact to="/">Contacto</NavLink></a>
            </ul>
            </div>
            </div>
            </div>
        </Nav>



    );
}
export default Nav;