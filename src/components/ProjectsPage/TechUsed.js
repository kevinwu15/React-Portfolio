import styled from 'styled-components';

const TechUsed = (props) => {
    const StyledButton = styled.button`
        padding: 0.2rem;
        background-color: #0dcaf0;
        border-radius: 0.5rem;
        color: white;
        border: none;
    `
    return (
        <StyledButton>{props.name}</StyledButton>

    );
};

export default TechUsed;