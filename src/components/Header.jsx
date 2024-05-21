import React, { useState } from "react";
import "../../src/index.css";
import { useContext } from "react";
import { CounterContext } from "../hook/CounterContext";

const Header = () => {
  const { counter } = useContext(CounterContext);
  return (
    <header>
      <div className="container">
        <div className=" main-menu">
          <div className="logo">Counting Stars</div>
          <nav className="main-navigation-bar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Login</a>
            {counter}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
