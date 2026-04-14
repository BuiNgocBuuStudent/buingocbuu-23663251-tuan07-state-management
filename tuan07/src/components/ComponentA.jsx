import React from "react";
import { useRecoilValue } from "recoil";
import { counterAtom } from "../states/counterAtom";
import { changeTheme } from "../states/ChangeTheme";

export default function ComponentA() {
  var globalState = useRecoilValue(counterAtom);
  var theme = useRecoilValue(changeTheme);
  var isDark = theme === "black";
  console.log(globalState);

  return (
    <h2 style={{ color: isDark ? "#f0f0f0" : "#222", transition: "color 0.25s ease" }}>
      Component A: {globalState}
    </h2>
  );
}
