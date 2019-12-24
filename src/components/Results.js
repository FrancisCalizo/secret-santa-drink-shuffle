import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Yoda from "./Yoda";

const Results = ({ amount, fools }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    shuffle();
    // eslint-disable-next-line
  }, []);

  const handleRedo = () => {
    shuffle();
  };

  const shuffle = () => {
    let numbers = [];

    while (numbers.length < Number(amount)) {
      let num = Math.floor(Math.random() * Number(amount)) + 1;

      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }

    setOrder(numbers);
  };

  return (
    <div className="text-center">
      <Yoda />
      <h1 style={{ color: "#dc3545", fontSize: "3rem" }}>Results</h1>
      <div
        className="card"
        style={{
          width: "80%",
          marginLeft: "10%",
          marginRight: "10%",
          border: "none",
          boxShadow:
            " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
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
      <div className="grid-2 justify-center">
        <button onClick={handleRedo} className="btn-dark shuffle my-1">
          Reshuffle
        </button>
        <Link to="/" className="btn-primary shuffle my-1">
          Play Again
        </Link>
      </div>
    </div>
  );
};

Results.propTypes = {
  amount: PropTypes.string.isRequired,
  fools: PropTypes.array.isRequired
};

export default Results;
