import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ChangeTheme from "./components/ChangeTheme";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <Navbar />

      <ComponentA />
      <ComponentB />
      <ChangeTheme />

      <LoginForm />
      <UserInfo />
    </>
  );
}

export default App;
