import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
export default function Items({ cart, setcart }) {
  const url = "https://lsbv1.herokuapp.com/api/products";
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
