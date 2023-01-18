import styled from 'styled-components';

const TechUsed = (props) => {
    const StyledButton = styled.button`
        padding: 0.25rem;
        background-color: #808080;
        border-radius: 0.5rem;
        color: white;
        border: none;
        $:hover {
            background-color: black;
        }
    `
    return (
        <StyledButton type="button">{props.name}</StyledButton>

    );
};

export default TechUsed;