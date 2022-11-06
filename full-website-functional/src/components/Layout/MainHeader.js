import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
    {isAuth && <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>}
    </Fragment>
  );
};

export default MainHeader;
