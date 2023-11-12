import { useState } from "react";
import Todo from "./Todo.jsx";

const initialTodos = [
  {
    id: 0,
    title: "Do Groceries",
    description: "Buy apples, rice and water",
    isDone: true,
  },
  {
    id: 1,
    title: "Study React",
    description: "Understand context and reducers",
    isDone: true,
  },
  {
    id: 2,
    title: "Learn Redux",
    description: "Learn state management with Redux",
    isDone: true,
  },
];
function TodosList() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <>
      <div className="todos">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
}

export default TodosList;
