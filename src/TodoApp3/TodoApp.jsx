import { useEffect, useState, useMemo } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./ColorBar";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import { useTodo } from "./TodoProvider";

// ID부여
// - uuid
// - state하나 사용 -> 초기값 0 => Auto-Increment
const COLORS = ["white", "red", "yellow", "pink"];

/**
 * 1. color버튼을 누르면 input의 배경색이 변경된다.
 *    1. 현재 선택된 color가 필요하니, curColor를 저장할 state(상태변수)를 하나 만든다
 *    2. color 버튼을 누르면 curColor를 변경한다.
 *    3. curColor에 저장된 값으로 input의 backgroundColor를 렌더링한다.
 *
 * 2. input에 text를 입력하고 "입력"<버튼>을 클릭하면 todoList에 color와 text가 저장한다.
 * 3. todoList를 반복하면서 color를 background색상으로 text를 렌더링한다.
 */
export default function TodoApp() {
  const [curColor, setCurColor] = useState(COLORS[0]);

  const { setSearchText } = useTodo();

  return (
    <div
      style={{
        backgroundColor: "#0046ff",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <header>
              <h1>Todo App</h1>
            </header>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TodoInput curColor={curColor} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <input
                type="text"
                style={{ flexGrow: 1, padding: 5 }}
                name="검색"
                placeholder="검색어를 입력하여 주세요."
                onChange={(e) =>
                  setSearchText(e.target.value)
                }
              />
            </div>

            <div
              style={{
                marginTop: 40,
                marginBottom: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Colorbar
                colors={COLORS}
                setCurColor={setCurColor}
              />
            </div>

            <div>
              <h2>Todo Items</h2>
              <div>
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
