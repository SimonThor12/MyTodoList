import { useEffect, useState } from "react";
import "./App.css";
import { fetchTodos, Todo } from "./apiService.tsx";
import { Link } from "react-router-dom";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch Todos from api
  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  });

  return (
    <>
      <div className="card">
        <h1>My To Do List</h1>
        <h2>Get it done!</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.isCompleted ? "Completed" : "Not Completed"}
            </li>
          ))}
        </ul>

        <Link to="/create">Create Todo</Link>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
