import styled from 'styled-components';

const TechUsed = (props) => {
    const StyledButton = styled.button`
        padding: 0.2rem;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        background-color: #0f52ba;
        border-radius: 0.8rem;
        color: white;
        border: none;
    `
    return (
        <StyledButton>{props.name}</StyledButton>

    );
};

export default TechUsed;