import React from "react";
import img from "./robolution.png";
import'./Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <img className="roboimg" src={img} alt="nil" width={"30px"}/>
      <a class="navbar-brand mx-2 logo-brand " href="/">
        Robolution Club of Bit
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mx-3 ">
          <li className="nav-item mx-2 my-1 text-light"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item mx-2 my-1 text-light"><a href="/" className="nav-link">Events</a></li>
          <li className="nav-item mx-2 my-1 text-light"><a href="/" className="nav-link">Board</a></li>
          <li className="nav-item mx-2 my-1 text-light"><a href="/" className="nav-link">About Us</a></li>
          <li className="nav-item mx-2 my-1 text-light"><a href="/" className="nav-link">Join Us</a></li>
        </ul>
      </div>
    </nav>
  );
}
