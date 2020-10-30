import React, { useEffect, useRef } from "react";
import Auth from "../../Auth";
import "./Order.scss";
export default function Order({ checkAuth, cart }) {
  Auth.checkAuth();
  const address = useRef();
  const telephone = useRef();

  const order = {};
  const submitOrder = (e) => {
    e.preventDefault();
    order.address = address.current.value;
    order.telephone = telephone.current.value;
    order.cart = cart;
    console.log(order);
    fetch("http://127.0.0.1:8000/api/user/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) =>{ console.log('res data');console.log(data)})
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    // checkAuth()
  }, []);
  return (
    <div className="address-form">
      <form
        onSubmit={(e) => {
          submitOrder(e);
        }}
      >
        <input
          ref={address}
          type="text"
          className="address-input"
          name="address"
          placeholder="Address"
        />
        <br />
        <input
          ref={telephone}
          type="text"
          className="telephone-input"
          name="phone"
          placeholder="Telephone"
        />
        <br />
        <input
          type="checkbox"
          name="savetoaccount"
          defaultValue="false"
        ></input>
        <button>paypal</button>
        <button>stripe</button>

        <button disabled type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
