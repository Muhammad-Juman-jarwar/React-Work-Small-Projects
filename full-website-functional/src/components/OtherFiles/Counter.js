import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../../store/counter-slice';
import classes from './Counter.module.css';


const Counter = () => {

  const counterInitial = useSelector((state) => state.counter.counterValue);

  // const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementCounterHandler = () => {
    dispatch(counterActions.incrementHandler());
  };
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrementHandler());
  };
  const increaseCounterHandler = () => {
    dispatch(counterActions.increaseHandler(10))
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleHandler());
  };

  return (
    <Fragment>
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterInitial}</div>}
      
      <button onClick={incrementCounterHandler}>increment</button>
      <button onClick={increaseCounterHandler}>Increase By 10</button>
      <button onClick={decrementCounterHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
    </Fragment>
  );
};

export default Counter;