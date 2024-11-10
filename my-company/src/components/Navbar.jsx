import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style= {{backgroundColor: "pink" , justifyContent: "center" }}>
      <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
