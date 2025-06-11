import { useRef, useState } from "react";
import { useTodo } from "./TodoProvider";

export default function TodoItem({ todoId, color, text }) {
  const { editTodo, removeTodo } = useTodo();

  // const inputRef = useRef();
  const [inputText, setInputText] = useState(text);

  const [isEditMode, setIsEditMode] = useState(false);

  const onClickEdit = () => {
    if (!isEditMode) {
      setIsEditMode(true);
    } else {
      editTodo(todoId, { text: inputText });
      setIsEditMode(false);
    }
  };

  return (
    <li
      style={{
        display: "block",
        padding: 10,
        backgroundColor: color,
        borderRadius: 5,
        position: "relative",
      }}
    >
      {isEditMode ? (
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      ) : (
        <span>{text}</span>
      )}

      <span style={{ position: "absolute", right: 10 }}>
        <button onClick={onClickEdit}>수정</button>

        <button
          onClick={() => {
            removeTodo(todoId);
          }}
        >
          삭제
        </button>
      </span>
    </li>
  );
}
