import { MdDelete } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Cart.css";
import { IconContext } from "react-icons";

export const Cart = ({ cart, deleteById, limpiar, totalPrice, totalQuantity, clearCart, divisorDeMiles}) => {

    return (
        <div className="grilla_cart">
            <h2 className="h2_mi_carrito">Mi carrito</h2>
            { cart.length > 0 && <h3 className="h3_totales">Unidades totales: {totalQuantity}</h3> }    
            <section className="all_resumes">   
            {
                cart.map((elemento)=> {
                    return <div key={elemento.id} className="product_resume">
                        <img src={elemento.img} />
                        <div>
                            <h3>{elemento.title}</h3>
                            <h4>${divisorDeMiles(elemento.price)}</h4>
                            <h5>Unidades en carrito: {elemento.quantity}</h5>
                            <Link to={`/itemDetail/${elemento.id}`} className="add_more"><li>Agregar más unidades</li></Link>
                        </div>
                        
                        <Link onClick={()=> deleteById(elemento.id)}>
                            <IconContext.Provider value={{ className: "icon_delete" }}>
                                <MdDelete />
                            </IconContext.Provider>
                        </Link>
                    </div>
                })  
            }
            </section>
            <section className="final_cart">
                <div>
                    {cart.length > 0 && <li onClick={limpiar} className="clean_cart">Limpiar carrito</li>}
                </div>
                    {cart.length > 0 && <h3 className="h3_totales preciototal">Total: ${divisorDeMiles(totalPrice)}</h3>}
                <div>
                    {cart.length > 0 && <Link to="/checkout"><li onClick={clearCart} className="end_shop">Finalizar compra</li></Link>}
                </div>
            </section>
            <section className="empty_cart">
                <div>
                    {cart.length === 0 && ( 
                    <>
                        <h3 className="h3_totales">Tu carrito esta vacio</h3>
                        <Link to="/shop" className="link">
                                <li>Volver a la Tienda</li> 
                                <IconContext.Provider value={{ size: "19px" }}>
                                    <div className="icon_div"><AiFillShop/></div>
                                </IconContext.Provider>                 
                        </Link>
                    </> 
                    )}
                </div>    
            </section>
        </div>
    )
}

