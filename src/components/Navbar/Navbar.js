import React from "react";
import "./Navbar.scss";
import Auth from "../../Auth";
//const a = new Auth();
export default function Navbar({ auth }) {
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
              Auth.login("moreilly@example.net", "password");
            }}
          >
            login
          </button>
        }
      </div>
    </header>
  );
}
