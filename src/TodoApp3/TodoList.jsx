import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "./TodoProvider";

export default function TodoList() {
  const { todoList } = useTodo();
  return (
    <ul
      style={{
        padding: 0,
        listStyleType: "none",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {todoList.map(({ id, text, color }) => {
        return (
          <TodoItem
            key={id}
            // key={idx}
            todoId={id}
            text={text}
            color={color}
          />
        );
      })}
    </ul>
  );
}
