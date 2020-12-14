import React from "react";
import Auth from "../../Auth";
export default function Dropdown({ history, visible }) {
  if (visible) {
    return (
      <>
        <div className="dropdown_menu_main" id="dropdown_menu_main">
          <button
            className="dropdown_button"
            onClick={() => {
              history.push("/home");
            }}
          >
            Home
          </button>
          <button
            className="dropdown_button"
            onClick={async () => {
              await Auth.logout();
            }}
          >
            Logout
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
}
