import React, { useState } from "react";

const Amount = () => {
  const [amount, setAmount] = useState(0);

  const onChange = e => setAmount(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Amount of Fools:
        <input type="number" name="amount" min="0" onChange={onChange} />
      </label>
      <div>
        <input type="submit" value="Begin" />
      </div>
    </form>
  );
};

export default Amount;
