import { useRef, useState } from "react";
// import { userSchema } from "../../validations/UserValidation";
import Card from "../ui/Card";
import classes from "./NewUserForm.module.css";
import { validateUserData } from "../../validations/FormDataValidation";
import useInput from "../../hooks/use-input";

const regexOnlyLetters = /^[a-zA-Z].*[\s\.]*$/;
const regexOnlyNumbers = /^[0-9]*$/;
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const NewUserForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasEmptyError: nameInputHasEmptyError,
    hasLengthError: nameInputHasLengthError,
    hasTypeError: nameInputHasTypeError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(
    (value) => value.trim() !== "",
    (value) => value.length >= 2 && value.length <= 20,
    (value) => regexOnlyLetters.test(value)
  );

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    hasEmptyError: surnameInputHasEmptyError,
    hasLengthError: surnameInputHasLengthError,
    hasTypeError: surnameInputHasTypeError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
  } = useInput(
    (value) => value.trim() !== "",
    (value) => value.length >= 2 && value.length <= 20,
    (value) => regexOnlyLetters.test(value)
  );

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasEmptyError: emailInputHasEmptyError,
    hasLengthError: emailInputHasLengthError,
    hasTypeError: emailInputHasTypeError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(
    (value) => value.trim() !== "",
    (value) => value.length >= 5 && value.length <= 50,
    (value) => regexEmail.test(value)
  );

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasEmptyError: passwordInputHasEmptyError,
    hasLengthError: passwordInputHasLengthError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(
    (value) => value.trim() !== "",
    (value) => value.length >= 6 && value.length <= 15,
    (value) => (value) // here should use regex for passwords
  );

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasLengthError: phoneInputHasLengthError,
    hasTypeError: phoneInputHasTypeError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(
    (value) => (value),
    (value) => value.length >= 5 && value.length <= 13,
    (value) => regexOnlyNumbers.test(value)
  );

  const {
    value: enteredPassportNumber,
    isValid: enteredPassportNumberIsValid,
    hasLengthError: passportNumberInputHasLengthError,
    hasTypeError: passportNumberInputHasTypeError,
    valueChangeHandler: passportNumberChangeHandler,
    inputBlurHandler: passportNumberBlurHandler,
  } = useInput(
    (value) => (value),
    (value) => value.length >= 5 && value.length <= 9,
    (value) => regexOnlyNumbers.test(value)
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

  var nameInputErrorText = nameInputHasEmptyError
    ? "Name must not be empty."
    : nameInputHasLengthError
    ? "At least 2 but not more than 20 letters."
    : nameInputHasTypeError
    ? "Only letters allowed."
    : null;

  var nameInputError = (
    <p className={classes.error_text}>{nameInputErrorText}</p>
  );

  var surnameInputErrorText = surnameInputHasEmptyError
    ? "Surname must not be empty."
    : surnameInputHasLengthError
    ? "At least 2 but not more than 20 letters."
    : surnameInputHasTypeError
    ? "Only letters allowed."
    : null;

  var surnameInputError = (
    <p className={classes.error_text}>{surnameInputErrorText}</p>
  );

  var emailInputErrorText = emailInputHasEmptyError
    ? "Email must not be empty."
    : emailInputHasLengthError
    ? "At least 5 but not more than 50 characters."
    : emailInputHasTypeError
    ? "Invalid Email format."
    : null;

  var emailInputError = (
    <p className={classes.error_text}>{emailInputErrorText}</p>
  );

  var passwordInputErrorText = passwordInputHasEmptyError
  ? "Password must not be empty."
  : passwordInputHasLengthError
  ? "At least 6 but not more than 16 characters."
  : null;

var passwordInputError = (
  <p className={classes.error_text}>{passwordInputErrorText}</p>
);

var phoneInputErrorText = phoneInputHasLengthError
? "At least 5 but not more than 13 characters."
: phoneInputHasTypeError
? "Invalid phone number format."
: null;

var phoneInputError = (
<p className={classes.error_text}>{phoneInputErrorText}</p>
);

var passportNumberInputErrorText = passportNumberInputHasLengthError
? "At least 5 but not more than 9 characters."
: passportNumberInputHasTypeError
? "Invalid passport number number format."
: null;

var passportNumberInputError = (
<p className={classes.error_text}>{passportNumberInputErrorText}</p>
);



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
              className={`${!enteredNameIsValid ? classes.error_input_border: ''}`}
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
              onChange={surnameChangeHandler}
              onBlur={surnameBlurHandler}
              value={enteredSurname}
              className={`${!enteredSurnameIsValid ? classes.error_input_border: ''}`}
            />
            {surnameInputError}
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
              onChange={emailChangeHandler}
              value={enteredEmail}
              onBlur={emailBlurHandler}
              className={`${!enteredEmailIsValid ? classes.error_input_border: ''}`}
            ></input>
            {emailInputError}
          </div>
          <div>
            <input
              id="password"
              type="password"
              required
              ref={passwordInputRef}
              placeholder="Password"
              title="Password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              className={`${!enteredPasswordIsValid ? classes.error_input_border: ''}`}
              value={enteredPassword}
            ></input>
            {passwordInputError}
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
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              className={`${!enteredPhoneIsValid ? classes.error_input_border: ''}`}
              value={enteredPhone}
            ></input>
            {phoneInputError}
          </div>
          <div>
            <input
              id="passportnumber"
              type="number"
              ref={passportnumberInputRef}
              placeholder="Passport/ID number"
              title="Passport/ID number"
              onChange={passportNumberChangeHandler}
              onBlur={passportNumberBlurHandler}
              className={`${!enteredPassportNumberIsValid ? classes.error_input_border: ''}`}
            ></input>
            {passportNumberInputError}
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
