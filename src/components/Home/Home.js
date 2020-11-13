import React, { useLayoutEffect, useState } from "react";
import "./Home.scss";
import Auth from "../../Auth";
import { Spinner } from "react-bootstrap";
export default function Home() {
  const [orders, setorders] = useState([]);
  const [authstate, setauthstate] = useState(false);
  const getOrders = () => {
    fetch("http://127.0.0.1:8000/api/user/orders", {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setorders(data);
      })
      .catch((e) => console.log(e));
  };
  useLayoutEffect(async () => {
    await Auth.checkAuth();
    setauthstate(true);
    getOrders();
  }, []);
  return (
    <div className="orders-container">
      {Boolean(orders) & authstate ? (
        <table className="orders">
          <thead>
            <tr>
              <th>Item</th>
              <th>What?</th>
              <th>When?</th>
              <th>Where?</th>
              <th>How muck?</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>
                    <img src={order.image} alt="product"></img>
                  </td>
                  <td>{order.name}</td>
                  <td>{order.created_at}</td>
                  <td>{order.address}</td>
                  <td>{order.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}
