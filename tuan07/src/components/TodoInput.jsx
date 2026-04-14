import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { todosAtom } from "../states/todosAtom";
import { changeTheme } from "../states/ChangeTheme";

export default function TodoInput() {
  //Input + btn thêm
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todosAtom);
  const theme = useRecoilValue(changeTheme);
  const isDark = theme === "black";

  function handleAdd() {
    if (text.trim()) {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: text.trim(), status: false },
      ]);
      setText("");
    }
  }

  const containerStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    padding: "8px 0",
  };

  const inputStyle = {
    padding: "10px 16px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: isDark ? "1px solid #555" : "1px solid #ccc",
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#f0f0f0" : "#222",
    outline: "none",
    width: "240px",
    transition: "all 0.25s ease",
  };

  const btnStyle = {
    padding: "10px 22px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#2196F3",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(33,150,243,0.3)",
    transition: "all 0.25s ease",
  };

  return (
    <div style={containerStyle}>
      <input
        style={inputStyle}
        type="text"
        placeholder="Nhập todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button style={btnStyle} onClick={handleAdd}>
        Thêm
      </button>
    </div>
  );
}
