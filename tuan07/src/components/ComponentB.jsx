import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterAtom } from "../states/counterAtom";
import { changeTheme } from "../states/ChangeTheme";

export default function ComponentB() {
  var [value, setValue] = useRecoilState(counterAtom);
  var theme = useRecoilValue(changeTheme);
  var isDark = theme === "black";

  const btnStyle = {
    padding: "8px 20px",
    fontSize: "1.1rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: isDark ? "#555" : "#e0e0e0",
    color: isDark ? "#f0f0f0" : "#222",
    boxShadow: isDark
      ? "0 2px 6px rgba(255,255,255,0.08)"
      : "0 2px 6px rgba(0,0,0,0.1)",
    transition: "all 0.25s ease",
    minWidth: "44px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <h2
        style={{
          color: isDark ? "#f0f0f0" : "#222",
          transition: "color 0.25s ease",
        }}
      >
        Component B:
      </h2>
      <button style={btnStyle} onClick={() => setValue(value + 1)}>
        +
      </button>
      <button style={btnStyle} onClick={() => setValue(value - 1)}>
        −
      </button>
    </div>
  );
}
