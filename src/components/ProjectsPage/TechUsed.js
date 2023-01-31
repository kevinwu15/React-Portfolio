import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.2rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background-color: #708090;
  border-radius: 0.8rem;
  color: white;
  border: none;
`;

const TechUsed = (props) => {
  return <StyledButton>{props.name}</StyledButton>;
};

export default TechUsed;
