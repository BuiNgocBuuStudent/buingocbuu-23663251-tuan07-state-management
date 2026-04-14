import { useSetRecoilState, useRecoilValue } from "recoil";
import { cartAtom } from "../states/cartAtom";
import { changeTheme } from "../states/ChangeTheme";

const PRODUCTS = [
  { id: 1, name: "Áo 1", price: 150000 },
  { id: 2, name: "Áo 2", price: 160000 },
  { id: 3, name: "Áo 3", price: 110000 },
  { id: 4, name: "Áo 4", price: 120000 },
];

export default function ProductList() {
  // Danh sách sản phẩm + nút thêm vào giỏ
  const setCart = useSetRecoilState(cartAtom);
  const theme = useRecoilValue(changeTheme);
  const isDark = theme === "black";

  function handleAdd(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Đã có trong giỏ -> tăng quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // Chưa có -> thêm mới với quantity = 1
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    padding: "8px 0",
  };

  const cardStyle = {
    padding: "14px",
    borderRadius: "10px",
    backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
    border: isDark
      ? "1px solid rgba(255,255,255,0.1)"
      : "1px solid rgba(0,0,0,0.06)",
    textAlign: "center",
    transition: "all 0.25s ease",
  };

  const nameStyle = {
    fontSize: "1rem",
    fontWeight: "600",
    color: isDark ? "#f0f0f0" : "#222",
    marginBottom: "4px",
  };

  const priceStyle = {
    fontSize: "0.9rem",
    color: isDark ? "#90caf9" : "#1565c0",
    marginBottom: "10px",
  };

  const btnStyle = {
    padding: "8px 18px",
    fontSize: "0.85rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    boxShadow: "0 2px 6px rgba(76,175,80,0.3)",
    transition: "all 0.25s ease",
  };

  return (
    <div style={containerStyle}>
      {PRODUCTS.map((p) => (
        <div key={p.id} style={cardStyle}>
          <div style={nameStyle}>{p.name}</div>
          <div style={priceStyle}>{p.price.toLocaleString()}đ</div>
          <button style={btnStyle} onClick={() => handleAdd(p)}>
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
}
