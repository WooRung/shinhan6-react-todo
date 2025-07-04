import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

const TODOLIST_KEY = "todo-list";
function saveTodo(todoList) {
  localStorage.setItem(
    TODOLIST_KEY,
    JSON.stringify(todoList)
  );
}

function loadTodo() {
  const todoList = localStorage.getItem(TODOLIST_KEY);
  if (todoList) {
    return JSON.parse(todoList);
  }
  return [];
}

const todoContext = createContext(null);

export default function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  // 검색어 입력 State
  const [searchText, setSearchText] = useState("");
  const searchedTodoList = useMemo(() => {
    return todoList.filter((todo) => {
      const todoText = todo.text;
      return todoText.includes(searchText);
    });
  }, [todoList, searchText]);

  const addTodo = ({ text, color }) => {
    const newTodoList = [
      ...todoList,
      {
        id: uuidv4(),
        text,
        color,
      },
    ];
    setTodoList(newTodoList);
    saveTodo(newTodoList);
  };
  const removeTodo = (todoId) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodoList(newTodoList);
    saveTodo(newTodoList);
  };

  const editTodo = (todoId, newTodo) => {
    const newTodoList = todoList.map((todo) => {
      if (todoId === todo.id) {
        return {
          ...todo,
          ...newTodo,
          id: todo.id,
        };
      }
    });
    setTodoList(newTodoList);
    saveTodo(newTodoList);
  };

  useEffect(() => {
    const todoList = loadTodo();
    setTodoList(todoList);
  }, []);

  return (
    <todoContext.Provider
      value={{
        todoList: searchedTodoList,
        addTodo,
        removeTodo,
        editTodo,
        setSearchText,
      }}
    >
      {children}
    </todoContext.Provider>
  );
}

export function useTodo() {
  return useContext(todoContext);
}
