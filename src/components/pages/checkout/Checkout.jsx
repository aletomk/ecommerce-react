import { Link } from "react-router-dom";
import "./Checkout.css";

export const Checkout = ({handleSubmit, handleChange, orderId }) => {

    return (
        <div>
            <h1>Checkout</h1>
            
            {orderId ? ( 
                <div>
                    <h3>Gracias por su compra!</h3>
                    <h4>Su número de compra es: {orderId}</h4>
                    <Link to="/shop">Volver a comprar</Link>
                </div>
            ) : ( 
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="name"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    placeholder="Ingrese su telefono"
                    name="phone"
                    onChange={handleChange}
                    />
                    <input
                    type="email"
                    placeholder="Ingrese su email"
                    name="email"
                    onChange={handleChange}
                    />
                    <button type="submit">Comprar</button>
                </form>)}
        </div>
    )
}


