import React from "react";
import "./Navbar.scss";
import Auth from "../../Auth";
//const a = new Auth();
export default function Navbar({ auth }) {
  return (
    <header>
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
            Auth.logout();
          }}
        >
          <img
            className="cart_icon"
            src="/img/supermarketlight.svg"
            alt="Cart-icon"
          ></img>
        </button>
        {
          <button
            className="login_btn"
            onClick={() => {
              Auth.login("dstanton@example.com", "password");
            }}
          >
            login
          </button>
        }
      </div>
    </header>
  );
}
