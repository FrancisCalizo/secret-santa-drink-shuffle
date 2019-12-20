import React from "react";
import { withRouter } from "react-router-dom";

const Amount = props => {
  const submitAmount = e => {
    e.preventDefault();

    if (Number(props.amount) < 1) {
      alert("Input a Number you bafoon");
    } else {
      props.history.push("/foolnames");
    }
  };

  return (
    <form onSubmit={submitAmount}>
      <label>
        Amount of Fools:
        <input
          type="number"
          name="amount"
          min="0"
          onChange={props.handleAmount}
          value={props.amount}
        />
      </label>
      <div>
        <input type="submit" value="Begin" />
      </div>
    </form>
  );
};

export default withRouter(Amount);
