import React from "react";

const NavTabs = ({ currentPage, handlPageChange }) => {
  return (
    <div className="top">
      <div className="head-links">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#about"
              onClick={() => handlPageChange("About")}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#portfolio"
              onClick={() => handlPageChange("Portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              onClick={() => handlPageChange("Contact")}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#resume"
              onClick={() => handlPageChange("Resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="head">
        <h1 className="name">Iman Mansour</h1>
      </div>
      <footer>test</footer>
    </div>
  );
};

export default NavTabs;
