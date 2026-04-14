import { useRecoilValue } from "recoil";
import { cartAtom, cartTotalSelector } from "../states/cartAtom";
import { changeTheme } from "../states/ChangeTheme";
import CartItem from "./CartItem";

export default function Cart() {
  // Hiển thị giỏ hàng + tổng tiền
  const cart = useRecoilValue(cartAtom);
  const total = useRecoilValue(cartTotalSelector);
  const theme = useRecoilValue(changeTheme);
  const isDark = theme === "black";

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "8px 0",
  };

  const emptyStyle = {
    textAlign: "center",
    color: isDark ? "#888" : "#999",
    fontStyle: "italic",
    padding: "16px 0",
  };

  const totalStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 16px",
    marginTop: "10px",
    borderRadius: "8px",
    backgroundColor: isDark ? "rgba(33,150,243,0.15)" : "rgba(33,150,243,0.08)",
    border: isDark
      ? "1px solid rgba(33,150,243,0.3)"
      : "1px solid rgba(33,150,243,0.2)",
  };

  const totalLabelStyle = {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: isDark ? "#f0f0f0" : "#222",
  };

  const totalAmountStyle = {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: isDark ? "#90caf9" : "#1565c0",
  };

  if (cart.length === 0) {
    return <p style={emptyStyle}>Giỏ hàng trống</p>;
  }

  return (
    <div>
      <div style={listStyle}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div style={totalStyle}>
        <span style={totalLabelStyle}>Tổng tiền:</span>
        <span style={totalAmountStyle}>{total.toLocaleString()}đ</span>
      </div>
    </div>
  );
}
