import React from "react";

const Contact = () => {
  return (
    <div className="form">
      <h1 className="card-title">Contact</h1>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-check"></div>

        <button type="submit" className="btn btn-primary">
          Send &rarr; &nbsp;<i className="fa-solid fa-chevrons-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
