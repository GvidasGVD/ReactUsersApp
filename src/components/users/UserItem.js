import React from "react";
import classes from "./UserItem.module.css";
import { Link } from "react-router-dom";
import { BsTelephone, BsEnvelope } from "react-icons/bs";

const UserItem = (props) => {

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.name}</p>
          <p>{props.surname}</p>
        </blockquote>
        <figcaption><BsTelephone className={classes.icons} /> {props.phone}</figcaption>
        <figcaption><BsEnvelope className={classes.icons}/> {props.email}</figcaption>
      </figure>
      <Link className="btn users_details_btn" to={`/ReactUsersApp/users/${props.id}`}>
        View Details
      </Link>

    </li>
  );
};

export default UserItem;
