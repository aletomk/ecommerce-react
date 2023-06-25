import { FaCartArrowDown } from "react-icons/fa";
import styles from "./Cart.module.css";

export const Cart = () => {
    return <div className={styles.div_cart}>
      <a href="#"><FaCartArrowDown className={styles.cart} /></a>
      <div className={styles.cart_widget}>3</div>
    </div>
}

