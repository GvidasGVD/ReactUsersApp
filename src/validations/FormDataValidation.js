
  const regexOnlyLetters = /^[a-zA-Z].*[\s.]*$/
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateUserData(userData) {
  const {
    name,
    surname,
    birth_date,
    email,
    password,
    phone,
    identity,
    passport_number,
  } = userData;
  var validation = { title: "", message: "", isValid: true };

  const validateOnlyLetters = (inputData) => {
    return regexOnlyLetters.test(inputData)
  };
  if (
    name.trim().length === 0 ||
    surname.trim().length === 0 ||
    birth_date.trim().length === 0 ||
    email.trim().length === 0 ||
    password.trim().length === 0 ||
    identity.trim().length === 0 
  ) {
    validation = {
      title: "Invalid input",
      message: "Cannot insert empty values.",
      isValid: false,
    };
  }

  if (name.length < 2 || name.length > 20 || !validateOnlyLetters(name)) {
    validation = {
      title: "Invalid Name",
      message:
        "Name should be at least 2 symbols and not more than 20 symbols. Only letters allowed",
      isValid: false,
    };
  }

  if (surname.length < 2 || surname.length > 20 || !validateOnlyLetters(surname)) {
    validation = {
      title: "Invalid Surname",
      message:
        "Surname should be at least 2 symbols and not more than 20 symbols. Only letters allowed",
      isValid: false,
    };
  }

  if (password.length < 6 || password.length > 15) {
    validation = {
      title: "Invalid Password",
      message: "Should be at least 6 symbols but not more than 15 symbols",
      isValid: false,
    };
  }

  if (phone.length < 5 || phone.length > 13) {
    validation = {
      title: "Invalid Phone number",
      message: "Should be at least 5 but not more than 13 digits ",
      isValid: false,
    };
  }

  if (identity !== "ID" && identity !== "Passport") {
    validation = {
      title: "Identity error",
      message: "Only ID or Passport can be chosen ",
      isValid: false,
    };
  }

  if (passport_number.length < 5 || passport_number.length > 9) {
    validation = {
      title: "Invalid Passport number",
      message: "Should be at least 5 but not more than 9 digits ",
      isValid: false,
    };
  }

  if (new Date(birth_date) > new Date()) {
    validation = {
      title: "Invalid Date of Birth",
      message: "Please insert valid date of birth",
      isValid: false,
    };
  }
  const validateEmail = (email) => {
    return regexEmail.test(email);
  };
  if (!validateEmail(email) || email.length > 50) {
    validation = {
      title: "Invalid Email format",
      message: "Please check if email format is correct",
      isValid: false,
    };
  }

  return validation;
}
