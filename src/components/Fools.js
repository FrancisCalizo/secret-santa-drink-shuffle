import React from "react";
import FoolItem from "./FoolItem";
const Fools = ({ amount }) => {
  return <div>{Array(Number(amount)).fill(<FoolItem />)}</div>;
};

export default Fools;
