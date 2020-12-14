import React from "react";
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
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <div className="item_card">
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
          Add To Cart{" "}
        </button>
      </div>
    </div>
  );
}
