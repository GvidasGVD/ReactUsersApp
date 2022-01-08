import React from "react";

const UserContext = React.createContext({
  persons: [],
  addUser: (person) => {},
  removeUser: (id) => {},
  editUser: (data) => {},
});

export default UserContext;
