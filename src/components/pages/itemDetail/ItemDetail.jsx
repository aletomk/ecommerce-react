import { CounterContainer } from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

export const ItemDetail = ({ producto, onAdd, totalQuantity, detail }) => {

    return (
        <div key={producto.id} className="card_detail">

            <div>
                <img className="imagen" src={detail.img} />
            </div>    
            <div className="producto">
                <span>{detail.category}</span>
                <h2>{detail.title}</h2> 
                <h3>${detail.price}</h3>
                <div className="description_title">Descripción</div>
                <p>{detail.description}</p>
    
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
        </div>
    )
};
