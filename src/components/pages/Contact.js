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
      setMessage(inputValue)
     }
     if (!email || !userName || !message) {
      setErrorMessage(inputType+ " is required");
  };
  }

  const handleInputBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

     if (!email || !userName || !message) {
      setErrorMessage("Required");
      return
     }
     if (inputType==="email" && !validateEmail(inputValue))
      setErrorMessage("Email is invalid")
  };
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail || !userName || !message) {
      setErrorMessage("Email or username or message is invalid");
      return;
    }
    setEmail("");
    setUserName("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="form">
      <h1 className="card-title">Contact</h1>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            value={userName}
            onBlur={handleInputBlur}
            name="userName"
            onChange={handleInputChange}
            type="text"
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
            onBlur={handleInputBlur}
            type="email"
            name="email"
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
            onBlur={handleInputBlur}
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
