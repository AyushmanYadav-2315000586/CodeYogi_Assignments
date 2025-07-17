import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ title, todos, onToggle, onRemove }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
      <ul className="space-y-2">
        {todos.map((todo)=>{
            return <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}/>
        })}
      </ul>
    </div>
  );
}

export default TodoList;
