import React from "react";
import closeIcon from "../assets/images/icon-close.svg";

export default function HeaderMenu({ mobile = false, handleCloseIcon }) {
  return (
    <nav className={`menu ${mobile ? "menu--mobile" : ""}`}>
      {mobile ? <img className='menu--mobile__close-icon' src={closeIcon} onClick={handleCloseIcon}/> : ""}
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">shop</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
}
