import { useState } from "react";
import Todo from "./Todo.jsx";

const initialTodos = [
  {
    id: 0,
    title: "Do Groceries",
    description: "Buy apples, rice and water",
    isDone: false,
  },
  {
    id: 1,
    title: "Study React",
    description: "Understand context and reducers",
    isDone: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    description: "Learn state management with Redux",
    isDone: false,
  },
];
function TodosList() {
  const [todos, setTodos] = useState(initialTodos);

  function deleteHandler(id) {
    if(confirm('Are you sure you want to delete the to-do?')) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  }

  function toggleIsDoneHandler(id) {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.isDone = !todo.isDone;
        return todo;
      } else {
        return todo;
      }
    }))
  }


  return (
    <>
      <div className="todos">
        {todos.map((todo) => (
          <Todo 
          todo={todo} 
          key={todo.id}
          deleteTodo={(id) => deleteHandler(id)}
          toggleIsDone={(id) => toggleIsDoneHandler(id)} />
        ))}
      </div>
    </>
  );
}

export default TodosList;
