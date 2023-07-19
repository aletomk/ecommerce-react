import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";

export const CartContainer = () => {
    const {cart, clearCart, deleteById} = useContext(CartContext);
    
    return (
    <div className="grilla_main">
        {
            cart.map((elemento)=> {
                return <div key={elemento.id} style={{border: "2px solid red"}}>
                    <h4>{elemento.title}</h4>
                    <h5>{elemento.price}</h5>
                    <h5>{elemento.quantity}</h5>
                    <button onClick={()=> deleteById(elemento.id)}>Eliminar</button>
                </div>
            })
        }
        <button onClick={clearCart}>Limpiar carrito</button>
    </div>
    );
}

