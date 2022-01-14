import classes from "./UserDetails.module.css";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useRef, useContext } from "react";
// import useHttp from "../../hooks/use-http";
// import { deleteUser } from "../../api/userApi";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
// import { userSchema } from "../../validations/UserValidation";
import UserContext from "../../userStorage/user-context";
import { validateUserData } from "../../validations/FormDataValidation";

const UserDetails = (props) => {
  const history = useHistory();
  const userCtx = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState();

  // const { sendRequest: sendtDeleteRequest, status: deleteStatus } = useHttp(
  //   deleteUser,
  //   true
  // );

  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const birthdateInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const phoneInputRef = useRef();
  const identityInputRef = useRef();
  const passportnumberInputRef = useRef();
  const deleteUserHandler = () => {
    confirmAlert({
      title: "Delete this user?",
      message: "",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            userCtx.removeUser(props.id);
            history.push("/ReactUsersApp/users");
          },
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };

  // useEffect(() => {
  //   if (deleteStatus === "completed") {
  // history.push("/users");
  //   }
  // }, [deleteStatus, history]);

  const editToggleUserHandler = () => {
    setEditing(!editing);
  };

  const submitEditingHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value
      ? nameInputRef.current.value
      : props.name;
    const enteredSurname = surnameInputRef.current.value
      ? surnameInputRef.current.value
      : props.surname;
    const enteredBirthdate = birthdateInputRef.current.value
      ? birthdateInputRef.current.value
      : props.birth_date;
    const enteredEmail = emailInputRef.current.value
      ? emailInputRef.current.value
      : props.email;
    const enteredPassword = passwordInputRef.current.value
      ? passwordInputRef.current.value
      : props.password;
    const enteredPhone = phoneInputRef.current.value
      ? phoneInputRef.current.value
      : props.phone;
    const enteredIdentity = identityInputRef.current.value
      ? identityInputRef.current.value
      : props.identity;
    const enteredPassportnumber = passportnumberInputRef.current.value
      ? passportnumberInputRef.current.value
      : props.passport_number;

    const userData = {
      id: props.id,
      name: enteredName,
      surname: enteredSurname,
      birth_date: enteredBirthdate,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
      identity: enteredIdentity,
      passport_number: enteredPassportnumber,
    };
    editToggleUserHandler();
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
      props.sendUpdateRequest(userData, props.id);
    }
    // const isValid = await userSchema.isValid(userData);
    // if (isValid) {
    //   props.sendUpdateRequest(userData);
    // } else {
    //   alert("Could not update, wrong values inserted");
    // }
  };

  const usersNameInput = (
    <input type="text" placeholder={props.name} ref={nameInputRef} />
  );
  const usersSurnameInput = (
    <input type="text" placeholder={props.surname} ref={surnameInputRef} />
  );
  const usersNameInBirthDateput = <input type="date" ref={birthdateInputRef}/>;
  const usersEmailInput = (
    <input type="email" placeholder={props.email} ref={emailInputRef} />
  );
  const usersPasswordInput = (
    <input type="password" placeholder="******" ref={passwordInputRef} />
  );
  const usersPhoneInput = (
    <input type="number" placeholder={props.phone} ref={phoneInputRef} />
  );
  const usersIdentityInput = (
    <select className={classes.identity_field} id="identity" ref={identityInputRef}>
    <option value="ID">
      ID
    </option>
    <option value="Passport">Passport</option>
  </select>
  );
  const usersPassportNoInput = (
    <input
      type="number"
      placeholder={props.passport_number}
      ref={passportnumberInputRef}
    />
  );

  return (
    <div className={classes.details}>
      {error && (
        <div className={classes.error_box}>
          {" "}
          <div className={classes.error_title}>{error.title}</div>
          <div className={classes.error_message}>{error.message}</div>
        </div>
      )}
      <div className={classes.flex}>
        <p>Name: </p>
        <p>{!editing ? props.name : usersNameInput}</p>
      </div>
      <div className={classes.flex}>
        <p>Surname: </p>
        <p>{!editing ? props.surname : usersSurnameInput}</p>
      </div>
      <div className={classes.flex}>
        <p>Date of Birth: </p>
        <p>{!editing ? props.birth_date : usersNameInBirthDateput}</p>
      </div>
      <div className={classes.flex}>
        <p>Email: </p>
        <p>{!editing ? props.email : usersEmailInput}</p>
      </div>
      <div className={classes.flex}>
        <p>Password: </p>
        <p>{!editing ? "*****" : usersPasswordInput}</p>
      </div>
      <div className={classes.flex}>
        <p>Phone: </p>
        <p>{!editing ? props.phone : usersPhoneInput}</p>
      </div>
      <div className={classes.flex}>
        <p>Identity: </p>
        <p>{!editing ? props.identity : usersIdentityInput}</p>
      </div>
      <div className={classes.flex}>
        <p>Passport No: </p>
        <p>{!editing ? props.passport_number : usersPassportNoInput}</p>
      </div>
      <div className={classes.btnField}>
        <Link
          className={`btn ${classes.detailsBtn}`}
          to={"/ReactUsersApp/users"}
        >
          Back
        </Link>
        <button
          className={`btn ${classes.detailsBtn}`}
          onClick={editToggleUserHandler}
        >
          {!editing ? "Edit" : "Cancel editing"}
        </button>
        {editing && (
          <button
            className={`btn ${classes.detailsBtn}`}
            onClick={submitEditingHandler}
          >
            Save
          </button>
        )}
        <button
          className={`btn ${classes.detailsBtn}`}
          onClick={deleteUserHandler}
        >
          Delete User
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
