import React from "react";
import Amount from "./components/Amount";
import Fools from "./components/Fools";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>The Secret Santa</h1>
      <Amount />
      <Fools />
    </div>
  );
};

export default App;
