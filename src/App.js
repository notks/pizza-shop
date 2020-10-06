import React, { useState } from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
function App() {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart"));

  const [cart, setcart] = useState(cartFromStorage ? cartFromStorage : []);
  const [auth, setauth] = useState(
    JSON.parse(localStorage.getItem("loggedin"))
  );

  return (
    <div className="wrapper">
      <Navbar auth={auth}></Navbar>
      <Content cart={cart} auth={auth} setcart={setcart}></Content>
    </div>
  );
}

export default App;
