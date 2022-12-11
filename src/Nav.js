import React from "react";
import { Link } from "react-router-dom";
import Logo from "./giphy.mp4";

function Nav() {
  return (
    <header className="nav-header">
      <div className="logoName">Sports Dicsord</div>
      <Link to="/">
        <video className="logo" src={Logo} autoPlay muted loop></video>
      </Link>
      <Link className="nav-titles" to="/">
        Home
      </Link>
      <Link className="nav-titles" to="/about">
        About
      </Link>
    </header>
  );
}

export default Nav;
