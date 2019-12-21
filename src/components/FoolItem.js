import React, { useState } from 'react';

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

export default FoolItem;
