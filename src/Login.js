import React from "react";

function Login({ setUser }) {
  const LoginToApp = () => {
    // do some login stuff
    setUser("Adibe");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={LoginToApp}> LOGIN</button>
    </div>
  );
}

export default Login;
