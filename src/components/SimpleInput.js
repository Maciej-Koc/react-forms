import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = React.useState("");
  const [enteredNameisValid, setEnteredNameisValid] = useState(true);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputRef = React.useRef();

  function nameInputChangeHandler(event) {
    return setEnteredName(event.target.value);
  }

  function formSubmissionHandler(event) {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameisValid(false);
      return; //Cancels function exection
    }

    setEnteredNameisValid(true);
  }

  const nameInputIsInvalid = !enteredNameisValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
