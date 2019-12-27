import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FoolItem = ({ number, handleFools }) => {
  return (
    <Fragment>
      <input
        type="name"
        name="fool"
        onChange={e => handleFools(number, e)}
        placeholder={`Fool #${number + 1} Name`}
        className="fool-input"
      />
    </Fragment>
  );
};

FoolItem.propTypes = {
  number: PropTypes.number.isRequired,
  handleFools: PropTypes.func.isRequired
};

export default FoolItem;
