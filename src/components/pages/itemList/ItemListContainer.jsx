import { useState, useEffect } from "react";
import { productos } from "../../../productsMock";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemList.css";


export const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const {category} = useParams()

    useEffect( ()=> {
        let productosFiltrados = productos.filter(
            (elemento) => elemento.category === category
        );
        const tarea = new Promise((resolve) => {
        resolve(category === undefined ? productos : productosFiltrados);
    });

    tarea
        .then((respuesta) => setItems(respuesta))
        .catch((error) => console.log(error));
    } , [category]);
    
    return <ItemList items={items} />;
};
