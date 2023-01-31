import styled from "styled-components";
import githubLogo from "../../images/whiteGithub.png";
import linkedinLogo from "../../images/whiteLinkedin.png";
import resumeLogo from "../../images/whiteDocument.png";
import emailLogo from "../../images/whiteEmail.png";

const Icons = () => {
  const FlexDiv = styled.div`
    display: flex;
    margin-bottom: 1%;
  `;

  const Icon = styled.img`
    width: 100%;
    max-width: 30px;
    height: auto;
  `;
  return (
    <FlexDiv>
      <a href="https://github.com/kevinwu15" target="_blank" rel="noreferrer">
        <Icon src={githubLogo} alt="Github Icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/kevinwu15/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon src={linkedinLogo} alt="Linkedin Icon" />
      </a>
      <a
        href="https://drive.google.com/file/d/1NfftFRZYhjr41u5zXhKZBUWqbxGAcJXR/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <Icon src={resumeLogo} alt="Resume Icon" />
      </a>
      <a href="mailto:kevinhwu15@gmail.com" target="_blank" rel="noreferrer">
        <Icon src={emailLogo} alt="Email Icon" />
      </a>
    </FlexDiv>
  );
};

export default Icons;
