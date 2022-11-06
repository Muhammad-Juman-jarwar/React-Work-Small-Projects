import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { overlayActions } from '../../store/overlay-slice';
import classes from './Overlay.module.css';

const Overlay = () => {
  

  const dispatch = useDispatch();

  const signInHandler = () => {
    dispatch(overlayActions.signIn());

  };

  const signUpHandler = () => {
    dispatch(overlayActions.signUp())
  };

  return (
    <Fragment>
        <main className={classes.main}>
        <div> <h1>Welcome to My website</h1> </div>
        <div>
        <button onClick={signInHandler} className={classes.btn1}>Sign In</button>
        
        <button onClick={signUpHandler} className={classes.btn2}>Sign Up</button>
        </div>
        </main>
    </Fragment>
    );
};
export default Overlay;