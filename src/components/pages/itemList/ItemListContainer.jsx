import { useState, useEffect } from "react";
import { productos } from "../../../productsMock";
import { ItemList } from "./ItemList";
import "./ItemList.css";

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect( ()=> {
        const tarea = new Promise((resolve) => {
        resolve(productos);
    });

    tarea
        .then((respuesta) => setItems(respuesta))
        .catch((error) => console.log(error));
    } , []);
    
    return <ItemList items={items} />;
};
