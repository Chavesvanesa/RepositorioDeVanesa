import '../../styles/componentes/layout/Footer.css';

const Footer = (props) =>{
    return(
        <footer className="holder">
        <div className="footer">
            <div className="texto">
                <span>
                    <h4>Portfolio</h4>
                </span>
               
            </div>
            <div className="texto">
                <h4>Vanesa</h4>
                <h5>Desarrollo web</h5>
            </div>
            <div className="texto">
                <h4>Telefono</h4>
                <h5>010-xxxx-xxxx</h5>
            </div>
            <div className="texto">
                <h4>Email</h4>
                <h5>vanesa@xmail.com</h5>
            </div>
            <div className="texto">
                <h4>Direccion</h4>
                <h5>Argentina</h5>
            </div>

        </div>

    </footer>
        
    );
}
export default Footer;