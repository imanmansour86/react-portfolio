import React, { useState } from "react";
import validateEmail from "../../utils/helpers";

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
    validateAll();
  };

  const handleInputBlur = () => {
    validateAll();
  };

  const validateAll = () => {
    if (!validateEmail(email.value)) {
      setEmail({ value: email.value, error: "Invalid email" });
      return false;
    }
    if (!userName.value) {
      setUserName({ value: userName.value, error: "Invalid username" });
      return false;
    }
    if (!message.value) {
      setMessage({ value: message.value, error: "Invalid message" });
      return false;
    }
    return true;
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
          <label for="exampleInputEmail1">Name</label>
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
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
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
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
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
