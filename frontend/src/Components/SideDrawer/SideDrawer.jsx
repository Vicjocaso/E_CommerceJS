import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const sideDrawewrClass = ["sidedrawer"];

  if (show) {
    sideDrawewrClass.push("show");
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    // return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    return cartItems.length;
  };
  return (
    <div className={sideDrawewrClass.join(" ")}>
      <div>
        <ul className="sidedrawe_links" onClick={click}>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart_logo">
                Cart <span className="sidedeawer_cartbadge"></span>
                {getCartCount()}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
