import { FaCartArrowDown } from "react-icons/fa";
import Badge from '@mui/material/Badge'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {

  const { cart } = useContext(CartContext);

    return <div className="widget">
      <Badge badgeContent={cart.length} sx={
        { "& .MuiBadge-badge": {
          backgroundColor: "#F8C304",
          height: 18,
          minWidth: 18,
          padding: "0 4px",
          fontSize: 12
          } 
        }
      }
      >
        <Link to="/cart"><FaCartArrowDown className="cart" /></Link>
      </Badge>
    </div>
};

