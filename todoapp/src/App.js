import "./App.css";
import Form from "./Form";
import ItemList from "./ItemList";
import Footer from "./Footer";
import React from "react";
import { useState } from "react";

// App.js
function App() {
  const item = [
    { id: 1, quantity: "1", name: "Milk", isChecked: false },
    { id: 2, quantity: "2", name: "Coffee", isChecked: false },
    { id: 3, quantity: "3", name: "Sugar", isChecked: false },
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

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form onAddItem={handleAddItem} />
      <ItemList
        items={sortedItems}
        onDeleteItem={handleDeleteItem}
        onCheckedItem={handleChecked}
      />

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input</option>
        <option value="name">Sort by name</option>
        <option value="isChecked">Sort by checked</option>
      </select>
      <Footer items={items} />
    </div>
  );
}

export default App;
