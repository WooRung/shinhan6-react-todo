import { createContext, useContext } from "react";

const initialContext = {
  todoList: [],
  addTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
};

const TodoContext = createContext(initialContext);

export function TodoProvider({ children }) {
  // state선언.
  const todoList = []; // hook사용 필요

  //함수선언
  const addTodo = () => {};
  const removeTodo = () => {};
  const editTodo = () => {};

  <TodoContext.Provider
    value={{
      todoList,
      addTodo,
      removeTodo,
      editTodo,
    }}
  >
    {children}
  </TodoContext.Provider>;
}

export function useTodo() {
  // context사용
  return useContext();
}
