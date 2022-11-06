import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useSelector } from "react-redux";
import classes from "./Auth.module.css";
import { Fragment } from "react";

const Auth = () => {
  const dispatch = useDispatch();

  const signInForm = useSelector((state) => state.overlay.showSignInForm);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.loginHandler());
  };

  return (
    <Fragment>
      {signInForm && <main className={classes.auth}>
        <section>
          <h2>Login Form</h2>
          <form onSubmit={onSubmitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input required type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input required type="password" id="password" />
            </div>
            <button>Login</button>
          </form>
        </section>
      </main>}
    </Fragment>
  );
};

export default Auth;
