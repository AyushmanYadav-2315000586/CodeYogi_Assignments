import React from "react";

function TodoItem(props) {
  function handleChange() {
    props.onToggle(props.todo.id);
  }
  function handleRemove() {
    props.onRemove(props.todo.id);
  }
  return (
    <li className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={props.todo.done}
        onChange={handleChange}
        className="w-5 h-5 text-yellow-400 rounded border-gray-300 focus:ring-yellow-500"
      />
      <span
        className={`text-slate-700 ${
          props.todo.done ? "line-through text-gray-400" : ""
        }`}
      >
        {props.todo.text}
      </span>
      <button
        onClick={handleRemove}
        className="ml-2 text-2xl text-red-500 hover:text-red-700 font-bold px-2"
        title="Remove todo"
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;
