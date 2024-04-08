import Item from "./Item";

function ItemList({ items, onDeleteItem, onCheckedItem }) {
  return (
    <div id="myUnordList">
      <ul className="todo-list">
        {items.map((item) => (
          <Item
            itemList={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onCheckeditem={onCheckedItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

// const item = [
//   { id: 1, quantity: "1", name: "Milk", isChecked: false },
//   { id: 2, quantity: "2", name: "Coffee", isChecked: false },
//   { id: 3, quantity: "3", name: "Sugar", isChecked: false },
// ];
