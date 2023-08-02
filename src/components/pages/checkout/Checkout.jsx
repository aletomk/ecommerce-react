import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillShop } from "react-icons/ai";
import {MdHome } from "react-icons/md";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Checkout.css";

export const Checkout = ({handleSubmit, handleChange, orderId }) => {

    return (
        <section className="grilla_checkout">
            <h2>Finalizar compra</h2>
            
            <div className="container_form">
            {orderId ? ( 
                <div className="compra_exitosa">
                    <div className="order_num">
                        <h3>¡Gracias por su compra!</h3>
                        <h4>Su número de orden es: <span>{orderId}</span></h4>
                    </div>
                    <ul className="exit_buttons">
                        <Link to="/">                   
                            <li>Ir al inicio</li>
                            <IconContext.Provider value={{ size: "19px" }}>
                                <div className="icon_div"><MdHome/></div>
                            </IconContext.Provider>  
                        </Link>    
                        <Link to="/shop">
                            <li>Ir a la tienda</li>                
                            <IconContext.Provider value={{ size: "19px" }}>
                                <div className="icon_div"><AiFillShop/></div>
                            </IconContext.Provider>                       
                        </Link>    
                    </ul>
                </div>
            ) : ( <>
            <h3>Por favor complete el formulario</h3>
                <form onSubmit={handleSubmit}>
                    <TextField 
                    id="outlined-basic" 
                    label="Nombre y Apellido" 
                    variant="outlined" 
                    name="name" 
                    type="text"
                    className="text_field"
                    required 
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="outlined-basic" 
                    label="Número de documento" 
                    variant="outlined" 
                    name="dni" 
                    type="tel"
                    className="text_field"
                    required  
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="outlined-basic" 
                    label="Número de telefono" 
                    variant="outlined" 
                    name="phone" 
                    type="tel"
                    className="text_field" 
                    required 
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="outlined-basic" 
                    label="Dirección de email" 
                    variant="outlined" 
                    name="email" 
                    type="email" 
                    className="text_field"
                    required 
                    onChange={handleChange} 
                    />
                    <Button variant="contained" type="submit" className="button_form" onChange={handleSubmit}>Confirmar compra</Button>
                </form>
                
                </>)}
            </div>         
        </section>


    )
}


