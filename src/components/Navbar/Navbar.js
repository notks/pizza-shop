import React from "react";
import "./Navbar.scss";
import axios from "axios";
import Auth from "../../Auth";
//const a = new Auth();
export default function Navbar({ auth }) {
  const data = { email: "d@b", password: "password" };
  return (
    <header>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for products"
          name="search"
        ></input>

        <img src="/img/SearchIcon.svg" alt="search icon"></img>
      </div>
      <div className="cart-login">
        <button
          className="cart-btn"
          onClick={() => {
            Auth.logout();
          }}
        >
          <img
            className="cart-icon"
            src="/img/supermarketlight.svg"
            alt="Cart-icon"
          ></img>
        </button>
        {
          <button
            className="login-btn"
            onClick={() => {
              Auth.login("d@b", "password");
            }}
          >
            login
          </button>
        }
      </div>
    </header>
  );
}
