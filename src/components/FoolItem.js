import React from 'react';
import PropTypes from 'prop-types';

const FoolItem = ({ number, handleFools }) => {
  return (
    <div>
      <label>
        Fool #{number + 1}
        <input type="name" name="fool" onChange={e => handleFools(number, e)} />
      </label>
    </div>
  );
};

FoolItem.propTypes = {
  number: PropTypes.number.isRequired,
  handleFools: PropTypes.func.isRequired
};

export default FoolItem;
