import { useState, useEffect, useContext } from "react";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";

export const ItemDetailContainer = () => {

    const { addToCart } = useContext(CartContext);
    const [producto, setProducto] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        let productoSeleccionado = productos.find( (elemento) => elemento.id === +id);
        const tarea = new Promise ( (res) => {res(productoSeleccionado)} );
        tarea.then(res => setProducto(res))
    }, [id]);

    const onAdd = (cantidad) => {
        let productCart = {...producto, quantity:cantidad}
        addToCart(productCart)
    };

    return <ItemDetail producto={producto} onAdd={onAdd} />;
};

// const navigate = useNavigate(); navigate("/cart");