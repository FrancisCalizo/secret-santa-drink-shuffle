import React from 'react';

const Results = ({ fools }) => {
  return (
    <div>
      <h1>Results</h1>
      {fools.map((fool, idx) => {
        return (
          <div key={idx + 1}>
            <h2>{fool}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
