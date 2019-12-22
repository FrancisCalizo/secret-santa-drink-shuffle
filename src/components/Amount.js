import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import DrunkSanta from './DrunkSanta';

const Amount = ({ history, amount, setAmount, handleAmount }) => {
  useEffect(() => {
    setAmount('0');
    // eslint-disable-next-line
  }, []);

  const submitAmount = e => {
    e.preventDefault();

    if (Number(amount) < 1) {
      alert('Input a Number you bafoon');
    } else {
      history.push('/foolnames');
    }
  };

  return (
    <div className="sec1">
      <DrunkSanta />
      <div className="sec2">
        <form onSubmit={submitAmount} id="amount-submit">
          <label>
            Amount of Fools:
            <input
              type="number"
              name="amount"
              min="0"
              onChange={handleAmount}
              value={Number(amount)}
            />
          </label>
          <div>
            <input type="submit" value="I have spoken" />
          </div>
        </form>
      </div>
    </div>
  );
};

Amount.propTypes = {
  amount: PropTypes.string.isRequired,
  handleAmount: PropTypes.func.isRequired
};

export default withRouter(Amount);
