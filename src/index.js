import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";
import { reducer, initialState } from "./reducer/reducer";

//creation of stores with reducers
const store = createStore(reducer);

const App = () => (
  //provider wraps our whole application with the ability to connect the redux state to the component props
  // make sure to pass down store in props
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
