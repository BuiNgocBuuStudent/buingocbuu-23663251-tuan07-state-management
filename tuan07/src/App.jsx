import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ChangeTheme from "./components/ChangeTheme";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import UserInfo from "./components/UserInfo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      {/* <Navbar />

      <ComponentA />
      <ComponentB />
      <ChangeTheme />

      <LoginForm />
      <UserInfo /> */}
      {/* 
      <div
        style={{
          maxWidth: "500px",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid rgba(128,128,128,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Todo List</h2>
        <TodoInput />
        <TodoList />
      </div> */}

      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid rgba(128,128,128,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Sản phẩm</h2>
        <ProductList />

        <h2 style={{ textAlign: "center", margin: "20px 0 12px" }}>Giỏ hàng</h2>
        <Cart />
      </div>
    </>
  );
}

export default App;
