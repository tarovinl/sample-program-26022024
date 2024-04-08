import { useState } from "react";
import { EditTodoForm } from "./EditTodoForm";
function Item({ itemList, onDeleteItem, onCheckedItem, onEditItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleEditTodo = (id, newName) => {
    onEditItem(id, newName);
    setIsEditing(false);
  };
  return (
    <div className="item-container">
      {isEditing ? (
        <EditTodoForm task={itemList} editTodo={handleEditTodo} />
      ) : (
        <div className="item-details">
          <div
            className="item-name"
            style={{
              textDecoration: itemList.isStrikethrough
                ? "line-through"
                : "none",
            }}
          >
            {itemList.name}
          </div>
          <div className="item-quantity">{itemList.quantity}</div>
        </div>
      )}
      <div className="item-icons">
        <button onClick={() => onDeleteItem(itemList.id)}>
          <i className="fa fa-trash"></i>
        </button>
        <button onClick={() => onCheckedItem(itemList.id)}>
          <i
            className={`fa ${itemList.isChecked ? "fa-check" : "fa-heart"}`}
          ></i>
        </button>
        <button onClick={handleEditClick}>
          <i className="fa fa-edit"></i>
        </button>
      </div>
    </div>
  );
}
export default Item;
