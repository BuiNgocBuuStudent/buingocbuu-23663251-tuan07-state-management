import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../states/userAtom";
import { changeTheme } from "../states/ChangeTheme";

export default function LoginForm() {
  const [user, setUser] = useRecoilState(userAtom);
  const [username, setUsername] = useState("");
  const theme = useRecoilValue(changeTheme);
  const isDark = theme === "black";

  function handleLogin() {
    if (username.trim()) {
      setUser({ username: username.trim() });
      setUsername("");
    }
  }

  function handleLogout() {
    setUser(null);
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    padding: "24px",
    margin: "16px auto",
    maxWidth: "400px",
    borderRadius: "12px",
    backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)",
    border: isDark
      ? "1px solid rgba(255,255,255,0.12)"
      : "1px solid rgba(0,0,0,0.08)",
    transition: "all 0.25s ease",
  };

  const headingStyle = {
    color: isDark ? "#f0f0f0" : "#222",
    fontSize: "1.4rem",
    fontFamily: "'Segoe UI', sans-serif",
    margin: "0 0 4px 0",
  };

  const inputStyle = {
    padding: "10px 16px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: isDark ? "1px solid #555" : "1px solid #ccc",
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#f0f0f0" : "#222",
    outline: "none",
    width: "220px",
    transition: "all 0.25s ease",
  };

  const loginBtnStyle = {
    padding: "10px 28px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(76,175,80,0.3)",
    transition: "all 0.25s ease",
  };

  const logoutBtnStyle = {
    padding: "10px 28px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#f44336",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(244,67,54,0.3)",
    transition: "all 0.25s ease",
  };

  const welcomeStyle = {
    color: isDark ? "#81C784" : "#2E7D32",
    fontSize: "1.1rem",
    fontWeight: "500",
  };

  // Đã đăng nhập
  if (user) {
    return (
      <div style={containerStyle}>
        <h2 style={headingStyle}> Auth</h2>
        <p style={welcomeStyle}>
          Xin chào, <strong>{user.username}</strong>!
        </p>
        <button style={logoutBtnStyle} onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  // Chưa đăng nhập
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <input
        style={inputStyle}
        type="text"
        placeholder="Nhập username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button style={loginBtnStyle} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
