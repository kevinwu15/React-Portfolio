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
            link="https://dorahacks.io/buidl/21809"
            name="SilentGuard"
            type="uOttaHack 7- Groq Challenge Winner, Best Use of Terraform"
            desc="SilentGuard is generative AI voice responder that can mimic phone conversations in real time while listening for an emergency keyword."
            techList={[
              "Python",
              "Flask",
              "AWS Lambda",
              "Groq",
              "Solace PubSub+ Message Broker",
              "React Native",
              "TypeScript"
            ]}
          />
        </div>
      <div className="col-md-auto">
          <ProjectCard
            colour="gold"
            link="https://devpost.com/software/touchless-g72ten"
            name="Touchless"
            type="uOttaHack 5- 2nd Overall, Phreesia Challenge Winner, Best Accessbility Hack"
            desc="Touchless is an accessible and contact-free solution for gathering form information by allowing users to interact with forms using their voice and gestures."
            techList={[
              "Python",
              "Selenium",
              "OpenCV",
              "Mediapipe",
              "Flask",
              "HTML/CSS",
              "JavaScript",
            ]}
          />
        </div>
        <div className="col-md-auto">
          <ProjectCard
            colour="gold"
            link="https://devpost.com/software/sqlidify-10i4zl"
            name="SQLidify"
            type="McHacks 10- Cohere Challenge Winner"
            desc="SQLidify is an innovative machine learning powered solution to preventing SQL injection exploits in back-end code."
            techList={[
              "Python",
              "React",
              "Tailwind",
              "Flask",
              "co:here",
              "Google Colab",
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
              "Express",
              "Leaflet.js",
              "PostgreSQL",
              "Google Identity API",
              "HTML/CSS",
              "Bootstrap",
              "JavaScript",
            ]}
          />
        </div>
        <div className="col-md-auto">
          <ProjectCard
            colour="blue"
            link="https://github.com/rejieli/TraQR"
            name="TraQR"
            type="Android App"
            desc="TraQR is an app which allows physical items to be tracked through QR codes."
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
            techList={["React", "JavaScript", "styled-components", "Netlify"]}
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
