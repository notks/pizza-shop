import React from "react";
import { BrowserRouter  } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Item from '../Item/Item'
import Items from '../Items/Items'
import Sidebar from '../Sidebar/Sidebar'
import Order from '../Order/Order'
import "./Content.scss";
import { useState, useEffect } from "react";
export default function Content({cart,setcart}) {
  const url = "http://127.0.0.1:8000/products";
  const [items, setitems] = useState([]);
  useEffect(() => {

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setitems(json);
      });
  }, []);

 

  return (
 <>
<BrowserRouter>
        <Switch>
    <div className="content">
    <div className="main">
    
          <Route path="/" exact render={()=><Items cart={cart} setcart={setcart} items={items} ></Items>} ></Route>
          <Route path="/order" exact render={()=><Order cart={cart} setcart={setcart} ></Order>}></Route>
       
      
    </div>
    
      <Sidebar setcart={setcart} cart={cart}></Sidebar>
    
  </div>
     </Switch>
      </BrowserRouter>
   </>
 
  );
}
