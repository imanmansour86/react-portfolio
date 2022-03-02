import React from "react";

const Header = () => {
  return (
    <div className="top">
      <div className="head-links">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">About Me</a>
          </li>
        </ul>
      </div>
      <div className="head">
        <h1>Iman Mansour</h1>
      </div>
    </div>
  );
};

export default Header;
