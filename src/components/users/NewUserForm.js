import { useRef, useState } from "react";
// import { userSchema } from "../../validations/UserValidation";
import Card from "../ui/Card";
import classes from "./NewUserForm.module.css";
import { validateUserData } from "../../validations/FormDataValidation";
import useInput from "../../hooks/use-input";

const regexOnlyLetters = /^[a-zA-Z].*[\s\.]*$/;
const NewUserForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    hasLengthError: nameInputHasLengthError,
    hasTypeError: nameInputHasTypeError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(
    (value) => value.trim() !== "",
    (value) => value.length >= 2 && value.length <= 20,
    (value) => regexOnlyLetters.test(value)
  );

  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const birthdateInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const phoneInputRef = useRef();
  const identityInputRef = useRef();
  const passportnumberInputRef = useRef();
  const [error, setError] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredBirthdate = birthdateInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredIdentity = identityInputRef.current.value;
    const enteredPassportnumber = passportnumberInputRef.current.value;

    const userData = {
      id: "u" + (Math.random() * 1000000).toFixed().toString(),
      name: enteredName,
      surname: enteredSurname,
      birth_date: enteredBirthdate,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
      identity: enteredIdentity,
      passport_number: enteredPassportnumber,
    };
    const {
      isValid,
      title: errorTitle,
      message: errorMessage,
    } = validateUserData(userData);

    if (!isValid) {
      setError({
        title: errorTitle,
        message: errorMessage,
      });
      return;
    } else {
      props.onAddUser(userData);
    }
    // const isValid = await userSchema.isValid(userData);
    // if (isValid) {
    //   props.onAddUser(userData);
    // } else {
    //   alert("Could not create, wrong values inserted");
    // }
  };

  var nameInputError = nameInputHasError ? (
    <p className={classes.error_text}>Name must not be empty.</p>
  ) : nameInputHasLengthError ? (
    <p className={classes.error_text}>
      At least 2 but not more than 20 letters.
    </p>
  ) : nameInputHasTypeError ? (
    <p className={classes.error_text}>Only letters allowed.</p>
  ) : null;
  return (
    <Card>
      {error && (
        <div className={classes.error_box}>
          {" "}
          <div className={classes.error_title}>{error.title}</div>
          <div className={classes.error_message}>{error.message}</div>
        </div>
      )}
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <div>
            <input
              type="text"
              required
              id="Name"
              ref={nameInputRef}
              placeholder="Name"
              title="Name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputError}
          </div>

          <div>
            <input
              type="text"
              required
              id="Surname"
              ref={surnameInputRef}
              placeholder="Surname"
              title="Surname"
            />
          </div>
        </div>
        <div className={classes.control}>
          <div>
            <input
              id="email"
              type="email"
              required
              ref={emailInputRef}
              placeholder="Email"
              title="Email"
            ></input>
          </div>
          <div>
            <input
              id="password"
              type="password"
              required
              ref={passwordInputRef}
              placeholder="Password"
              title="Password"
            ></input>
          </div>
        </div>
        <div className={classes.control}>
          <div>
            <input
              id="phone"
              type="number"
              ref={phoneInputRef}
              placeholder="Phone"
              title="Phone"
            ></input>
          </div>
          <div>
            <input
              id="passportnumber"
              type="number"
              ref={passportnumberInputRef}
              placeholder="Passport/ID number"
              title="Passport/ID number"
            ></input>
          </div>
        </div>
        <div className={classes.control}>
          <div>
            <label htmlFor="identity">Identity</label>
            <select id="identity" ref={identityInputRef}>
              <option value="ID" defaultValue>
                ID
              </option>
              <option value="Passport">Passport</option>
            </select>
          </div>
          <div>
            <label htmlFor="birthdate">Birth Date</label>
            <input type="date" id="birthdate" ref={birthdateInputRef} />
          </div>
        </div>
        <div className={classes.actions}>
          <button>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default NewUserForm;
