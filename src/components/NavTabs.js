import React from "react";

const NavTabs = ({ currentPage, handlPageChange }) => {
  return (
    <div className="top">
      <div className="head-links">
        <ul className="nav justify-content-center">
          <li className="nav-item ">
            <a
              className={
                currentPage === "About" ? "nav-link notactive " : "nav-link  "
              }
              aria-current="page"
              href="#about"
              onClick={() => handlPageChange("About")}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                currentPage === "Portfolio"
                  ? "nav-link notactive "
                  : "nav-link  "
              }
              href="#portfolio"
              onClick={() => handlPageChange("Portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                currentPage === "Contact" ? "nav-link notactive " : "nav-link  "
              }
              href="#contact"
              onClick={() => handlPageChange("Contact")}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                currentPage === "Resume" ? "nav-link notactive " : "nav-link  "
              }
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
    </div>
  );
};

export default NavTabs;
