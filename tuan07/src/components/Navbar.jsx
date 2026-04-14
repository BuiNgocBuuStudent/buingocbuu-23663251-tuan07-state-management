import React from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../states/userAtom";
import { changeTheme } from "../states/ChangeTheme";

export default function Navbar() {
  const user = useRecoilValue(userAtom);
  const theme = useRecoilValue(changeTheme);
  const isDark = theme === "black";
  console.log(user);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: isDark ? "#1a1a2e" : "#e3f2fd",
    borderBottom: isDark ? "1px solid #333" : "1px solid #bbdefb",
    transition: "all 0.25s ease",
  };

  const brandStyle = {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: isDark ? "#90caf9" : "#1565c0",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const userStyle = {
    fontSize: "1rem",
    color: isDark ? "#f0f0f0" : "#333",
  };

  return (
    <nav style={navStyle}>
      <span style={brandStyle}>MyApp</span>
      <span style={userStyle}>{user ? ` ${user.username}` : " Guest"}</span>
    </nav>
  );
}
