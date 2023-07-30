import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillShop } from "react-icons/ai";
import "animate.css";
import "./Home.css";

export const Home = () => {
    return <section id="grilla_home">
    <div className="container_home">
        <div className="bienvenida"> 
            <h1 className="animate__animated animate__fadeInRight">¡Bienvenido!</h1>
            <h2 className="animate__animated animate__fadeInRight">a la tienda lider en<br/><span>Impresión</span> <span>3D</span></h2>
        </div>  
        <Link to="/shop" className="link">
            <div className="ir_tienda animate__animated animate__fadeInRight">
                <li className="tienda">Ir a la Tienda</li> 
                <IconContext.Provider value={{ size: "19px" }}>
                    <div className="icon_div"><AiFillShop/></div>
                </IconContext.Provider>                 
            </div>
        </Link>
    </div>
    </section>
}

