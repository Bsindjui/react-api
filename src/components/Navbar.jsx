import React from "react";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Seker</div>
      <ul className="navbar-links">
        <li>Images</li>
        <li>Videos</li>
        <li>Maps</li>
        <li>News</li>
        <li>Product</li>
      </ul>
      <button className="navbar-signin">Sign in</button>
    </nav>
  );
}

export default Navbar;
