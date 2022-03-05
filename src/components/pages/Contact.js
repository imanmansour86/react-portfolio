import React, { useState } from "react";
import validateEmail from "../../utils/helpers";
import Error from "./Error";

const emptyObject = { value: "", error: undefined };
const Contact = () => {
  const [email, setEmail] = useState(emptyObject);
  const [userName, setUserName] = useState(emptyObject);
  const [message, setMessage] = useState(emptyObject);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;

    const newValue = { value: target.value, error: undefined };
    if (inputType === "email") {
      setEmail(newValue);
    } else if (inputType === "userName") {
      setUserName(newValue);
    } else {
      setMessage(newValue);
    }
  };

  const handleInputBlur = () => {
    validateAll();
  };

  const validateAll = () => {
    if (!validateEmail(email.value)) {
      setEmail({ value: email.value, error: "Invalid email" });
    }
    if (!userName.value) {
      console.log("ssss");
      setUserName({ value: userName.value, error: "Invalid username" });
    }
    if (!message.value) {
      setMessage({ value: message.value, error: "Invalid message" });
    }
    return validateEmail(email.value) && !!userName.value && !!message.value;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setEmail(emptyObject);
    setUserName(emptyObject);
    setMessage(emptyObject);
  };

  return (
    <div className="form">
      <h1 className="card-title">Contact</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            value={userName.value}
            onBlur={handleInputBlur}
            name="userName"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          {userName.error && <Error error={userName.error} />}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={email.value}
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
          {email.error && <Error error={email.error} />}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="form-control"
            rows="3"
            value={message.value}
            type="message"
            name="message"
            placeholder="Enter message"
          ></textarea>
          {message.error && <Error error={message.error} />}
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
    </div>
  );
};

export default Contact;
