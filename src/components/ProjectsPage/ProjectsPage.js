import Projects from './Projects';
import styled from 'styled-components';

const ProjectPage = () => {
    const FlexPage = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        overflow-x: hidden;
    `
    const ColFlex = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    const Title = styled.h1`
        margin-top: 2%;
        margin-bottom: 2%;
    `

    return (
        <FlexPage id='projects'>
            <ColFlex>
                <Title>Projects</Title>
                <Projects />
            </ColFlex>
        </FlexPage>
    );
};

export default ProjectPage;