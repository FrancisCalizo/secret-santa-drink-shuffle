import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Amount = props => {
  const [amount, setAmount] = useState(0);

  const onChange = e => setAmount(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    props.history.push("/foolnames");
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

export default withRouter(Amount);
