import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Amount from './components/Amount';
import Fools from './components/Fools';
import Results from './components/Results';
import './App.css';

const App = props => {
  const [amount, setAmount] = useState('0');
  const [fools, setFools] = useState([]);

  const handleAmount = e => setAmount(e.target.value);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }, props) => (
            <Amount
              handleAmount={handleAmount}
              amount={amount}
              setAmount={setAmount}
            />
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
          render={() => <Results fools={fools} amount={amount} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
