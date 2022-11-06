import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import classes from './Header.module.css';

const Header = () => {
  
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated)

  const onLogoutHandler = () => {
    dispatch(authActions.logoutHandler());
    window.location.reload(false)
  };

  return (
    <Fragment>
    {isAuth && <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={onLogoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>}
    </Fragment>
  );
};

export default Header;