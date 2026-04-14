import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ChangeTheme from "./components/ChangeTheme";

function App() {
  return (
    <>
      <ComponentA />
      <ComponentB />
      <ChangeTheme />
    </>
  );
}

export default App;
