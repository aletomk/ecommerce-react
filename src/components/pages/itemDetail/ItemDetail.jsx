import { CounterContainer } from "../../common/counter/CounterContainer";
import ImageMagnify from "react-image-magnify";
import { IconContext } from "react-icons";
import { ImZoomIn } from "react-icons/im";
import { AiFillShop } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

export const ItemDetail = ({ producto, onAdd, totalQuantity, detail, divisorDeMiles }) => {

    if (!detail.img) {return <div>Imagen no disponible</div>;}

    return (
        <div key={producto.id} className="grilla_card_detail">

            <div className="imagen">
            <ImageMagnify
                smallImage={{
                src: detail.img,
                isFluidWidth: true,
                }}
                largeImage={{
                width: 600,
                height: 600,
                src: detail.img,
                }}
            />

            <IconContext.Provider value={{ size: "20px" }}>
                <div className="zoom_icon"><ImZoomIn/></div>
            </IconContext.Provider>
            </div>

            <div className="producto">
                <span>{detail.category}</span>
                <h2>{detail.title}</h2> 
                <h3>${divisorDeMiles(detail.price)}</h3>
                <div className="description_title">Descripción</div>
                <p>{detail.description}</p>

                
                <div className="volver_tienda">
                <Link to="/shop" className="link">
                        <li>Volver a la Tienda</li> 
                        <IconContext.Provider value={{ size: "19px" }}>
                            <div className="icon_div"><AiFillShop/></div>
                        </IconContext.Provider>                 
                </Link>    
                </div>
            </div>
            
            <div className="contador">
                {(typeof(totalQuantity) === "undefined" || producto.stock > totalQuantity) &&
                    producto.stock > 0 && (
                    <CounterContainer 
                            stock={producto.stock} 
                            onAdd={onAdd} 
                            initial={totalQuantity}
                            producto={producto}
                        />    
                )}

                {producto.stock === 0 && ( 
                <>
                    <h2 className="sin_stock">No hay stock</h2>
                </>
                )} 

                {(typeof(totalQuantity) !== "undefined" &&
                    totalQuantity === producto.stock && ( 
                        <>
                            <h2 className="max_unidades">tenes las maximas cantidades en el carrito</h2>
                            <div className="ir_carrito">
                            <Link to="/cart" className="link">
                                    <li>Ir al carrito</li> 
                                    <IconContext.Provider value={{ size: "19px" }}>
                                        <div className="icon_div"><FaCartArrowDown/></div>
                                    </IconContext.Provider>                 
                            </Link>    
                            </div>
                        </> 
                    ))}
            </div>
            <div className="volver_tienda_responsive">
                <Link to="/shop" className="link">
                        <li>Volver a la Tienda</li> 
                        <IconContext.Provider value={{ size: "19px" }}>
                            <div className="icon_div"><AiFillShop/></div>
                        </IconContext.Provider>                 
                </Link>    
                </div>
        </div>
    )
};
