import { atom, selector } from "recoil";

// Giỏ hàng: [{ id, name, price, quantity }]
export const cartAtom = atom({
  key: "cartAtom",
  default: [],
});

// Selector tính tổng tiền
export const cartTotalSelector = selector({
  key: "cartTotalSelector",
  get: ({ get }) => {
    const cart = get(cartAtom);
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
});
