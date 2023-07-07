import { FaCartArrowDown } from "react-icons/fa";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    return <div className={styles.div_cart}>
      <Link to="#"><FaCartArrowDown className={styles.cart} /></Link>
      <div className={styles.cart_widget}>3</div>
    </div>
};

