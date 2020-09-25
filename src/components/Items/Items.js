import React from "react";
import Item from "../Item/Item";
export default function Items({ cart, setcart, items }) {
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
