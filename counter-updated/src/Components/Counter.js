import { useRef } from "react";
import { useState } from "react";

import classes from "./Counter.module.css";

const Counter = () => {
  const [initialValue, setInitialValue] = useState(0);

  const numberInputRef = useRef();

  const incrementHandler = () => {
    setInitialValue(initialValue + 1);
  };

  const decrementHandler = () => {
    setInitialValue(initialValue - 1);
  };

  const neutralHandler = () => {
    setInitialValue(0);
  };

  const numberChangehandler = () => {
    const no = numberInputRef.current.value;
  };



  const increaseHandler = () => {
    setInitialValue(initialValue + parseInt(numberInputRef.current.value));
    numberInputRef.current.value = "";
  };

  return (
    <div className={classes.value}>
      <h1>React Counter</h1>
      <div className={classes.val}>{initialValue}</div>

      <button
        id="button"
        className={`${classes.button1} ${classes.button}`}
        onClick={incrementHandler}
      >
        Increment
      </button>
      <button
        id="button"
        className={`${classes.button1} ${classes.button}`}
        onClick={decrementHandler}
      >
        Decrement
      </button>
      <button
        id="button"
        className={`${classes.button1} ${classes.button}`}
        onClick={neutralHandler}
      >
        Neutral
      </button>

      <input
        id="inputField"
        onChange={numberChangehandler}
        ref={numberInputRef}
        type="number"
        placeholder="Enter Any Number "
        className={classes.control}
      />

      <button
        id="button"
        className={`${classes.button1} ${classes.button}`}
        onClick={increaseHandler}
      >
        Increase by Number
      </button>
    </div>
  );
};
export default Counter;
