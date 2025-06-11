import TodoProvider from "./TodoApp3/TodoProvider";

import TodoApp from "./TodoApp3/TodoApp";

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
