import React from "react";
import { useState } from "react";


function Item({ name, category }) {

  const [inCart, setCart] = useState("")

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart === "" ? "add": "remove"} onClick={()=> {inCart === "" ? setCart("in-cart") : setCart("")}}>{inCart === "in-cart" ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;