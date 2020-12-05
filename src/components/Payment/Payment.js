import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Payment.scss";
export default function Payment({ modal, setmodal, setdone, done }) {
  if (modal) {
    console.log("test");
    return ReactDom.createPortal(
      <>
        <>
          {" "}
          <div className="overlay_div"></div>
        </>
        <div className="modal_main_div">
          <div className="main_content">
            <input
              type="checkbox"
              onChange={() => {
                setdone(!done);
              }}
            ></input>
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
