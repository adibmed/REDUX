import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // Access user locally
  const [user, setUser] = useState(null);
  // Access user globally
  const [state, dipatch] = useStateValue();
  // Disctrucring the state
  // const [{ user }, dipatch] = useStateValue();

  return (
    <div className="app">
      {/* <h3>{user ? `This is my app${user}` : `No user is logged in`}</h3> */}
      <h3>
        {state.user ? `This is my app${state.user}` : `No user is logged in`}
      </h3>
      <Login />
    </div>
  );
}

export default App;
