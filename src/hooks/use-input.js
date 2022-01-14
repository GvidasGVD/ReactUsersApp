import { useState, useEffect } from "react";

const useInput = (validateValue, validateLength, validateType) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [hasLengthError, setHasLengthError] = useState(false);
  const [hasTypeError, setHasTypeError] = useState(false);
  const [hasEmptyError, setHasEmptyError] = useState(false);
  const [valueIsValid, setValueIsValid] = useState(true);
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
      if(!validateValue(enteredValue) && isTouched){
        setHasEmptyError(true)
        setValueIsValid(false)
      } else {
        setHasEmptyError(false)
      }

      if (!validateLength(enteredValue) && isTouched) {
        setHasLengthError(true);
        setValueIsValid(false)
      } else {
        setHasLengthError(false);
      }

      if (!validateType(enteredValue) && isTouched) {
        setHasTypeError(true);
        setValueIsValid(false)
      } else {
        setHasTypeError(false);
      }

      if(validateValue(enteredValue) && validateLength(enteredValue) && validateType(enteredValue) && isTouched){
        setValueIsValid(true)
      }
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredValue, isTouched, validateLength]);

  return {
    value: enteredValue,
    hasError,
    hasEmptyError,
    hasLengthError,
    hasTypeError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
