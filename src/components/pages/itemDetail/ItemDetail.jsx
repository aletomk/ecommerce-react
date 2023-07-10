import { useState, useEffect } from "react";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";

export const ItemDetail = () => {

    const [producto, setProducto] = useState({});

    

    const {id} = useParams()
    

    useEffect(()=>{
        let productoSeleccionado = productos.find(elemento => elemento.id === +id)
        const tarea = new Promise ((res)=>{
            res(productoSeleccionado)
        });
        tarea.then(res => setProducto(res))

    }, [id]);

    return (
        <div>
            <h2>{producto.title}</h2>
            <h4>{producto.price}</h4>
        </div>
    )
}
