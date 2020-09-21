import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Content}></Route>
          <Route path="/order" exact component={Navbar}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
