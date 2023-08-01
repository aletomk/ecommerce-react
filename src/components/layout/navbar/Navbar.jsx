import { CartWidget } from "../../common/cartWidget/CartWidget";
import { IconContext } from "react-icons";
import { AiFillShop } from "react-icons/ai";
import {MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ()=> {
    return <header id="grilla_header">
        <Link to="/"><img src="https://res.cloudinary.com/dtudxtnbv/image/upload/v1686853878/logo_kuyktu.png" className="logo"/></Link>
        <nav>
            <ul className="menuNav">
                <Link to="/">                   
                    <IconContext.Provider value={{ size: "20px" }}>
                        <div className="icon_div"><MdHome/></div>
                    </IconContext.Provider>
                    <li>Inicio</li>
                </Link>    
                <Link to="/shop">                
                    <IconContext.Provider value={{ size: "19px" }}>
                        <div className="icon_div"><AiFillShop/></div>
                    </IconContext.Provider>
                    <li>Tienda</li>
                </Link>    
            </ul>
        </nav>
        <ul className="tiendaCart">
            <CartWidget />
        </ul>
    </header>    
};