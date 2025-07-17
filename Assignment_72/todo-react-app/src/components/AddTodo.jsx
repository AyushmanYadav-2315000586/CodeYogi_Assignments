import React, { useState } from "react";

function AddTodo(props) {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");

  function handleClick() {
    setShowInput(true);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleAdd() {
    if (text.trim() === "") return;
    props.onAddTodo(text.trim());
    setText("");
    setShowInput(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleAdd();
    }
  }
  function cancelAdd() {
    setText("");
    setShowInput(false);
  }

  return (
    <div className="mb-6">
      {showInput ? (
        <div className="flex flex-col gap-2 px-7">
          <h3 className="text-lg font-semibold mb-2 text-slate-800">Create a todo</h3>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter a task..."
            className="border border-slate-300 px-4 py-2 rounded-md w-2/4 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
          />
          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-700 transition w-2/12"
            >
              Save
            </button>
            <button
              onClick={cancelAdd}
              className="bg-gray-200 text-yellow-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 hover:text-white transition w-2/12"
            >
              cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className="bg-yellow-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          + Add a todo
        </button>
      )}
    </div>
  );
}

export default AddTodo;
