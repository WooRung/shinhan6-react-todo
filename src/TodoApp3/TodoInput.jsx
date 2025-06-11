import { useState } from "react";
import { useTodo } from "./TodoProvider";

export default function TodoInput({ curColor }) {
  const [inputText, setInputText] = useState("");

  const { addTodo } = useTodo();

  return (
    <>
      <input
        type="text"
        style={{
          flexGrow: 1,
          padding: 5,
          backgroundColor: curColor,
        }}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button
        onClick={() => {
          addTodo({
            text: inputText,
            color: curColor,
          });
          setInputText("");
        }}
      >
        입력
      </button>
    </>
  );
}
