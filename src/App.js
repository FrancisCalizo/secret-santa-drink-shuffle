import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Amount from './components/Amount';
import Fools from './components/Fools';
import Results from './components/Results';
import './App.css';

const App = props => {
  const [amount, setAmount] = useState(0);
  const [fools, setFools] = useState([]);

  const handleAmount = e => setAmount(e.target.value);

  return (
    <Router>
      <div className="container">
        <h1>The Secret Santa</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }, props) => (
              <Amount handleAmount={handleAmount} amount={amount} />
            )}
          />
          <Route
            exact
            path="/foolnames"
            render={({ history }, props) => (
              <Fools amount={amount} fools={fools} setFools={setFools} />
            )}
          />
          <Route
            exact
            path="/santaresults"
            render={() => <Results fools={fools} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
