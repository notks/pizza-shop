import React, { useState } from "react";
import Auth from "../../Auth";

export default function Login() {
  const [msg, setmsg] = useState("");
  const handleLogin = async () => {
    let msgDiv = document.getElementById("failed-login");
    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;
    let res = Auth.login(email, password, setmsg());
    console.log(res);
  };
  return (
    <div>
      <div id="failed-login">{msg}</div>
      <form
        onSubmit={async (e) => {
          console.log(e);
          e.preventDefault();
          await handleLogin();
        }}
      >
        <input type="text" id="email-input" placeholder="email"></input>
        <input
          type="password"
          id="password-input"
          placeholder="password"
        ></input>
        <button type="submit">Log In</button>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
