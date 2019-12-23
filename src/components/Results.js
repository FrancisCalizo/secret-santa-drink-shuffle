import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Yoda from "./Yoda";

const Results = ({ amount, fools }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    let numbers = [];

    while (numbers.length < Number(amount)) {
      let num = Math.floor(Math.random() * Number(amount)) + 1;

      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }

    setOrder(numbers);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Yoda />
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

Results.propTypes = {
  amount: PropTypes.string.isRequired,
  fools: PropTypes.array.isRequired
};

export default Results;
