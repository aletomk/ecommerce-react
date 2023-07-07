import { CartWidget } from "../../common/cart/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ()=> {
    return <header id="grilla_header">
        <Link to="/"><img src="https://res.cloudinary.com/dtudxtnbv/image/upload/v1686853878/logo_kuyktu.png" className="logo"/></Link>
        <nav>
            <ul className="menuNav">
                <li><Link to="/src/components/pages/home/Home.jsx">Inicio</Link></li>
                <li><Link to="#">Nosotros</Link></li>
                <li><Link to="#">Contacto</Link></li>
            </ul>
        </nav>
        <ul className="tiendaCart">
            <li className="botonTienda"><Link to="/src/components/pages/itemList/ItemListContainer.jsx">Tienda</Link></li> 
            <CartWidget />
        </ul>
    </header>    
};