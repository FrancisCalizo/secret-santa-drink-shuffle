import React, { useState } from "react";

const FoolItem = ({ number }) => {
  const [fools, setFools] = useState([]);

  const handleFools = e => {
    let arr = [...fools];
    arr[number] = e.target.value;

    setFools(arr);
  };

  return (
    <div>
      <label>
        Fool #{number}
        <input type="name" name="fool" onChange={handleFools} />
      </label>
    </div>
  );
};

export default FoolItem;

// https://stackoverflow.com/questions/41841610/looping-through-text-inputs-in-react
