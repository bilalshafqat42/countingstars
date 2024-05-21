import React, { useContext } from "react";
import { AuthContext } from "../hook/IsAuthContext";
import Dashboard from "../pages/Dashboard";

// const IsAuth = (Component) => {
//   const isLoggedIn = useContext(AuthContext);
//   return (props) => {
//     return !isLoggedIn ? <Component {...props} /> : <Dashboard />;
//   };
// };

const IsAuth = (Component) => {
  const AuthChecker = (props) => {
    const { isLoggedIn } = useContext(AuthContext);
    console.log("isLoggedIn", isLoggedIn);
    return !isLoggedIn ? <Component {...props} /> : <Dashboard />;
  };
  return AuthChecker;
};

export default IsAuth;
