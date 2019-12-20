import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amount from "./components/Amount";
import Fools from "./components/Fools";
import "./App.css";

const App = props => {
  const [amount, setAmount] = useState(0);

  const handleAmount = e => setAmount(e.target.value);

  return (
    <Router>
      <div className="container">
        <h1>The Secret Santa</h1>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Amount handleAmount={handleAmount} amount={amount} />
            )}
          />
          <Route exact path="/foolnames" component={Fools} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
