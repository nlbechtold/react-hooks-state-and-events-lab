import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {

  const [catergory, setCatergory] = useState("All")
  console.log(catergory)
  const filteredItems = items.filter((item)=>{
    if (item.category === catergory || catergory === "All"){
      return true
    }
    return false
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>setCatergory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;