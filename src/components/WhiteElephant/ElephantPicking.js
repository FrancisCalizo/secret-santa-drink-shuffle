import React, { useState, useEffect } from "react";

const ElephantPicking = ({ elephantAmount }) => {
  const [remaining, setRemaining] = useState([]);
  const [taken, setTaken] = useState([]);

  useEffect(() => {
    setRemaining([...Array(Number(elephantAmount)).keys()].map(x => ++x));
    // eslint-disable-next-line
  }, []);

  const onClick = () => {};

  return (
    <div className="text-center">
      <h1>Jabroni Count: {elephantAmount}</h1>
      <div className="grid-2">
        <div>Remaining</div>
        <div>Taken</div>
      </div>
      <button onClick={onClick}>Dew it.</button>
    </div>
  );
};

export default ElephantPicking;
