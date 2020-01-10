import styled from "styled-components";

const colors = {};
const GS = {};

colors.primary = "#dc3545";
colors.elephant = "#2c3a47";
colors.dark = "#333333";
colors.light = "#f4f4f4";
colors.danger = "#dc3545";
colors.success = "#28a745";

GS.Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.2rem;
`;
GS.Card = styled.div`
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
  max-width: 500px;
`;

GS.CardShadow = styled(GS.Card)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

GS.AmountFoolsCard = styled(GS.Card)`
  width: 90%;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 500px;
  label {
    font-size: 1.5rem;
    font-weight: bold;
  }
  input[type="number"] {
    font-size: 3rem;
    width: 6rem;
    text-align: center;
    border: none;
  }
`;

GS.SubmitAmountButton = styled.input`
  -webkit-appearance: none;
  font-size: 1.2rem;
  padding: 0.6rem 3rem;
  width: 90%;
  max-width: 500px;
`;

export { GS, colors };
