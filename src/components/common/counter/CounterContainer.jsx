import { useState } from "react";
import Counter from "./Counter";

export const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("cantidad maxima");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />;
};
