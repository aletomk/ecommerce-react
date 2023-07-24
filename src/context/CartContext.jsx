import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existe = isInCart(item.id)
    if(existe){
      let newArray = cart.map((elemento) => {
        if(elemento.id === item.id){
          return {...elemento, quantity: elemento.quantity + item.quantity}
        }else{
          return elemento;
        }
      })
      setCart(newArray)
    }else{
      setCart([...cart, item])
    }
  };

  const isInCart = (id) => {
      let exist = cart.some( (elemento)=> elemento.id === id )
      return exist;
  };

  const clearCart = () => {
    setCart([])
  };

  const deleteById = (id) => {
    let newArray = cart.filter( (elemento) => elemento.id !== id )
    setCart(newArray)
  };

  let data = { cart, addToCart, clearCart, deleteById };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;  
};
