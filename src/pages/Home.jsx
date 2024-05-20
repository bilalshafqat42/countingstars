import React, { useContext } from "react";
import { CounterContext } from "../hook/CounterContext";
import Form from "../components/Form";

const Home = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h2>Counter Section</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <hr />
      <h2>Form Section</h2>
      <Form />
    </div>
  );
};

export default Home;
