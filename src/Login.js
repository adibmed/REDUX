import React from "react";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const LoginToApp = () => {
    // do some login stuff
    // setUser("Adibe");
    dispatch({
      type: "SET_USER",
      user: "adibe",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={LoginToApp}> LOGIN</button>
    </div>
  );
}

export default Login;
