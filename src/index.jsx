import React from "react";
import ReactDOM from "react-dom";
import { debounce } from "lodash";
import "./style.scss";

if (process.env.NODE_ENV === "production") {
  // console.log('this is production environment');
  alert("This is production environment");
}

console.log(debounce);

const App = () => {
  console.log("This is App11 component");
  return <h1>Hello World!</h1>;
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
