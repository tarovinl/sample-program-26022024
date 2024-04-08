import { useState } from "react";
import "./Form.css";
function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    console.log(newItem);
    setName("");
    setQuantity(1);
    //handleAddItem(newItem);
    onAddItem(newItem);
  }

  return (
    <div className="to-doform">
      <div id="app">
        <form onSubmit={handleSubmit}>
          <select
            className="check-style"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {/* <option value={1}>1</option> */}
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            className="input-box"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Insert Task"
          />
          <button className="btn_add">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
