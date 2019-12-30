import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Amount from "./components/Amount";
import Fools from "./components/Fools";
import Results from "./components/Results";
import WhiteElephantAmount from "./components/WhiteElephant/Amount";
import WhiteElephantNavbar from "./components/WhiteElephant/Navbar";
import ElephantPicking from "./components/WhiteElephant/ElephantPicking";
import "./App.css";

const App = props => {
  const [amount, setAmount] = useState("0");
  const [fools, setFools] = useState([]);
  const [isWhiteElephant, setIsWhiteElephant] = useState(false);
  const [elephantAmount, setElephantAmount] = useState("0");

  const handleAmount = e => setAmount(e.target.value);
  const handleElephantAmount = e => setElephantAmount(e.target.value);

  return (
    <Router>
      {isWhiteElephant ? <WhiteElephantNavbar /> : <Navbar />}
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }, props) => (
            <Amount
              handleAmount={handleAmount}
              amount={amount}
              setAmount={setAmount}
              setFools={setFools}
              setIsWhiteElephant={setIsWhiteElephant}
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
        <Route
          exact
          path="/whiteelephant"
          render={() => (
            <WhiteElephantAmount
              handleElephantAmount={handleElephantAmount}
              elephantAmount={elephantAmount}
              setElephantAmount={setElephantAmount}
              setIsWhiteElephant={setIsWhiteElephant}
            />
          )}
        />
        <Route
          exact
          path="/elephantpicking"
          render={() => <ElephantPicking elephantAmount={elephantAmount} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
