import React from "react";
import FoolItem from "./FoolItem";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Mando from "./Mando";

const Fools = ({ amount, fools, setFools, history }) => {
  const handleFools = (number, e) => {
    let arr = [...fools];
    arr[number] = e.target.value;

    setFools(arr);
  };

  const submitFools = e => {
    e.preventDefault();

    history.push("/santaresults");
  };

  return (
    <div>
      <Mando />
      <form onSubmit={submitFools}>
        {Array(Number(amount))
          .fill()
          .map((num, idx) => (
            <FoolItem key={idx} number={idx} handleFools={handleFools} />
          ))}
        <div>
          <input type="submit" value="This is the way" />
        </div>
      </form>
    </div>
  );
};

Fools.propTypes = {
  amount: PropTypes.string.isRequired,
  fools: PropTypes.array.isRequired,
  setFools: PropTypes.func.isRequired
};

export default withRouter(Fools);
