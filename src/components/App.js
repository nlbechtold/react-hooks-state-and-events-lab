import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [darkMode, setMode] = useState(false)

  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=>{setMode(!darkMode)}}>{darkMode ? "Dark Mode" : "Light Mode" }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;