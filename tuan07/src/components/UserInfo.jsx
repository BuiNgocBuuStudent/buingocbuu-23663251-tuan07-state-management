import React from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../states/userAtom";
import { changeTheme } from "../states/ChangeTheme";

export default function UserInfo() {
  const user = useRecoilValue(userAtom);
  const theme = useRecoilValue(changeTheme);
  const isDark = theme === "black";
  console.log(user);

  const style = {
    textAlign: "center",
    padding: "12px",
    color: isDark ? "#f0f0f0" : "#222",
    transition: "color 0.25s ease",
    fontSize: "1.1rem",
  };

  return (
    <div style={style}>
      <h3>
        UserInfo:{" "}
        {user ? (
          <span style={{ color: isDark ? "#81C784" : "#2E7D32" }}>
            {user.username}
          </span>
        ) : (
          <span style={{ color: isDark ? "#ef9a9a" : "#c62828" }}>
            Chưa đăng nhập
          </span>
        )}
      </h3>
    </div>
  );
}
