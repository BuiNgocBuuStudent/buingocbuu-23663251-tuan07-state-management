import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ChangeTheme from "./components/ChangeTheme";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import UserInfo from "./components/UserInfo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      {/* <Navbar />

      <ComponentA />
      <ComponentB />
      <ChangeTheme />

      <LoginForm />
      <UserInfo /> */}

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
      </div>
    </>
  );
}

export default App;
