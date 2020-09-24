import React, { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom'

import "./Sidebar.scss";
import CartItem from "../CartItem/CartItem";

export default function Sidebar({ cart, setcart }) {
  const [price, setprice] = useState(0);
  const cartcount = useRef(0);

  useEffect(() => {
    let newPrice = 0;
    cartcount.current = 0;
    cart.forEach((item) => {
      newPrice += item.price * item.q;

      cartcount.current = cartcount.current + item.q;
    });
    setprice(newPrice);
  }, [cart]);

  
  
  return (
      
    <div className="sidebar">
      <div className="cart">

        <img
          src="/img/supermarketlight.svg"
          className="shopping-cart-sidebar"
          alt="shopping-cart"
        ></img>
      </div>
      <div className='items'>
{cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            
            setcart={setcart}
            item={item}
            cart={cart}
          />
        );
      })}

      </div>
      
      <div className="price">
        {price>0 && 'Total: '+price+'$'}<br></br>
        {cartcount.current>0 && 'Total quantity: '+cartcount.current}
      </div>
      <div className='order'>
        
          {
             cartcount.current>0 &&  <Link to='/order'><button className='orderbtn'>&#10004;</button></Link>
          }
          {cartcount.current>0 && <button className='clear' onClick={()=>{setcart([]); localStorage.clear()}}>X</button>}

      </div>
    </div>
  );
}
