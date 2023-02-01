import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.3rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  background-color: #4C4E52;
  border-radius: 0.8rem;
  color: white;
  border: none;
  font-size: 0.875em;
`;

const TechUsed = (props) => {
  return <StyledButton>{props.name}</StyledButton>;
};

export default TechUsed;
