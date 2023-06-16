import { Cart } from "../../common/cart/Cart";
import "./Navbar.css";

export const Navbar = ()=> {
    return <>
        <a href="#"><img src="https://res.cloudinary.com/dtudxtnbv/image/upload/v1686853878/logo_kuyktu.png" className="logo"/></a>
        <nav>
            <ul className="menuNav">
                <li><a href="#">Impresoras</a></li>
                <li><a href="#">Repuestos</a></li>
                <li><a href="#">Electrónica</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        <Cart />
    </>
}