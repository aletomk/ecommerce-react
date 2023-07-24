import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ( {item} ) => {
    return (
        <div key={item.id} className="card">
            <img src={item.img} />
            <div className="container_product">
                <span>{item.category}</span>
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
                <article>{item.description}</article>
                <Link to={`/itemDetail/${item.id}`}><div>Ver detalle</div></Link>
            </div>
            <button><Link to={`/itemDetail/${item.id}`}>Comprar</Link></button>
        </div>   
    )
}

