import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import classes from './LogInOut.module.css';


const LogInOut = () => {

    const dispatch = useDispatch();

    const isAuth = useSelector((state) => state.auth.isAuthenticated)

    const onLogoutHandler = () => {
        dispatch(authActions.logout());
    };

  return (
        <header className={classes.header}>
            <h1>Simple Website</h1>
            {isAuth && <nav className={classes.navbar}>
                <ul>
                    <li>About Me</li>
                    <li>Skills</li>
                </ul>
                <button onClick={onLogoutHandler}>Logout</button>
            </nav>}
        </header>
  );
};
export default LogInOut;