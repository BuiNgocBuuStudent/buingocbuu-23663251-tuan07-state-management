import { useRecoilValue } from "recoil";
import { todosAtom } from "../states/todosAtom";
import { changeTheme } from "../states/ChangeTheme";
import TodoItem from "./TodoItem";

export default function TodoList() {
  // Hiển thị todos
  const todos = useRecoilValue(todosAtom);
  const theme = useRecoilValue(changeTheme);
  const isDark = theme === "black";

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "8px 0",
  };

  const emptyStyle = {
    textAlign: "center",
    color: isDark ? "#888" : "#999",
    fontStyle: "italic",
    padding: "16px 0",
  };

  if (todos.length === 0) {
    return <p style={emptyStyle}>Chưa có todo nào. Hãy thêm mới!</p>;
  }

  return (
    <div style={listStyle}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
