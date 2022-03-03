import React from "react";

const styles = {
  footer: {
    backgroundColor: "#f1f1f1",
  },
  copyright: {
    color: "#1b9aaa",
    fontSize: "0.9rem",
  },
  google: {
    backgroundColor: "#dd4b39",
  },
  github: {
    backgroundColor: "#333333",
  },
  linkedIn: {
    backgroundColor: "#0082ca",
  },
};

const Footer = () => {
  return (
    <footer className="text-center text-white" style={styles.footer}>
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1"
            style={styles.google}
            href="mailto:imanmansour86@gmail.com"
            role="button"
          >
            <i class="fab fa-google"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={styles.github}
            href="https://github.com/imanmansour86"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={styles.linkedIn}
            href="https://www.linkedin.com/in/imanmansour/"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center text-dark p-3 copyright"
        style={styles.copyright}
      >
        © 2020 Copyright Iman Mansour
      </div>
    </footer>
  );
};

export default Footer;
