import { IconContext } from "react-icons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Counter.css";

export const Counter = ( {contador, sumar, restar, onAdd, producto } ) => {

    return (
    <div className="container_counter">
      <h4>Unidades en stock: {producto.stock} </h4>
      <div className="counter">
          <li onClick={restar}>
            <IconContext.Provider value={{ size: "27px" }}>
              <AiOutlineMinus />
            </IconContext.Provider>
          </li>  
          <h3>{contador}</h3>
          <li onClick={sumar}>
            <IconContext.Provider value={{ size: "27px" }}>
              <AiOutlinePlus />
            </IconContext.Provider>
          </li>
      </div>
        <div className="botones">    
          <li onClick={()=>onAdd(contador)} className="onAdd">Añadir al carrito</li>
          <Link to="/cart" onClick={()=>onAdd(contador)} className="comprar">Comprar ahora</Link>
        </div>
      </div>
    )
  }