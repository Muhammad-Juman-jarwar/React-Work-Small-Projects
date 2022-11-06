import { Fragment } from 'react';
// import { useSelector } from 'react-redux';
import classes from './UserProfile.module.css';


const UserProfile = () => {

  // const isAuth = useSelector((state) => state.auth.isAuthenticated)

  return (
    <Fragment>
    <main className={classes.profile}>
      <h2>My User Shop is here</h2>
    </main>
    </Fragment>
  );
};

export default UserProfile;