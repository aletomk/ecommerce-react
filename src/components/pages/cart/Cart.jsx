import { FaCartArrowDown } from "react-icons/fa";
import styles from "./Cart.module.css";
import { CartWidget } from "./CartWidget";

export const Cart = () => {
    return <div className={styles.div_cart}>
      <a href="#"><FaCartArrowDown className={styles.cart} /></a>
      <CartWidget />
    </div>
}

