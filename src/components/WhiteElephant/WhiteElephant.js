import React from 'react';
import styled from 'styled-components';

const WhiteElephantImage = styled.img`
  cursor: pointer;
  width: 18rem;
`;

const WhiteElephant = ({ handleGameChange }) => {
  return (
    <div>
      {/* <img
        id="white-elephant"
        src={require('../../santa-dab.png')}
        alt="white-elephant"
        onClick={handleGameChange}
        style={{ cursor: 'pointer' }}
      /> */}
      <WhiteElephantImage
        src={require('../../santa-dab.png')}
        alt="white-elephant"
        onClick={handleGameChange}
      />
    </div>
  );
};

export default WhiteElephant;
