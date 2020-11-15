import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
export default function Items({ cart, setcart }) {
  const url = "http://127.0.0.1:8000/api/products";
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setitems(json);
      });
  }, []);

  return (
    <>
      {items.map((item) => {
        return (
          <Item key={item.id} item={item} setcart={setcart} cart={cart}></Item>
        );
      })}
    </>
  );
}
