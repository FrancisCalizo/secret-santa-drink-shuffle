import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Amount = ({ history, amount, handleAmount }) => {
  const submitAmount = e => {
    e.preventDefault();

    if (Number(amount) < 1) {
      alert('Input a Number you bafoon');
    } else {
      history.push('/foolnames');
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
          onChange={handleAmount}
          value={Number(amount)}
        />
      </label>
      <div>
        <input type="submit" value="I have spoken" />
      </div>
    </form>
  );
};

Amount.propTypes = {
  amount: PropTypes.string.isRequired,
  handleAmount: PropTypes.func.isRequired
};

export default withRouter(Amount);
