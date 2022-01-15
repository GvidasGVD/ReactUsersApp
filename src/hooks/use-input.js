import { useState, useEffect, useCallback } from "react";

const useInput = (inputType, validateValue, validateLength, validateType) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [valueIsValid, setValueIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  //   const valueLengthIsValid = '';
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const setErrorMessageByInputType = useCallback((errorType) => {
    setValueIsValid(false);
    console.log('this happend')
    switch (inputType) {
      case "name":
        switch (errorType) {
          case "empty":
            setErrorMessage("Name must not be empty.");
            break;
          case "length":
            setErrorMessage("At least 2 but not more than 20 letters.");
            break;
          case "type":
            setErrorMessage("Only letters allowed.");
            break;
          default:
            setErrorMessage("");
            break;
        }
        break;
      case "surname":
        switch (errorType) {
          case "empty":
            setErrorMessage("Surname must not be empty.");
            break;
          case "length":
            setErrorMessage("At least 2 but not more than 20 letters.");
            break;
          case "type":
            setErrorMessage("Only letters allowed.");
            break;
          default:
            setErrorMessage("");
            break;
        }
        break;
      case "email":
        switch (errorType) {
          case "empty":
            setErrorMessage("Email must not be empty.");
            break;
          case "length":
            setErrorMessage("At least 5 but not more than 50 characters.");
            break;
          case "type":
            setErrorMessage("Invalid Email format.");
            break;
          default:
            setErrorMessage("");
            break;
        }
        break;
      case "password":
        switch (errorType) {
          case "empty":
            setErrorMessage("Password must not be empty.");
            break;
          case "length":
            setErrorMessage("At least 6 but not more than 16 characters.");
            break;
          default:
            setErrorMessage("");
            break;
        }
        break;
      case "phone":
        switch (errorType) {
          case "length":
            setErrorMessage("At least 5 but not more than 13 numbers.");
            break;
          case "type":
            setErrorMessage("Invalid phone number format.");
            break;
          default:
            setErrorMessage("");
            break;
        }
        break;
      case "passport_number":
        switch (errorType) {
          case "length":
            setErrorMessage("At least 5 but not more than 9 numbers.");
            break;
          case "type":
            setErrorMessage("Invalid passport number format.");
            break;
          default:
            setErrorMessage("");
            break;
        }
        break;
      default:
        setErrorMessage("");
        break;
    }
  }, [inputType]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!validateValue(enteredValue) && isTouched) {
        setErrorMessageByInputType("empty");
        return;
      }

      if (enteredValue && !validateLength(enteredValue) && isTouched) {
        setErrorMessageByInputType("length");
        return;
      }

      if (enteredValue && !validateType(enteredValue) && isTouched) {
        setErrorMessageByInputType("type");
        return;
      }
      setValueIsValid(true);
      setErrorMessage("");
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredValue, isTouched, validateValue, validateLength, validateType, setErrorMessageByInputType]);

  return {
    value: enteredValue,
    hasError,
    errorMessage,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
