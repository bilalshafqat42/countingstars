import React, { useContext } from "react";
import { CounterContext } from "../hook/CounterContext";

const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div className="container">
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
