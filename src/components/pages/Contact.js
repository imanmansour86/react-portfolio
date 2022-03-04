import React, { useState } from "react";
import validateEmail from "../../utils/helpers";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail || !userName) {
      setErrorMessage("Email or username is invalid");
      return;
    }
    setEmail("");
    setUserName("");
    setMessage("");
  };

  return (
    <div className="form">
      <h1 className="card-title">Contact</h1>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="userName"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="username"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            value={email}
            onChange={handleInputChange}
            type="email"
            className="form-control"
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
            onChange={handleInputChange}
            className="form-control"
            rows="3"
            value={message}
            type="message"
            name="message"
          ></textarea>
        </div>
        <div className="form-check"></div>

        <button
          type="submit"
          onClick={handleFormSubmit}
          className="btn btn-primary"
        >
          Send &rarr; &nbsp;<i className="fa-solid fa-chevrons-right"></i>
        </button>
      </form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
