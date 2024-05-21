import React from "react";
import Form from "../components/Form";
import Counter from "../components/Counter";

const Home = () => {
  return (
    <div className="container">
      <h2>Counter Section</h2>
      <Counter />
      <hr />
      {/* <h2>Form Section</h2>
      <Form /> */}
    </div>
  );
};

export default Home;
