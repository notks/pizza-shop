import React from "react";
import "./Item.scss";
export default function Item({ cart, setcart, item }) {
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
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="container">
      <img src={item.image} alt="item"></img>
      <div>
        <div>
          <p>{item.ingreadiants}</p>
        </div>
        <p>{item.name}</p>
        <h1>{item.price}</h1>
        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
