import { CounterContainer } from "../../common/counter/CounterContainer";

export const ItemDetail = ({ producto, onAdd }) => {
    
    return (
        <div>
            <h2>{producto.title}</h2>
            <h4>{producto.price}</h4>

            <CounterContainer stock={producto.stock} onAdd={onAdd} />
        </div>
    )
};
