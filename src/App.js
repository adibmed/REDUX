import React, { useState } from "react";
import "./App.css";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      <h1>Login</h1>
      <h3>{user ? `This is my app${user}` : `No user is logged in`}</h3>
      <Login setUser={setUser} />
    </div>
  );
}

export default App;
