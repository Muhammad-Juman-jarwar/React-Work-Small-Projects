import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './LoginForm.module.css';

const LoginForm = (props) => {

  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const dispatch = useDispatch();

  const onLoginHandler = (event) => {
    event.preventDefault();

    const Name = nameInputRef.current.value;
    const Email = emailInputRef.current.value;

    if(Name.trim().length === 0){
      return;
    };
    if(Email.trim().length === 0){
      return;
    }

    dispatch(authActions.login());
  };


  return (
    <form onSubmit={onLoginHandler} className={classes.form}>
        <h2>Login Form</h2>
        <label htmlFor="name">Name</label>
        <input ref={nameInputRef} type="text" placeholder='xyz...' />
        <label htmlFor="email">E-Mail Address</label>
        <input ref={emailInputRef} type="email" placeholder='xyz@gmail.com' />
        <button>Login</button>
    </form>
  );
};
export default LoginForm;