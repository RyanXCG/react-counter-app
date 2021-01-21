import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ counters }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__cart">
        <ShoppingCartIcon fontSize="large" />
      </div>
      <div className="header__count">
        {counters.reduce((acc, cur) => acc + (cur ? 1 : 0), 0)}
      </div>
      <div className="header__items">Items</div>
    </div>
  );
}

export default Header;
