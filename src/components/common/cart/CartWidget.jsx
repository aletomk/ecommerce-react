import { FaCartArrowDown } from "react-icons/fa";
import "./Cart.css";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    return <div className="div_cart">
      <Link to="/cart"><FaCartArrowDown className="cart" /></Link>
      <div className="cart_widget">3</div>
    </div>
};

