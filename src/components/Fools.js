import React, { useState } from 'react';
import FoolItem from './FoolItem';

const Fools = ({ amount }) => {
  const [fools, setFools] = useState([]);

  const handleFools = (number, e) => {
    let arr = [...fools];
    arr[number] = e.target.value;

    setFools(arr);
  };

  const submitFools = e => {
    e.preventDefault();
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

export default Fools;
