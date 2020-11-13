import React, { useState } from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Auth from "./Auth";
function App() {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
  //const [authstate, setauthstate] = useState(initialState)
  const [cart, setcart] = useState(cartFromStorage ? cartFromStorage : []);

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Content cart={cart} setcart={setcart}></Content>
    </div>
  );
}

export default App;
