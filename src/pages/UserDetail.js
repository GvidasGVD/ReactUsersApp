import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
// import useHttp from "../hooks/use-http";
// import { updateUser } from "../api/userApi";
import UserDetails from "../components/users/UserDetails";
import UserContext from "../userStorage/user-context";



const UserDetail = () => {
  const userCtx = useContext(UserContext);



  const params = useParams();
  // const { sendRequest: sendtUpdateRequest, status: updateStatus } = useHttp(updateUser, true);

  const { userId } = params;
  const selectedUserData = userCtx.persons.filter(user => {
    return user.id.toString() === userId.toString();
  })

  // const {
  //   sendRequest,
  //   status,
  //   data: loadedUser,
  //   error,
  // } = useHttp(getSingleUser, true);

  // useEffect(() => {
  //     sendRequest(userId);

  // }, [sendRequest,updateStatus, userId]);

  const sendtUpdateRequestHandler = (userData) => {
    userCtx.editUser(userData)
    // sendtUpdateRequest(data, userId);
  }

  // if (status === "pending") {
  //   return <div className="centered"> Loading...</div>;
  // }

  // if (error) {
  //   return <p className="centered focused">{error}</p>;
  // }

  if (!selectedUserData[0].id) {
    return <p>No User found</p>;
  }
  return (
    <Fragment>
      <UserDetails
              id={userId}
              name={selectedUserData[0].name}
              surname={selectedUserData[0].surname}
              birth_date={selectedUserData[0].birth_date}
              email={selectedUserData[0].email}
              password={selectedUserData[0].password}
              phone={selectedUserData[0].phone}
              identity={selectedUserData[0].identity}
              passport_number={selectedUserData[0].passport_number}
              sendUpdateRequest={sendtUpdateRequestHandler}
      />
    </Fragment>
  );
};

export default UserDetail;
