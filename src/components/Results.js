import React, { useState, useEffect } from 'react';

const Results = ({ amount, fools }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    let numbers = [];

    while (numbers.length < amount) {
      let num = Math.floor(Math.random() * amount) + 1;

      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }

    setOrder(numbers);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Results</h1>
      {fools.map((fool, idx) => {
        return (
          <div key={idx + 1}>
            <h2>
              {fool} - {order[idx]}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
