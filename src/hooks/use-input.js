import { useState, useEffect } from "react";

const useInput = (validateValue, validateLength, validateType) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [hasLengthError, setHasLengthError] = useState(false);
  const [hasTypeError, setHasTypeError] = useState(false);
  console.log(hasLengthError);
  const valueIsValid = validateValue(enteredValue);
  //   const valueLengthIsValid = '';
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!validateLength(enteredValue) && isTouched) {
        setHasLengthError(true);
      } else {
        setHasLengthError(false);
      }

      if (!validateType(enteredValue) && isTouched) {
        setHasTypeError(true);
      } else {
        setHasTypeError(false);
      }
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredValue, isTouched, validateLength]);

  return {
    value: enteredValue,
    hasError,
    hasLengthError,
    hasTypeError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
