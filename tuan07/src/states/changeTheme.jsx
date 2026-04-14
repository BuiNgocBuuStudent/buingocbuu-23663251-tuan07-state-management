import React from "react";
import { atom } from "recoil";

export const changeTheme = atom({
  key: "changeTheme",
  default: "white",
});
