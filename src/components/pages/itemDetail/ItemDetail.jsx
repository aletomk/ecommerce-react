import { CounterContainer } from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

export const ItemDetail = ({ producto, onAdd, totalQuantity }) => {

    return (
        <div>
            <h2>{producto.title}</h2>
            <h4>{producto.price}</h4>
            <img src={producto.img} alt="" />

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
