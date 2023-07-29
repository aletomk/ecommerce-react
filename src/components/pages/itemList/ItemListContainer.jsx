import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
import "./ItemList.css";

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const {category} = useParams()

    useEffect( ()=> {
        let itemsCollection = collection(dataBase, "products");
        let consulta;
        if(category){
            consulta = query(itemsCollection, where("category", "==", category), orderBy("category"));
        }else{
            consulta = query(itemsCollection, orderBy("category"));
        }
        getDocs(consulta).then((res)=>{
            let productos = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
            setItems(productos);
        })
    }, [category]);
    
    return <>
        <ItemList items={items} /> 
    </>
};
