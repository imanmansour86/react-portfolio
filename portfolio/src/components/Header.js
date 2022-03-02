import React from "react";
import style from "./style.css";

const Header = () => {
  return (
    <body>
      <div>
        <div>
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
    </body>
  );
};

export default Header;
