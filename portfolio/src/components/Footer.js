import React from "react";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container pt-4" id="contact">
        <section className="mb-4">
          <a
            target="blank"
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="mailto:imanmansour86@gmail.com"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            target="blank"
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/imanmansour/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            target="blank"
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/imanmansour86"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center copyright p-3 copyright">
        © 2022 Copyright Iman Mansour
      </div>
    </footer>
  );
};

export default Footer;
