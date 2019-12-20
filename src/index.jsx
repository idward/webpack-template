import React from "react";
import ReactDOM from "react-dom";
import { add } from "./utility";
import "./style.scss";

if (process.env.NODE_ENV === "production") {
  // console.log('this is production environment');
  alert("This is production environment");
}

const App = () => {
  console.log("This is App11 component");
  console.log(add(3, 5));
  console.log(add(4, 6));
  return <h1>Hello World!</h1>;
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
