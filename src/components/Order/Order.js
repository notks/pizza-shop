import React from "react";
import "./Order.scss";

export default function Order() {
  return (
    <div className="address-form">
      <form action="http://127.0.0.1:8000/api/orders" method="POST">
        <input
          type="text"
          className="name-input"
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          className="surname-input"
          name="surname"
          placeholder="Surname"
        />
        <br />

        <input
          type="text"
          className="address-input"
          name="address"
          placeholder="Address"
        />
        <br />
        <input
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
