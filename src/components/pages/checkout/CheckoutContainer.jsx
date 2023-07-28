import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { dataBase } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";

export const CheckoutContainer = () => {

    const { cart, getTotalPrice } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    let total = getTotalPrice();

    const handleSubmit = (evento) => {
        evento.preventDefault();

        let order = {
            buyer: data,
            items: cart,
            total,
            date: serverTimestamp()
        };

        //CREAR LA ORDEN
        const ordersCollection = collection(dataBase, "orders");
        addDoc(ordersCollection, order).then( res => setOrderId(res.id));

        //MODIFICAR EL STOCK
        cart.forEach((product) => {
            updateDoc(doc(dataBase, "products", product.id), {stock: product.stock - product.quantity})
        });
        
    };

    const handleChange = (evento) => {
        setData({ ...data, [evento.target.name]: evento.target.value });
    };

    return (
        <Checkout handleSubmit={handleSubmit} handleChange={handleChange} orderId={orderId} />
    );
};