import React, { useState } from "react";
import { Router } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import createHistory from "history/createBrowserHistory";

const history = createHistory();
function App() {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
  const [cart, setcart] = useState(cartFromStorage ? cartFromStorage : []);

  return (
    <div className="wrapper">
      <Router history={history}>
        <Navbar history={history}></Navbar>
        <Content cart={cart} setcart={setcart}></Content>
      </Router>
    </div>
  );
}

export default App;
