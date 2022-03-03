import React from "react";

const NavTabs = ({ currentPage, handlePageChange }) => {
  return (
    <div className="top">
      <div className="head-links">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#about"
              onClick={() => handlePageChange("About Me")}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#resume"
              onClick={() => handlePageChange("Resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="head">
        <h1>Iman Mansour</h1>
      </div>
    </div>
  );
};

export default NavTabs;
