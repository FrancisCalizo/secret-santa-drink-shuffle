import React from 'react';
import FoolItem from './FoolItem';
import { withRouter } from 'react-router-dom';

const Fools = ({ amount, fools, setFools, history }) => {
  const handleFools = (number, e) => {
    let arr = [...fools];
    arr[number] = e.target.value;

    setFools(arr);
  };

  const submitFools = e => {
    e.preventDefault();

    history.push('/santaresults');
  };

  return (
    <div>
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

export default withRouter(Fools);
