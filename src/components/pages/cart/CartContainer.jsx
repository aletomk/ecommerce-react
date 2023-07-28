import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from 'sweetalert2';
import "./Cart.css";
import { Link } from "react-router-dom";

export const CartContainer = () => {
    const {cart, clearCart, deleteById, getTotalPrice, getTotalQuantity} = useContext(CartContext);

    let totalPrice = getTotalPrice();
    let totalQuantity = getTotalQuantity();

    const Limpiar = () => {
      Swal.fire({
        title: '¿Deseas borrar todo el carrito?',
        showDenyButton: true,
        confirmButtonText: 'Sí, eliminar!',
        confirmButtonColor: '#F8C304',
        denyButtonText: 'No, no eliminar',
      }).then((result) => {
        if (result.isConfirmed) {
          clearCart()
          Swal.fire('Carrito vaciado correctamente', '' ,'success')
        } 
      })
  }
  
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
        {
            cart.length > 0 && <button onClick={Limpiar}>Limpiar carrito</button>
        }

      <h2>El precio total es: {totalPrice}</h2>  
      <h2>Las unidades totales son: {totalQuantity}</h2> 
      {cart.legth > 0 && <Link to="/checkout"><button onClick={clearCart}>Finalizar compra</button></Link>}
    </div>
    );
}



