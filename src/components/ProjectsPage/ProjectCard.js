import styled from "styled-components";
import TechUsed from "./TechUsed";

const ProjectCard = (props) => {
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
    border-style: solid;
    border-radius: 1rem;
    padding: 3%;
    height: 100%;
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

  return (
    <Card>
      <CardBody class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.desc}</p>
        <TechWrapper>
          {props.techList.map((tech) => (
            <a>
              <TechUsed name={tech} />
            </a>
          ))}
        </TechWrapper>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
