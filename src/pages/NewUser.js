import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import NewUserForm from "../components/users/NewUserForm";
// import useHttp from '../hooks/use-http';
// import { addUser } from '../api/userApi';
import UserContext from "../userStorage/user-context";

const NewUser = () => {
  // const { sendRequest, status} = useHttp(addUser);
  const history = useHistory();
  const userCtx = useContext(UserContext);
  // useEffect(() => {
  //     if(status === 'completed') {
  //         history.push('/users')
  //     }
  // }, [status, history])

  const addUserHandler = (userData) => {
    userCtx.addUser(userData);
    history.push("/ReactUsersApp/users");
    // sendRequest(userData)
  };
  return <NewUserForm onAddUser={addUserHandler} />;
};

export default NewUser;
