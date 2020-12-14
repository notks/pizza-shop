import React from "react";
export default function CartItem({ item, setcart, cart }) {
  const handleQuantitychange = (event, item) => {
    const newCart = [...cart];
    newCart.forEach((cartItem) => {
      if (item.id === cartItem.id) {
        item.q = parseInt(event.target.value);
      }
    });
    setcart(newCart);
  };

  const removeCartItem = (itemId) => {
    let newCart = [...cart];
    let found = false;
    newCart.forEach((item) => {
      if (item.id === itemId) {
        if (item.q > 1) {
          item.q--;
          found = true;
        }
      }
    });
    if (found === false) {
      newCart = cart.filter((item) => item.id !== itemId);
    }

    setcart(newCart);
  };
  return (
    <div className="cart-component">
      <img src={item.image} alt="product" className="cart-product-image"></img>
      <p>{item.name} </p>
      <input
        type="number"
        value={item.q}
        min="1"
        onChange={(e) => handleQuantitychange(e, item)}
      ></input>

      <p>{item.price}$</p>
      <button
        onClick={() => {
          removeCartItem(item.id);
        }}
      >
        <b>-</b>
      </button>
    </div>
  );
}
