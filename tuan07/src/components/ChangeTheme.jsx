import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { changeTheme } from "../states/ChangeTheme";

export default function ChangeTheme() {
  var [theme, setTheme] = useRecoilState(changeTheme);

  useEffect(() => {
    document.body.style.backgroundColor = theme;
    console.log(theme);
  }, [theme]);

  function handleLightTheme() {
    setTheme("white");
  }
  function handleDarkTheme() {
    setTheme("black");
  }
  const isDark = theme === "black";

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    padding: "24px",
  };

  const headingStyle = {
    color: isDark ? "#f0f0f0" : "#222",
    fontSize: "1.4rem",
    fontFamily: "'Segoe UI', sans-serif",
    marginBottom: "4px",
  };

  const btnBase = {
    padding: "10px 24px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    minWidth: "110px",
  };

  const lightBtnStyle = {
    ...btnBase,
    backgroundColor: isDark ? "#f5f5f5" : "#fff3cd",
    color: "#333",
    boxShadow: isDark
      ? "0 2px 8px rgba(255,255,255,0.15)"
      : "0 2px 8px rgba(0,0,0,0.1)",
  };

  const darkBtnStyle = {
    ...btnBase,
    backgroundColor: isDark ? "#444" : "#2d2d2d",
    color: "#f0f0f0",
    boxShadow: isDark
      ? "0 2px 8px rgba(255,255,255,0.08)"
      : "0 2px 8px rgba(0,0,0,0.2)",
  };

  const btnGroupStyle = {
    display: "flex",
    gap: "12px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🎨 Change theme:</h2>
      <div style={btnGroupStyle}>
        <button style={lightBtnStyle} onClick={handleLightTheme}>☀️ Light</button>
        <button style={darkBtnStyle} onClick={handleDarkTheme}>🌙 Dark</button>
      </div>
    </div>
  );
}
