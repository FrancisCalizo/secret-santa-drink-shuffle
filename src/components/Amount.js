import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import DrunkSanta from "./DrunkSanta";

const Amount = ({ history, amount, setAmount, handleAmount }) => {
  useEffect(() => {
    setAmount("0");
    // eslint-disable-next-line
  }, []);

  const submitAmount = e => {
    e.preventDefault();

    if (Number(amount) < 1) {
      alert("Input a Number you bafoon");
    } else {
      history.push("/foolnames");
    }
  };

  const amountFocus = e => e.target.select();

  return (
    <div className="text-center">
      <DrunkSanta />
      <form onSubmit={submitAmount}>
        <div className="card amount-fools-card">
          <label>
            Fool Count:
            <div>
              <input
                type="number"
                name="amount"
                min="0"
                onFocus={amountFocus}
                onChange={handleAmount}
                value={Number(amount)}
              />
            </div>
          </label>
        </div>
        <div>
          <input
            type="submit"
            value="I have spoken."
            className="btn btn-primary spoken"
          />
        </div>
      </form>
    </div>
  );
};

Amount.propTypes = {
  amount: PropTypes.string.isRequired,
  handleAmount: PropTypes.func.isRequired
};

export default withRouter(Amount);
