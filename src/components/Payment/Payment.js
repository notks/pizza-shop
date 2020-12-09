import React from "react";
import ReactDom from "react-dom";
import "./Payment.scss";
export default function Payment({ modal, setmodal, setdone, done, method }) {
  if (modal) {
    return ReactDom.createPortal(
      <>
        <>
          <div className="overlay_div"></div>
        </>
        <div className="modal_main_div">
          <div className="main_content">
            {method === "stripe" ? (
              <>
                {" "}
                <p>Stripe payment verified</p>
                <p>(Full payment proccessors coming soon)</p>{" "}
                <input
                  type="checkbox"
                  onChange={() => {
                    setdone(!done);
                  }}
                ></input>
              </>
            ) : (
              <>
                {" "}
                <p>Paypal payment verified</p>
                <p>(Full payment proccessors coming soon)</p>
                <input
                  type="checkbox"
                  onChange={() => {
                    setdone(!done);
                  }}
                ></input>
              </>
            )}
          </div>
          <button
            className="close_btn"
            onClick={() => {
              setmodal(false);
            }}
          >
            X
          </button>
        </div>
      </>,
      document.getElementById("portal")
    );
  }
  return null;
}
