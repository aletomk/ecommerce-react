import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ()=> {
    return <header id="grilla_header">
        <Link to="/"><img src="https://res.cloudinary.com/dtudxtnbv/image/upload/v1686853878/logo_kuyktu.png" className="logo"/></Link>
        <nav>
            <ul className="menuNav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="#">Nosotros</Link></li>
                <li><Link to="#">Contacto</Link></li>
            </ul>
        </nav>
        <ul className="tiendaCart">
            <li className="botonTienda"><Link to="/">Tienda</Link></li> 
            <CartWidget />
        </ul>
    </header>    
};