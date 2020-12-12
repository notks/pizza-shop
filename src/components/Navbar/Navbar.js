import React, { useState } from "react";
import "./Navbar.scss";
import Dropdown from "../Dropdown/Dropdown";
//const a = new Auth();
//import history from "../../history";

export default function Navbar({ history }) {
  const [dropdown, setdropdown] = useState(false);
  // const dropdownref = useRef()
  const [auth, setauth] = useState(localStorage.getItem("AuthState"));
  let modal = document.getElementById("dropdown_menu_main");
  let loginbtn = document.getElementById("login_btn");
  window.onclick = function (event) {
    if (event.target !== modal && event.target !== loginbtn) {
      setdropdown(false);
    }
  };
  return (
    <header className="nav_header">
      <div className="search_box">
        <input
          type="text"
          placeholder="Search for products"
          name="search"
        ></input>

        <img src="/img/SearchIcon.svg" alt="search icon"></img>
      </div>
      <div className="cart_login">
        <button
          className="cart_btn"
          onClick={() => {
            history.push("/order");
          }}
        >
          <img
            className="cart_icon"
            src="/img/supermarketlight.svg"
            alt="Cart-icon"
          ></img>
        </button>

        <button
          id="login_btn"
          className="login_btn"
          onClick={() => {
            if (auth) {
              setdropdown(!dropdown);
              //history.push("/home");
            } else {
              history.push("/login");
            }

            // Auth.login("dstanton@example.com", "password");
          }}
        >
          {auth ? "Home" : "Login"}
        </button>
        <Dropdown history={history} visible={dropdown}></Dropdown>
      </div>
    </header>
  );
}
