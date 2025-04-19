import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const api = axios.create({
  baseURL: "http://localhost:5280",
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch Todos from api
export const fetchTodos = async () => {
  const response = await api.get("/todos");
  return response.data;
};

// Create a new Todo
export const createTodo = async (todo: Todo) => {
  const response = await api.post("/todos", { todo });
  return response.data;
};

