import { addDoc, collection } from "firebase/firestore";
import { productos } from "../../../productsMock";
import { productosDetalle } from "../../../detailMock";
import { dataBase } from "../../../firebaseConfig";

export const Dashboard = () => {

    const rellenar = () => {
        productos.forEach((producto) => {
            let refCollection = collection(dataBase, "products");
            addDoc(refCollection, producto);
        })
    }

    const rellenarDetalles = () => {
        productosDetalle.forEach((producto) => {
            let refCollectionDetail = collection(dataBase, "detail");
            addDoc(refCollectionDetail, producto);
        })
    }

    return (
        <div>
        {/*    <button onClick={rellenar}>Rellenar base de datos</button>
            <button onClick={rellenarDetalles}>Rellenar base de datos con detalles</button> */}
        </div>
    )
}
