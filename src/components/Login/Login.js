import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../Auth";

export default function Login() {
  const [msg, setmsg] = useState("");
  const handleLogin = async () => {
    // let msgDiv = document.getElementById("failed-login");
    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;
    let res = await Auth.login(email, password);
    setmsg(res);
  };
  return (
    <div>
      <div id="failed-login">{msg}</div>
      <form
        onSubmit={(e) => {
          console.log(e);
          e.preventDefault();
          handleLogin();
        }}
      >
        <input type="text" id="email-input" placeholder="email"></input>
        <input
          type="password"
          id="password-input"
          placeholder="password"
        ></input>
        <button type="submit">Log In</button>
        <Link to="register">
          <button>Sign Up</button>
        </Link>
      </form>
    </div>
  );
}
