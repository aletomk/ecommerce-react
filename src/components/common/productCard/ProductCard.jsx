import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { CiCircleChevRight } from "react-icons/ci";
import "./ProductCard.css";

export const ProductCard = ( {item} ) => {
    return (
        <div key={item.id} className="card">
            <div>
                <img src={item.img} />
                <span>{item.category}</span>
            </div>
            <div className="container_product">
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
                <Link to={`/itemDetail/${item.id}`}>
                    <div className="detalle">
                        <div className="texto_detalle">Ver detalle</div>
                        <IconContext.Provider value={{ size: "20px" }}>
                            <div className="icono_detalle"><CiCircleChevRight /></div>
                        </IconContext.Provider>
                    </div>
                </Link>
            </div>
            <button><Link to={`/itemDetail/${item.id}`}>Comprar</Link></button>
        </div>   
    )
}

