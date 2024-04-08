import React, { useState } from "react";
import "./Item.css";
function Item({ itemList }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div id="app">
      <li style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {itemList.quantity + " " + itemList.name}
      </li>

      <button onClick={handleCheck}>
        <i className="fa fa-check"></i>
      </button>
    </div>
  );
}

export default Item;
