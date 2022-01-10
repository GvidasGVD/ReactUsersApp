import { useRef, useState } from "react";
// import { userSchema } from "../../validations/UserValidation";
import Card from "../ui/Card";
import classes from "./NewUserForm.module.css";
import { validateUserData } from "../../validations/FormDataValidation";

const NewUserForm = (props) => {
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
          <div className="w-50">
            <label htmlFor="Name">Name</label>
            <input type="text" required id="Name" ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor="Surname">Surname</label>
            <input type="text" required id="Surname" ref={surnameInputRef} />
          </div>
        </div>
        <div className={classes.control}>
          <div>
            <label htmlFor="birthdate">Birth Date</label>
            <input
              type="date"
              required
              id="birthdate"
              ref={birthdateInputRef}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required ref={emailInputRef}></input>
          </div>
        </div>
        <div className={classes.control}>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              ref={passwordInputRef}
            ></input>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="number"
              required
              ref={phoneInputRef}
            ></input>
          </div>
        </div>
        <div className={classes.control}>
          <div>
            <label htmlFor="identity">Identity</label>
            <select id="identity" ref={identityInputRef} required>
              <option value="ID" defaultValue>
                ID
              </option>
              <option value="Passport">Passport</option>
            </select>
          </div>
          <div>
            <label htmlFor="passportnumber">Passport Number</label>
            <input
              id="passportnumber"
              type="number"
              required
              ref={passportnumberInputRef}
            ></input>
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
