import { addDoc, collection } from "firebase/firestore";
import { productos } from "../../../productsMock";
import { dataBase } from "../../../firebaseConfig";

export const Dashboard = () => {

    const rellenar = () => {
        productos.forEach((producto) => {
            let refCollection = collection(dataBase, "products");
            addDoc(refCollection, producto);
        })
    }

    return (
        <div>
            <button onClick={rellenar}>Rellenar base de datos</button>
        </div>
    )
}
