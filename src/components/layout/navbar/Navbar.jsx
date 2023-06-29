import { CartWidget } from "../../common/cart/CartWidget";
import "./Navbar.css";

export const Navbar = ()=> {
    return <>
        <a href="#"><img src="https://res.cloudinary.com/dtudxtnbv/image/upload/v1686853878/logo_kuyktu.png" className="logo"/></a>
        <nav>
            <ul className="menuNav">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        <ul className="tiendaCart">
            <li className="botonTienda"><a href="#">Tienda</a></li> 
            <CartWidget />
        </ul>
    </>
};