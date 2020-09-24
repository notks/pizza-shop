import React from "react";
import Item from "../Item/Item";
export default function Items({ cart, setcart, items }) {
  const addToCart = (item) => {
    const newCart = [...cart];
    let found = false;
    newCart.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.q++;
        found = true;
      }
    });
    if (found === false) {
      item.q = 1;
      newCart.push(item);
    }

    setcart(newCart);
    localStorage.setItem('cart',JSON.stringify(cart))
  };
  return (
    <>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            addToCart={addToCart}
            item={item}
            setcart={setcart}
            cart={cart}
          ></Item>
        );
      })}
    </>
  );
}
