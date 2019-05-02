import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";

const App = () => (
  <div>
    <header>Counter Demo ⏲</header>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
