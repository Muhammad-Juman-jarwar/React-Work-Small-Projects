import { useState } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const error = useSelector((state) => state.counter.showError);

  const [isError, setIsError] = useState(error);

  const useInputRef = useRef(0);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
    setIsError(error); 
  };

  const increaseHandler = () => {
    const number = parseInt(useInputRef.current.value);

    // setIsError(error);
    if (useInputRef.current.value.trim().length === 0) {
      return setIsError(!error); 
    }
  
  dispatch(counterActions.increase(number));
  useInputRef.current.value = "";
    setIsError(error);
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    setIsError(error);
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    setIsError(error);
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <h2 className={classes.value}>{counter}</h2>}
      <div>
        <input ref={useInputRef} type="number" placeholder="Enter Any No" />
        {isError && <p>To Increase Value By Your Choice <br/> Plz fill  out input first </p>}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by __</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button className={classes.btn} onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
