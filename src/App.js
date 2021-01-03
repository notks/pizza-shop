import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import "./styles/main.scss";
//import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
//import createHistory from "history/createBrowserHistory";
import { createHashHistory } from "history";

const history = createHashHistory();
function App() {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
  const [cart, setcart] = useState(cartFromStorage ? cartFromStorage : []);
  return (
    <div className="wrapper">
      <HashRouter history={history} basename="/">
        <Navbar history={history}></Navbar>

        <Content cart={cart} history={history} setcart={setcart}></Content>
      </HashRouter>
    </div>
  );
}

export default App;
