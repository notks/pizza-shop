import React, { useEffect, useState, useRef } from "react";
import Payment from "../Payment/Payment";
import Auth from "../../Auth";
import { Spinner } from "react-bootstrap";
export default function Order({ cart, history }) {
  const [authState, setauthstate] = useState(false);
  const address = useRef();
  const telephone = useRef();
  const order = {};
  const [modal, setmodal] = useState(false);
  const [done, setdone] = useState(false);
  const notifyMe = () => {
    if (!window.Notification) {
      alert("Browser does not support notifications.");
    } else {
      // check if permission is already granted
      if (Notification.permission === "granted") {
        // show notification here
        var options = {
          body: "Your order has been added to your history!",
          icon: "img/pizza_logo2.png",
          vibrate: [100, 100, 100],
          timeout: 2000,
        };
        new Notification("Your order has been added!", options);
      } else {
        // request permission from user
        Notification.requestPermission()
          .then(function (p) {
            if (p === "granted") {
              // show notification here
              var options = {
                body: "Your order has been added to your history!",
                icon: "img/pizza_logo2.png",
                vibrate: [100, 100, 100],
                timeout: 2000,
              };
              new Notification("Your order has been added!", options);
            } else {
              console.log("User blocked notifications.");
            }
          })
          .catch(function (err) {
            console.error(err);
          });
      }
    }
  };
  const submitOrder = (e) => {
    e.preventDefault();
    order.address = address.current.value;
    order.telephone = telephone.current.value;
    order.cart = cart;
    console.log(order);
    fetch("https://lsbv1.herokuapp.com/api/user/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        notifyMe();
        history.push("/home");
      })
      .catch((e) => console.log(e));
  };
  const nextStep = () => {
    let stepNum1 = document.querySelector(".step_1");
    let stepNum2 = document.querySelector(".step_2");
    let step2 = document.querySelector(".step_2_fields");
    let step1 = document.querySelector(".step_1_fields");
    let backBtn = document.querySelector(".back_btn");
    let submitBtn = document.querySelector(".submit_btn");
    let nextBtn = document.querySelector(".next_btn");

    stepNum1.classList.remove("active_step");
    stepNum2.classList.add("active_step");
    step1.style.display = "none";
    step2.style.display = "flex";
    nextBtn.style.display = "none";
    backBtn.style.display = "block";
    submitBtn.style.display = "block";
  };
  const prevStep = () => {
    let stepNum1 = document.querySelector(".step_1");
    let stepNum2 = document.querySelector(".step_2");
    let step2 = document.querySelector(".step_2_fields");
    let step1 = document.querySelector(".step_1_fields");
    let backBtn = document.querySelector(".back_btn");
    let submitBtn = document.querySelector(".submit_btn");
    let nextBtn = document.querySelector(".next_btn");

    stepNum2.classList.remove("active_step");
    stepNum1.classList.add("active_step");
    step1.style.display = "block";
    step2.style.display = "none";
    nextBtn.style.display = "block";
    backBtn.style.display = "none";
    submitBtn.style.display = "none";
  };
  useEffect(() => {
    Auth.auth(setauthstate);
  }, []);
  return (
    <>
      {authState ? (
        <div className="address-form">
          <form
            onSubmit={(e) => {
              submitOrder(e);
            }}
          >
            <div className="input_steps">
              <span className="step_1 active_step">Step 1</span>
              <span className="step_2 ">Step 2</span>
            </div>
            <div className="input_fields">
              <div className="step_1_fields">
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
              </div>
              <div className="step_2_fields">
                <button
                  className="paypal_btn btn btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    setmodal(true);
                  }}
                >
                  Paypal
                </button>
                <button
                  className="stripe_btn btn btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    setmodal(true);
                  }}
                >
                  Stripe
                </button>

                <Payment
                  modal={modal}
                  done={done}
                  setdone={setdone}
                  setmodal={setmodal}
                ></Payment>
              </div>
              <button
                className="back_btn btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  prevStep();
                }}
              >
                Back
              </button>
              <button
                className="next_btn btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                Next
              </button>
              <button
                disabled={!done}
                className="submit_btn btn btn-primary"
                onClick={(e) => {
                  submitOrder(e);
                  console.log("a");
                }}
              >
                Finish
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </>
  );
}
