import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amount from "./components/Amount";
import Fools from "./components/Fools";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>The Secret Santa</h1>
        <Switch>
          <Route exact path="/" component={Amount} />
          <Route exact path="/foolnames" component={Fools} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
