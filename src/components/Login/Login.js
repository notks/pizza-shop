import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../../Auth";
export default function Login({ history }) {
  const [msg, setmsg] = useState("");
  const handleLogin = async () => {
    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;
    let res = await Auth.login(email, password);
    setmsg(res);
  };
  useEffect(() => {
    if (localStorage.getItem("AuthState")) {
      history.push("/home");
    }
  }, []);
  return (
    <div className="login_container">
      <div id="failed-login">{msg}</div>
      <form
        onSubmit={(e) => {
          console.log(e);
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          className="form-control"
          type="text"
          id="email-input"
          placeholder="email"
        ></input>
        <input
          className="form-control"
          type="password"
          id="password-input"
          placeholder="password"
        ></input>
        <div className="login_buttons">
          <button className="btn btn-primary login_btn" type="submit">
            Log In
          </button>
          <Link to="/register">
            <button className="btn btn-secondary">Sign Up</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
