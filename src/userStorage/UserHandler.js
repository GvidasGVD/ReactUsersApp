import React from "react";
import UserContext from "./user-context";

import { useReducer } from "react";

const defaultUserState = {
  persons: [
    {
      id: "u1",
      name: "Tom",
      surname: "Riddle",
      birth_date: "1964-12-30",
      email: "tomriddle@gmail.com",
      password: "a4da6sd7",
      phone: 8675554687,
      identity: 45,
      passport_number: 46787987,
    },
    {
      id: "u2",
      name: "Rick",
      surname: "Wangog",
      birth_date: "1967-12-30",
      email: "Wangog@gmail.com",
      password: "asdasdasd",
      phone: 45647784,
      identity: 456,
      passport_number: 7898457,
    },
  ],
};

const userReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingPersonIndex = state.persons.findIndex(
      (person) => person.id === action.person.id
    );

    const existingUserItem = state.persons[existingPersonIndex];

    let updatedUsers;
    if (existingUserItem || !action.person.id) {
      alert("Cannot add person, contact administrator");
      return state.persons;
    } else {
      updatedUsers = state.persons.concat(action.person);
    }
    return {
      persons: updatedUsers,
    };
  }
  if (action.type === "REMOVE") {
    let updatedUsers;
    updatedUsers = state.persons.filter((person) => person.id !== action.id);

    return {
      persons: updatedUsers,
    };
  }

  if (action.type === "UPDATE") {
    const existingPersonIndex = state.persons.findIndex(
      (person) => person.id === action.data.id
    );
    if (existingPersonIndex >= 0) {
      let updatedUsers;
      updatedUsers = [...state.persons];
      updatedUsers[existingPersonIndex] = action.data;
      return { persons: updatedUsers };
    } else {
      alert("Something went wrong, contact administrator");
      return;
    }
  }

  return defaultUserState;
};

const UserProvider = (props) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const addPersonToUsersHandler = (person) => {
    dispatchUserAction({ type: "ADD", person: person });
  };
  const removePersonFromUsersHandler = (id) => {
    dispatchUserAction({ type: "REMOVE", id: id });
  };

  const updateUserHandler = (data) => {
    dispatchUserAction({ type: "UPDATE", data: data });
  };

  const userContext = {
    persons: userState.persons,
    addUser: addPersonToUsersHandler,
    removeUser: removePersonFromUsersHandler,
    editUser: updateUserHandler,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
