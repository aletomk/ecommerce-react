import { FaCartArrowDown } from "react-icons/fa";
import styles from "./Cart.module.css";

export const Cart = () => {
    return <div>
      <a href="#"><FaCartArrowDown className={styles.cart} /></a>
    </div>
}

