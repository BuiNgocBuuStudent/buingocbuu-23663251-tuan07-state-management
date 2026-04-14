import { useSetRecoilState, useRecoilValue } from "recoil";
import { cartAtom } from "../states/cartAtom";
import { changeTheme } from "../states/ChangeTheme";

export default function CartItem({ item }) {
  // Hiển thị 1 sản phẩm trong giỏ + tăng/giảm số lượng
  const setCart = useSetRecoilState(cartAtom);
  const theme = useRecoilValue(changeTheme);
  const isDark = theme === "black";

  function handleIncrease() {
    setCart((prev) =>
      prev.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    );
  }

  function handleDecrease() {
    setCart((prev) => {
      const updated = prev.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i,
      );
      // Xóa nếu quantity = 0
      return updated.filter((i) => i.quantity > 0);
    });
  }

  function handleRemove() {
    setCart((prev) => prev.filter((i) => i.id !== item.id));
  }

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 14px",
    borderRadius: "8px",
    backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
    border: isDark
      ? "1px solid rgba(255,255,255,0.1)"
      : "1px solid rgba(0,0,0,0.06)",
    transition: "all 0.25s ease",
  };

  const nameStyle = {
    flex: 1,
    fontWeight: "600",
    color: isDark ? "#f0f0f0" : "#222",
  };

  const priceStyle = {
    color: isDark ? "#90caf9" : "#1565c0",
    fontSize: "0.9rem",
    minWidth: "100px",
    textAlign: "right",
  };

  const qtyStyle = {
    fontWeight: "700",
    color: isDark ? "#f0f0f0" : "#222",
    minWidth: "28px",
    textAlign: "center",
  };

  const smallBtn = {
    padding: "4px 12px",
    fontSize: "1rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: isDark ? "#555" : "#e0e0e0",
    color: isDark ? "#f0f0f0" : "#222",
    transition: "all 0.25s ease",
  };

  const removeBtnStyle = {
    ...smallBtn,
    backgroundColor: "#f44336",
    color: "#fff",
    fontSize: "0.8rem",
    padding: "4px 10px",
  };

  return (
    <div style={rowStyle}>
      <span style={nameStyle}>{item.name}</span>
      <button style={smallBtn} onClick={handleDecrease}>
        -
      </button>
      <span style={qtyStyle}>{item.quantity}</span>
      <button style={smallBtn} onClick={handleIncrease}>
        +
      </button>
      <span style={priceStyle}>
        {(item.price * item.quantity).toLocaleString()}đ
      </span>
      <button style={removeBtnStyle} onClick={handleRemove}>
        Xóa
      </button>
    </div>
  );
}
