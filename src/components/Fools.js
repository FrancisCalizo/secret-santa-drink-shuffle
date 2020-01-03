import React from 'react';
import FoolItem from './FoolItem';
import PropTypes from 'prop-types';
import Mando from './Mando';
import { withRouter } from 'react-router-dom';

const Fools = ({ amount, fools, setFools, history, error, setError }) => {
  const handleFools = (number, e) => {
    let arr = [...fools];
    arr[number] = e.target.value;

    setFools(arr);
  };

  const submitFools = e => {
    e.preventDefault();

    if (fools.length < amount || fools.includes('')) {
      return setError('No blanks allowed Jabroni');
    }
    setError('');
    history.push('/santaresults');
  };

  return (
    <div className="text-center">
      <Mando />
      <form onSubmit={submitFools}>
        <div
          className="card-shadow"
          style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <h2>Names of Contestants</h2>
          <div style={{ color: '#dc3545', fontSize: '1rem' }}>{error}</div>
          {Array(Number(amount))
            .fill()
            .map((num, idx) => (
              <FoolItem key={idx} number={idx} handleFools={handleFools} />
            ))}
        </div>
        <div>
          <input
            type="submit"
            value="This is the way."
            className="the-way btn-primary"
          />
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
