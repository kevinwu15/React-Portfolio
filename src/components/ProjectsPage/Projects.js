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
            link="https://devpost.com/software/streats"
            name="Streats"
            type="Web App"
            desc="Displays user-added instances of food vendors on a map, made by a team of 4 at DeltaHacks IX"
            techList={['Node.js', 'Express.js', 'Leaflet.js', 'PostgreSQL', 'Google Identity', 'Bootstrap', 'JavaScript']}
          />
        </div>
        <div class="col-md-auto">
          <ProjectCard
            link="https://github.com/rejieli/TraQR"
            name="TraQR"
            type="Android App"
            desc="Creates, scans, and stores item information by assigning a QR code to each item"
            techList={['Java', 'Firebase mAuth', 'Firestore Database', 'XML', 'Android Studio', 'Adobe XD']}
          />
        </div>
        <div class="col-md-auto">
          <ProjectCard
            link="https://github.com/kevinwu15/react-portfolio"
            name="Personal Portfolio"
            type="Web Page"
            desc="Mobile-responsive portfolio website; the site you're currently on right now"
            techList={['React.js', 'Netlify', 'styled-components', 'Bootstrap']}
          />
        </div>
        <div class="col-md-auto">
          <ProjectCard
            link="https://github.com/Geodude-hw9/server"
            name="Earthquake Webscraper"
            type="Script"
            desc="Earthquake data webscraper developed as part of a project for Hack Western 9"
            techList={['Python', 'BeautifulSoup', 'CSV']}
          />
        </div>
      </div>
    </FlexDiv>
  );
};

export default Projects;
