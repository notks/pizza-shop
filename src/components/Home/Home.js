import React, { useState, useLayoutEffect } from "react";
import "./Home.scss";
import Auth from "../../Auth";
export default function Home({ auth }) {
  const [orders, setorders] = useState({});
  useLayoutEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/orders", {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setorders(data);
        console.log(data);
      })
      .catch((e) => {
        document.location.href = "http://127.0.0.1:3000/login";
      });
  }, []);
  return <div></div>;
}
