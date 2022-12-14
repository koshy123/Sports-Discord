import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/giphy.mp4";
import "../css/Nav.css";

function Nav() {
  return (
    <nav className="nav-header" style={{ paddingBlock: "2rem" }}>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          textDecoration: "none",
        }}
      >
        <video className="logo" src={Logo} autoPlay muted loop></video>
        <span className="logoName">Sports Discord</span>
      </Link>
      <div style={{ display: "flex", gap: "3rem" }}>
        <Link className="nav-titles" to="/">
          Home
        </Link>
        <Link className="nav-titles" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
