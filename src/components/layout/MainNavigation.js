import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <span>Users Web App</span>
        <a
        className={classes.linkToGit}
          href="https://github.com/GvidasGVD/ReactUsersApp/tree/master"
          target="_blank"
          rel="noopener noreferrer"
        >
          See code in GitHub
        </a>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/ReactUsersApp/users" activeClassName={classes.active}>
              All Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/ReactUsersApp/new-user" activeClassName={classes.active}>
              Add New User
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
