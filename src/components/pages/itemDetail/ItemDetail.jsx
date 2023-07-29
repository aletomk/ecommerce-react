import { CounterContainer } from "../../common/counter/CounterContainer";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

export const ItemDetail = ({ producto, onAdd, totalQuantity, detail }) => {

    return (
        <div key={producto.id}>

            <div>
                <span>{detail.category}</span>
                <img src={detail.img} />
                <h2>{detail.title}</h2> 
                <h3>${detail.price}</h3>
                <div>{detail.description}</div>
                <button><Link to="/cart">Comprar</Link></button>
            </div>
            

            {(typeof(totalQuantity) === "undefined" || producto.stock > totalQuantity) &&
                producto.stock > 0 && (
                <CounterContainer 
                        stock={producto.stock} 
                        onAdd={onAdd} 
                        initial={totalQuantity} 
                    />    
            )}

            {producto.stock === 0 && <h2>No hay stock</h2>} 

            {(typeof(totalQuantity) !== "undefined" &&
                totalQuantity === producto.stock && (
                    <h2>tenes las maximas cantidades en el carrito</h2>
                )
            )}
        </div>
    )
};
