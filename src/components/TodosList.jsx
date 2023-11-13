import { useContext } from "react";
import { TodosContext } from "../TodosContext.js";
import Todo from "./Todo.jsx";

function TodosList() {
  const store = useContext(TodosContext);

  function deleteHandler(id) {
    store.dispatch({
      type: "deleted",
      id: id,
    });
  }

  function toggleIsDoneHandler(id) {
    store.dispatch({
      type: "toggledIsDone",
      id: id,
    });
  }

  
  return (
    <>
      <div className="todos">
        {store.todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={(id) => deleteHandler(id)}
            toggleIsDone={(id) => toggleIsDoneHandler(id)}
          />
        ))}
      </div>
    </>
  );
}

export default TodosList;
