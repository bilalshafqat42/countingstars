import React, { useState, createContext } from "react";

export const CounterContext = createContext(null);

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const values = { counter, setCounter };

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
