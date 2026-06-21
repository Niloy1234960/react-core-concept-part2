import { useEffect, useState } from "react";
import Todo from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos]);
  return (
    <div className="card">
      <h2>Todos: {todos.length}</h2>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id}></Todo>
      ))}
    </div>
  );
}
