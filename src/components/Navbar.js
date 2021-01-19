import React from "react";
import { Link } from "react-router-dom";
import logoimg from "./logo.jpg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav class="navbar">
        <a class="navbar-brand" href="#">
          <Link to="/" className="navbar-brand">
            <img className="imglogo" src={logoimg} alt="Logo" />
          </Link>
        </a>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <Link to="/naracaj" className="catalogg">
              Каталог
            </Link>{" "}
          </li>
          <li class="nav-item">
            <Link to="/akcija" className="action">
              Акција
            </Link>{" "}
          </li>
          <li class="nav-item">
            <Link to="/AboutUs" className="aboutUs">
              За нас
            </Link>{" "}
          </li>
          <li class="nav-item">
            <Link to="/Contact" className="contactInfo">
              Поврзи се
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
