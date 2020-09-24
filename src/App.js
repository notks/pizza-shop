import React,{useState,useEffect} from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
function App() {
  const cartFromStorage=JSON.parse(localStorage.getItem('cart'))
  
  const [cart, setcart] = useState(cartFromStorage ? cartFromStorage:[]);

 

  return (  
    

    <div className="wrapper">
      <Navbar></Navbar>
      <Content cart={cart} setcart={setcart}></Content>
    </div>
 
  );
}

export default App;
