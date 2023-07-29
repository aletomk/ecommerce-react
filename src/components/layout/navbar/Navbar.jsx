import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ()=> {
    return <header id="grilla_header">
        <Link to="/"><img src="https://res.cloudinary.com/dtudxtnbv/image/upload/v1686853878/logo_kuyktu.png" className="logo"/></Link>
        <nav>
            <ul className="menuNav">
                <li><Link to="/">Inicio</Link></li>
                <li className="botonTienda"><Link to="/shop">Tienda</Link></li> 
                <li><Link to="#">Contacto</Link></li>
            </ul>
        </nav>
        <ul className="tiendaCart">
            <CartWidget />
        </ul>
    </header>    
};