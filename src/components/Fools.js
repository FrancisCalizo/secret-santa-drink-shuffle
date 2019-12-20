import React from "react";
import FoolItem from "./FoolItem";

const Fools = ({ amount }) => {
  const submitFools = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitFools}>
        {Array(Number(amount))
          .fill()
          .map((num, idx) => (
            <FoolItem key={idx} number={idx + 1} />
          ))}
        <div>
          <input type="submit" value="This is the way" />
        </div>
      </form>
    </div>
  );
};

export default Fools;
