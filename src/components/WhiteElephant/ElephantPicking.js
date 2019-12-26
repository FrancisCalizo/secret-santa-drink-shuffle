import React, { useState, useEffect } from "react";

const ElephantPicking = ({ elephantAmount }) => {
  const [remaining, setRemaining] = useState([]);
  const [taken, setTaken] = useState([]);
  const [chosenOne, setChosenOne] = useState(0);

  useEffect(() => {
    setRemaining([...Array(Number(elephantAmount)).keys()].map(x => ++x));
    // eslint-disable-next-line
  }, []);

  const randomSelection = () => {
    // Pick Random Number from Remaining
    let randomIndex = Math.floor(Math.random() * Number(remaining.length));
    let selected = remaining[randomIndex];

    // Move that Number to Taken (setTaken)
    setTaken([...taken, selected]);

    // Remove that Number from Remaining (setRemaining)
    setRemaining(remaining.filter(num => num !== selected));

    setChosenOne(selected);
  };

  return (
    <div className="text-center">
      {chosenOne === 0 ? null : <h1>Drink #: {chosenOne} </h1>}
      <button onClick={randomSelection} className="sideous">
        Dew it.
      </button>
      <div className="grid-2">
        <div className="card-shadow">
          <h2>Remaining</h2>
          <div className="grid-4">
            {remaining.map((num, idx) => (
              <div
                className="card-shadow"
                key={idx}
                style={{ background: "#2ecc71" }}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
        <div className="card-shadow">
          <h2>Taken</h2>
          <div className="grid-4">
            {taken.map((num, idx) => (
              <div
                className="card-shadow"
                key={idx}
                style={{ background: "#e74c3c" }}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElephantPicking;
