import styled from "styled-components";
import TechUsed from "./TechUsed";

const ProjectCard = (props) => {
  const colorBank = {"gold":"#f59e0b", "blue":"#7393B3"}
  const colour = colorBank[props.colour];

  const Card = styled.div`
    @media (min-width: 0px) {
      width: 90vw;
    }
    @media (min-width: 768px) {
      width: 40vw;
    }
    @media (min-width: 992px) {
      width: 20vw;
    }
    height: auto;
    border-color: #4C4E52;
    border-style: solid;
    border-width: 0.1rem;
    border-radius: 1rem;
    padding: 3%;
    height: 100%;
    margin: auto;
    transition: all 0.1s;
    :hover {
      border-style: ridge;
      border-color: ${colour};
      transform: translateY(-0.5rem);
    }
  `;

  const CardBody = styled.div`
    width: auto;
  `

  const TechWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    width: auto;
    flex-wrap: wrap;
  `

  const LinkStyle = styled.svg`
    float: right;
    width: 100%;
    max-width: 30px;
    height: auto;
    :hover {
      fill: ${colour};
    }
  `

  const Desc = styled.p`
    font-size: 0.9em;
  `

  const Subtitle = styled.h6`
    color: ${colour};
  `

  return (
    <Card>
      <CardBody className="card-body">
        <a href={props.link} target="_blank" rel="noreferrer">
          <LinkStyle xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-link" viewBox="0 0 16 16">
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
          </LinkStyle>
        </a>
        <h5 className="card-title">{props.name}</h5>
        <Subtitle className="card-subtitle mb-2">{props.type}</Subtitle>
        <Desc className="card-text">{props.desc}</Desc>
        <TechWrapper>
          {props.techList.map((tech, index) => (
            <div key={index}>
              <TechUsed name={tech} />
            </div>
          ))}
        </TechWrapper>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;