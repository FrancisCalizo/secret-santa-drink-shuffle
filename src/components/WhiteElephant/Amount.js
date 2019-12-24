import React from "react";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import WhiteElephant from "./WhiteElephant";

const Amount = ({ history, setIsWhiteElephant }) => {
  const handleGameChange = () => {
    setIsWhiteElephant(false);
    history.push("/");
  };

  return (
    <div className="text-center">
      <WhiteElephant handleGameChange={handleGameChange} />
      <h1>This is White Elephant</h1>
    </div>
  );
};

export default withRouter(Amount);
