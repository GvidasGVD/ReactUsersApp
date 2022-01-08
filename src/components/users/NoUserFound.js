import classes from './NoUserFound.module.css';
import { Link } from 'react-router-dom'

const NoUserFound = () => {
  return (
    <div className={classes.nousers}>
      <p>No users found!</p>
      <Link className='btn' to='/new-user'>
        Add New User
      </Link>
    </div>
  );
};

export default NoUserFound;
