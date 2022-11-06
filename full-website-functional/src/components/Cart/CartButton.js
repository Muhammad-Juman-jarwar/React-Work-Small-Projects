import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { Fragment } from 'react';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  
const showCartHandler = () => {

  dispatch(uiActions.myCartHandler());
}

  return (
    <Fragment>
    {isAuth && <button onClick={showCartHandler} className={classes.button} >
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>}
    </Fragment>
  );
};

export default CartButton; 