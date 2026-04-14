import { useSetRecoilState, useRecoilValue } from "recoil";
import { todosAtom } from "../states/todosAtom";
import { changeTheme } from "../states/ChangeTheme";

export default function TodoItem({ todo }) {
  //Item + btn
  const setTodos = useSetRecoilState(todosAtom);
  const theme = useRecoilValue(changeTheme);
  const isDark = theme === "black";

  function handleDelete() {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  }

  // đánh dấu hoàn thành / chưa hoàn thành
  function handleToggle() {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t,
      ),
    );
  }

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 14px",
    borderRadius: "8px",
    backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
    border: isDark
      ? "1px solid rgba(255,255,255,0.1)"
      : "1px solid rgba(0,0,0,0.06)",
    transition: "all 0.25s ease",
  };

  const textStyle = {
    flex: 1,
    fontSize: "1rem",
    color: isDark ? "#f0f0f0" : "#222",
    textDecoration: todo.completed ? "line-through" : "none",
    opacity: todo.completed ? 0.5 : 1,
    transition: "all 0.25s ease",
  };

  const smallBtn = {
    padding: "6px 14px",
    fontSize: "0.85rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.25s ease",
  };

  const deleteBtnStyle = {
    ...smallBtn,
    backgroundColor: "#f44336",
    color: "#fff",
  };

  return (
    <div style={itemStyle}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        style={{ width: "18px", height: "18px", cursor: "pointer" }}
      />
      <span style={textStyle}>{todo.text}</span>
      <button style={deleteBtnStyle} onClick={handleDelete}>
        Xóa
      </button>
    </div>
  );
}
