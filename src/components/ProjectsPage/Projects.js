import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const Projects = () => {
  const FlexDiv = styled.div`
    @media (min-width: 0px) {
      width: 100%;
    }
    @media (min-width: 992px) {
      width: 80%;
    }
  `;

  
  return (
    <FlexDiv class="container text-center">
      <div class="row justify-content-md-center row-gap-4">
        <div class="col-md-auto">
          <ProjectCard
            name="Streats"
            desc="Web app which displays user-added instances of food vendors on a map, made by a team of 4 at DeltaHacks IX"
            techList={['Node.js', 'Express.js', 'Leaflet.js', 'PostgreSQL', 'Google Identity', 'Bootstrap']}
          />
        </div>
        <div class="col-md-auto">
          <ProjectCard
            name="Personal Website"
            desc="Mobile responsive portfolio website"
            techList={['React.js', 'styled-components', 'Bootstrap']}
          />
        </div>
        <div class="col-md-auto">
          <ProjectCard
            name="Earthquake Webscraper"
            desc="Python webscraping script developed as part of a project for Hack Western 9"
            techList={['Python', 'BeautifulSoup']}
          />
        </div>
        <div class="col-md-auto">
          <ProjectCard
            name="TraQR"
            desc="Android app which creates, scans, and stores item information by assigning a QR code to an item"
            techList={['Java', 'Firebase', 'XML', 'Android Studio']}
          />
        </div>
      </div>
    </FlexDiv>
  );
};

export default Projects;
