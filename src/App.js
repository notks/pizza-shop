import React, { useState } from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
  const [cart, setcart] = useState(cartFromStorage ? cartFromStorage : []);
  const [authState, setauthstate] = useState(false);

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Content
        cart={cart}
        setauthstate={setauthstate}
        authState={authState}
        setcart={setcart}
      ></Content>
    </div>
  );
}

export default App;
