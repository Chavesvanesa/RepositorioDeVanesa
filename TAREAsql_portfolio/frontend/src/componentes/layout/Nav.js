import { NavLink } from 'react-router-dom';
import '../../styles/componentes/layout/Nav.css';

const Nav = (props) => {
    return (
        <Nav className="holder0">
            <div className="container">
            <div className="circleBehind">
            <ul>
            <a><NavLink activeClassName="activo" exact to="/">Home</NavLink></a>
        <a><NavLink activeClassName="activo" exact to="/">Portfolio</NavLink></a>
            <a><NavLink activeClassName="activo" exact to="/">Servicios</NavLink></a>
            <a><NavLink activeClassName="activo" exact to="/">Contacto</NavLink></a>
            </ul>
            </div>
            </div>
            
        </Nav>



    );
}
export default Nav;