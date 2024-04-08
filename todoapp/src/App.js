import "./App.css";
import Header from "./Header";
import Form from "./Form";
import ItemList from "./ItemList";
import Footer from "./Footer";
import React from "react";
import { useState } from "react";
function App() {
  const item = [
    { id: 1, quantity: "2", name: "Milk", isChecked: false },
    // { id: 2, quantity: "2", name: "Coffee", isChecked: false },
    // { id: 3, quantity: "4", name: "Sugar", isChecked: false },
  ];
  const [items, setItems] = useState(item);
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "isChecked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
  if (sortBy === "quantity")
    sortedItems = items
      .slice()
      .sort((a, b) => parseInt(a.quantity) - parseInt(b.quantity));
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              isChecked: !item.isChecked,
              isStrikethrough: !item.isChecked,
            }
          : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed) {
      setItems([]);
    }
  }
  function handleEdit(id, newName) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, name: newName, isEditing: false } : item
      )
    );
  }
  return (
    <div>
      {" "}
      <Header />
      <div className="App-home">
        <Form onAddItem={handleAddItems} />
        <ItemList
          items={sortedItems}
          onDeleteItem={handDeleteItems}
          onCheckedItem={handleChecked}
          onEditItem={handleEdit}
        />
        <button className="clear-btn" onClick={handleClearList}>
          Clear
        </button>
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="name">Sort By Name</option>
          <option value="isChecked">Sort By Checked</option>
          <option value="quantity">Sort By Quantity</option>
        </select>
        <br />
        <Footer items={items} />
      </div>
    </div>
  );
}
export default App;
