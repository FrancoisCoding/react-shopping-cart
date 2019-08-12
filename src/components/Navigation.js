import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { NavLink } from "react-router-dom";

function Navigation() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
}

export default Navigation;
