import { atom } from "recoil";

export const todosAtom = atom({
  key: "todosAtom",
  default: [], // mảng todos: [{ id, text, completed }]
});
