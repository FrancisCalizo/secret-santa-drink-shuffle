import React from "react";
import PropTypes from "prop-types";

const FoolItem = ({ number, handleFools }) => {
  return (
    <div className="zero-auto">
      <input
        type="name"
        name="fool"
        onChange={e => handleFools(number, e)}
        placeholder={`Fool #${number + 1}`}
        className="fool-input"
      />
    </div>
  );
};

FoolItem.propTypes = {
  number: PropTypes.number.isRequired,
  handleFools: PropTypes.func.isRequired
};

export default FoolItem;
