import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="link" to="/"> Shop </Link>
        <Link className="link" to="/cart"> Payment Section</Link>
      </div>
    </div>
  );
};
