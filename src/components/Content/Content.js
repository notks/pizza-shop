import React from "react";
import { Route, Switch } from "react-router-dom";
import Items from "../Items/Items";
import Sidebar from "../Sidebar/Sidebar";
import Order from "../Order/Order";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
export default function Content({ cart, setcart }) {
  return (
    <>
      <Switch>
        <>
          <div className="content">
            <div className="main">
              <Route
                path="/"
                exact
                render={() => <Items cart={cart} setcart={setcart}></Items>}
              ></Route>
              <Route
                path="/order"
                exact
                render={() => <Order cart={cart}></Order>}
              ></Route>
              <Route
                path="/register"
                exact
                render={() => <Register></Register>}
              ></Route>
              <Route path="/home" exact render={() => <Home></Home>}></Route>
              <Route path="/login" exact render={() => <Login></Login>}></Route>
            </div>

            <Sidebar setcart={setcart} cart={cart}></Sidebar>
          </div>
        </>
      </Switch>
    </>
  );
}
