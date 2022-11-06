import React, { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import classes from "./Sign-Up.module.css";


const SignUp = () => {

  const [showError, setShowError] = useState(false);

  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const signUpForm = useSelector((state) => state.overlay.showSignUpForm);
  
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(passwordInputRef.current.value !== confirmPasswordInputRef.current.value){
      setShowError(true);
      return;
    }
  
  
      dispatch(authActions.loginHandler());
    };
  

  return (
    <Fragment>
      {signUpForm &&  <main className={classes.auth}>
        <section>
          <form onSubmit={onSubmitHandler}>
            <h2>Registeration Form</h2>
            <div className={classes.control}>
              <label htmlFor="name">UserName</label>
              <input required type="text" id="username" />
            </div>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input required type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input ref={passwordInputRef} required type="password" id="password" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Confirm Password</label>
              <input ref={confirmPasswordInputRef} required type="password" id="confirm-password" />
            </div>
            {showError && <p className={classes.error}>Your Password Does not Match</p>}
            <button>Sign Up</button>
          </form>
        </section>
      </main>}
    </Fragment>
  );
};
export default SignUp;
