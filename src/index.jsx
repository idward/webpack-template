import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { debounce } from "lodash";
import loadable from 'react-loadable';
import "./style.scss";

if (process.env.NODE_ENV === "production") {
  // console.log('this is production environment');
  alert("This is production environment");
}

console.log(debounce);

const Home = loadable({
  loader: () => import(/* webpackChunkName: "home" */'./components/Home'),
  loading: () => <div>loading...</div>
});

const Product = loadable({
  loader: () => import(/* webpackChunkName: "product" *//* webpackPrefetch:true */'./components/Product'),
  loading: () => <div>loading...</div>
});

const App = () => {
  console.log("This is App11 component");
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" component={Product} />
    </Switch>                                                                                            
  );
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
