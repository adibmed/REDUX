import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout, selectUser } from "./userSlice";

function Login() {
  const disptach = useDispatch();
  const user = useSelector(selectUser);

  const loginToApp = () => {
    disptach(setUser({ user: "Adibe" }));
  };

  return (
    <div>
      <h3>I am the login</h3>
      <button onClick={loginToApp}>Login</button>
      <br />
      <button onClick={() => disptach(logout())}>Logout</button>
      <br />
      <h1>{user ? `${user.user}` : "Nobody singnin"}</h1>
    </div>
  );
}

export default Login;
