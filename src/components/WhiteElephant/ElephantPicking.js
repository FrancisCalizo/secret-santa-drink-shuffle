import React from 'react';

const ElephantPicking = ({ elephantAmount }) => {
  return (
    <div className="text-center">
      <h1>Jabroni Count: {elephantAmount}</h1>
      <div className="grid-2">
        <div>Remaining</div>
        <div>Taken</div>
      </div>
      <button>Hit me.</button>
    </div>
  );
};

export default ElephantPicking;
