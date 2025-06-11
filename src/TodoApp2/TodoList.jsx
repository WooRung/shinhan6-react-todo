import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList }) {
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
      {todoList.map(({ text, color }) => {
        return <TodoItem text={text} color={color} />;
      })}
    </ul>
  );
}
