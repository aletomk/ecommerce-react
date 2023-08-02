import { Cart } from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from 'sweetalert2';

export const CartContainer = () => {
    const {cart, clearCart, deleteById, getTotalPrice, getTotalQuantity, divisorDeMiles} = useContext(CartContext);

    let totalPrice = getTotalPrice();
    let totalQuantity = getTotalQuantity();

    const limpiar = () => {
      Swal.fire({
        title: '¿Deseas borrar todo el carrito?',
        showDenyButton: true,
        confirmButtonText: 'Sí, eliminar!',
        confirmButtonColor: '#F8C304',
        denyButtonText: 'No, no eliminar',
      }).then((result) => {
        if (result.isConfirmed) {
          clearCart()
        } 
      })
    };

    return (
    <Cart cart={cart} deleteById={deleteById} totalPrice={totalPrice} totalQuantity={totalQuantity} limpiar={limpiar} divisorDeMiles={divisorDeMiles} clearCart={clearCart} />
    );
}



