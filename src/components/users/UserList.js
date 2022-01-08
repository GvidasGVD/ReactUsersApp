import { Fragment, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import UserItem from "./UserItem";
import classes from "./UserList.module.css";
import UserContext from "../../userStorage/user-context";
const sortUsers = (users, ascending) => {
  return users.sort((userA, userB) => {
    if(ascending) {
      return userA.name > userB.name ? 1: -1;
    } else {
      return userA.name < userB.name ? 1: -1;
    }
  })
}

const UserList = (props) => {
  const userCtx = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedUsers = sortUsers(userCtx.persons, isSortingAscending)


  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending?'desc':'asc')}`
    })
  };

  const newUserHandler = (userData) => {
    props.onInsertNewUser(userData);
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedUsers.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            surname={user.surname}
            phone={user.phone}
            email={user.email}
            onInsertNewUser={newUserHandler}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default UserList;
