import React, { useContext } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { AuthContext } from "./hook/IsAuthContext";
import IsAuth from "./HOC/IsAuth";

const App = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [password, setPassword] = React.useState("");
  // console.log(value, value.length);

  const originalPassword = "123abcdef";

  const handleSubmit = () => {
    if (password === originalPassword) {
      setIsLoggedIn(true);
      setPassword("");
    }
  };
  return (
    <div className="container">
      <Header />
      <Home />
      <h2>Form</h2>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={password.length < 8} onClick={() => handleSubmit()}>
        Submit
      </button>
    </div>
  );
};

export default IsAuth(App);
