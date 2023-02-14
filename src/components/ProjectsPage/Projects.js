import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const FlexDiv = styled.div`
  @media (min-width: 0px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 80%;
  }
`;
const Projects = () => {
  return (
    <FlexDiv>
      <div className="row justify-content-md-center row-gap-4">
      <div className="col-md-auto">
          <ProjectCard
            colour="gold"
            link="https://devpost.com/software/touchless-g72ten"
            name="Touchless"
            type="uOttaHack 5- 2nd Overall, 1st Place Phreesia Challenge, Best Accessbility Hack"
            desc="Touchless is an accessible and contact-free solution for gathering form information by allowing users to interact with forms using their voice and gestures."
            techList={[
              "Python",
              "Selenium",
              "OpenCV",
              "Mediapipe",
              "Speech-to-Text",
              "Text-to-Speech",
              "Flask",
              "AWS",
              "HTML",
              "CSS",
              "JavaScript",
            ]}
          />
        </div>
        <div className="col-md-auto">
          <ProjectCard
            colour="gold"
            link="https://devpost.com/software/sqlidify-10i4zl"
            name="SQLidify"
            type="McHacks 10- 2nd Place Cohere Challenge"
            desc="SQLidify is an innovative machine learning powered solution to preventing SQL injection exploits in back-end code."
            techList={[
              "Python",
              "Flask",
              "co:here",
              "Google Colab",
              "React.js",
              "Tailwind CSS",
            ]}
          />
        </div>
        <div className="col-md-auto">
          <ProjectCard
            colour="blue"
            link="https://devpost.com/software/streats"
            name="Streats"
            type="DeltaHacks IX"
            desc="Streats is a web app that allows people to find and share unique street food."
            techList={[
              "Node.js",
              "Express.js",
              "Leaflet.js",
              "PostgreSQL",
              "Google Identity API",
              "Bootstrap",
            ]}
          />
        </div>
        <div className="col-md-auto">
          <ProjectCard
            colour="blue"
            link="https://github.com/rejieli/TraQR"
            name="TraQR"
            type="Android App"
            desc="TraQR is an Android app which allows physical items to be tracked through QR codes."
            techList={[
              "Java",
              "Firebase",
              "XML",
              "Android SDK",
              "Android Studio",
              "Adobe XD",
            ]}
          />
        </div>
        <div className="col-md-auto">
          <ProjectCard
            colour="blue"
            link="https://github.com/kevinwu15/react-portfolio"
            name="Personal Portfolio"
            type="Web Page"
            desc="Mobile-responsive portfolio website; the site you're currently on right now"
            techList={["React.js", "Bootstrap", "styled-components", "Netlify"]}
          />
        </div>
        <div className="col-md-auto">
          <ProjectCard
            colour="blue"
            link="https://github.com/kevinwu15/AdventOfCode"
            name="Advent of Code 2022"
            type="Coding Challenge"
            desc="My first attempt of Advent of Code, where I completed the first 11 days"
            techList={["Python"]}
          />
        </div>
        <div className="col-md-auto">
          <ProjectCard
            colour="blue"
            link="https://github.com/Geodude-hw9/server"
            name="Earthquake Webscraper"
            type="Script"
            desc="Earthquake data webscraper developed as part of a project for Hack Western 9"
            techList={["Python", "Beautiful Soup"]}
          />
        </div>
      </div>
    </FlexDiv>
  );
};

export default Projects;
