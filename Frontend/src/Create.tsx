import React from "react";
import { createTodo } from "./apiService";

const CreateTodo: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your code to create a new todo goes here
    const title = (
      e.currentTarget.elements.namedItem("title") as HTMLInputElement
    ).value;
    await createTodo({
      id: Math.floor(Math.random() * 1000),
      title,
      isCompleted: false,
    });
  };
  

  return (
    <div>
      <h1>Create Todo</h1>
      {/* Your form to create a new todo goes here */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
