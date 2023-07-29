import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { dataBase } from "../../../firebaseConfig";
import { getDoc, collection, doc} from "firebase/firestore";
import { productosDetalle } from "../../../detailMock";
import 'react-toastify/dist/ReactToastify.css';


export const ItemDetailContainer = () => {

    const { addToCart, getQuantityById } = useContext(CartContext);
    const [producto, setProducto] = useState({});
    const [detail, setDetail] = useState({});
    const {id} = useParams();
    const totalQuantity = getQuantityById(id);


    useEffect( () => {
        let itemsCollection = collection(dataBase, "products");
        let itemRef = doc(itemsCollection, id );
        getDoc(itemRef).then( (res) => {
            setProducto({ ...res.data(), id: res.id });
        });
    }, [id]);

    useEffect( () => {
        const verDetalle = productosDetalle.find((item) => item.id === id);
        setDetail(verDetalle);
    }, [id]);

    const onAdd = (cantidad) => {
        let productCart = {...producto, quantity: cantidad}
        addToCart(productCart);

        toast('Producto agregado exitosamente', {
            position: "top-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };

    return <>
    <ItemDetail producto={producto} detail={detail} onAdd={onAdd} totalQuantity={totalQuantity} />
    <ToastContainer />
    </>
};
