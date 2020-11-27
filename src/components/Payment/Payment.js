import React from "react";
import ReactDom from "react-dom";
export default function Payment({ close }) {
  return ReactDom.createPortal(
    <>
      <div>this is payment modal</div>
      <button onClick={close()}>X</button>
    </>,
    document.getElementById("portal")
  );
}
