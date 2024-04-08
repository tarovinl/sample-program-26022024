import React, { useState } from "react";
export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.name);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(task.id, value); // Pass task id and updated value to
  };
  const handleChange = (e) => {
    setValue(e.target.value); // Update value state when input changes
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={handleChange} // Call handleChange when input changes
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
