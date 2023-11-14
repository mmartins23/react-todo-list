import { createContext, useReducer } from "react";
import todosReducer from "./TodosReducer.js";
export const TodosContext = createContext("");

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

export function TodosProvider({children}) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <>
      <main>
        <TodosContext.Provider value={{ todos, dispatch }}>
          {children}
        </TodosContext.Provider>
      </main>
    </>
  );
}
