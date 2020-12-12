import React, { useRef, useState } from "react";
import "./Register.scss";
export default function Register() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const password2 = useRef();
  const [msg, setmsg] = useState("");
  const handleRegister = () => {
    let data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    if (password.current.value === password2.current.value) {
      fetch("http://127.0.0.1:8000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Done!") {
            document.location.href = "http://127.0.0.1:3000/login";
          } else {
            setmsg(data.message);
          }
        })
        .catch((e) => console.log(e));
      setmsg("req send pass ok!");
    } else {
      setmsg("Passwords dont match!");
    }
  };
  return (
    <div className="register_container">
      <p>{msg}</p>
      <div className="input_fields">
        <input
          className="form-control"
          type="text"
          ref={name}
          placeholder="Name"
        ></input>
        <br />
        <input
          className="form-control"
          type="text"
          ref={email}
          placeholder="Email"
        ></input>
        <br />
        <input
          className="form-control"
          type="password"
          ref={password}
          placeholder="Password"
        ></input>
        <br />
        <input
          className="form-control"
          type="password"
          ref={password2}
          placeholder="Retype password"
        ></input>
      </div>
      <button className="btn btn-primary " onClick={() => handleRegister()}>
        Sign up
      </button>
    </div>
  );
}
