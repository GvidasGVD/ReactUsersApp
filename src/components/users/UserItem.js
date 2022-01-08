import React from "react";
import classes from "./UserItem.module.css";
import { Link } from "react-router-dom";

const UserItem = (props) => {

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.name}</p>
          <p>{props.surname}</p>
        </blockquote>
        <figcaption>Tel.: {props.phone}</figcaption>
        <figcaption>Email: {props.email}</figcaption>
      </figure>
      <Link className="btn users_details_btn" to={`/users/${props.id}`}>
        View Details
      </Link>

    </li>
  );
};

export default UserItem;
