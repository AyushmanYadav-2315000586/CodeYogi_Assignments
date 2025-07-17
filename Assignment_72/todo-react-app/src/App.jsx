import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import RefreshButton from "./components/RefreshButton";
function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleToggle(id) {
    setTodos(function (prevTodos) {
      return prevTodos.map(function (todo) {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
    });
  }

  function handleAddTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };
    setTodos(function (prevTodos) {
      return [...prevTodos, newTodo];
    });
  }

  // Remove todo by id
  function handleRemoveTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function handleRefresh() {
    setTodos([]);
  }

  const todosToDo = todos.filter((todo) => !todo.done);
  const todosDone = todos.filter((todo) => todo.done);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <hr />
      <hr />
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center py-2">
          <h2 className="text-2xl font-bold mb-4">Things to get done</h2>
          <RefreshButton onRefresh={handleRefresh} />
        </div>
        <TodoList
          title={"Things to do"}
          todos={todosToDo}
          onToggle={handleToggle}
          onRemove={handleRemoveTodo}
        />
        <AddTodo onAddTodo={handleAddTodo} />
        <TodoList
          title={"Things done"}
          todos={todosDone}
          onToggle={handleToggle}
          onRemove={handleRemoveTodo}
        />
      </div>
    </div>
  );
}

export default App;
