import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Users Web App
        <a
        className={classes.linkToGit}
          href="https://github.com/GvidasGVD/usersWebApp/tree/master/src"
          target="_blank"
          rel="noopener noreferrer"
        >
          See code in GitHub
        </a>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/users" activeClassName={classes.active}>
              All Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-user" activeClassName={classes.active}>
              Add New User
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
