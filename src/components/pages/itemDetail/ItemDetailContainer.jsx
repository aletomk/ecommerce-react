import { useState, useEffect } from "react";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CounterContainer } from "../../common/counter/CounterContainer";
//import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const {id} = useParams()
    
    useEffect(()=>{
        let productoSeleccionado = productos.find(elemento => elemento.id === +id)
        const tarea = new Promise ((res)=>{
            res(productoSeleccionado)
        });
        tarea.then(res => setProducto(res))

    }, [id]);

    const onAdd = (cantidad) => {
        console.log(producto);
        console.log(cantidad);
    };
    return <div>
        <h2>{producto.title}</h2>
        <h4>{producto.price}</h4>

        <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>;
}

