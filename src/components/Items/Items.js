import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import Item from "../Item/Item";
export default function Items({ cart, setcart }) {
  const url = "https://lsbv1.herokuapp.com/api/products";
  const [items, setitems] = useState([]);
  const [msg, setmsg] = useState("");
  const getItems = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setitems(json);
      })
      .catch((e) => {
        setmsg(
          "Heroku dynos are not started yet please wait a couple of seconds!"
        );
        getItems();
      });
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      {items.length > 0 ? (
        items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              setcart={setcart}
              cart={cart}
            ></Item>
          );
        })
      ) : (
        <div className="spinner_div">
          <Spinner animation="border" role="status"></Spinner>
          <br></br>
          <span>{msg}</span>
        </div>
      )}
    </>
  );
}
