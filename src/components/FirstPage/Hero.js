import Typing from "./Typing";
import githubLogo from "../../images/whiteGithub.png";
import linkedinLogo from "../../images/whiteLinkedin.png";
import resumeLogo from "../../images/whiteDocument.png";
import emailLogo from "../../images/whiteEmail.png";
import styled from "styled-components";

const Sky = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; */
  background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  transform: rotate(-45deg);
  pointer-events: none; 
`;

const Stars = styled.div`
  --star-color: white;
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);
  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, currentColor, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(125em, 0, 0);
  -webkit-animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;
          animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;
}
@media screen and (max-width: 750px) {
  &
 {
    -webkit-animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
            animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
  }
}
&:nth-child(1) {
  --star-tail-length: 5.6em;
  --top-offset: 94.82vh;
  --fall-duration: 11.994s;
  --fall-delay: 2.652s;
}
&:nth-child(2) {
  --star-tail-length: 6.99em;
  --top-offset: 98.81vh;
  --fall-duration: 7.795s;
  --fall-delay: 8.294s;
}
&:nth-child(3) {
  --star-tail-length: 5.95em;
  --top-offset: 88.67vh;
  --fall-duration: 9.877s;
  --fall-delay: 5.456s;
}
&:nth-child(4) {
  --star-tail-length: 5.2em;
  --top-offset: 84.72vh;
  --fall-duration: 7.589s;
  --fall-delay: 6.421s;
}
&:nth-child(5) {
  --star-tail-length: 5.34em;
  --top-offset: 30.45vh;
  --fall-duration: 10.002s;
  --fall-delay: 7.992s;
}
&:nth-child(6) {
  --star-tail-length: 5.33em;
  --top-offset: 39.66vh;
  --fall-duration: 7.699s;
  --fall-delay: 2.125s;
}
&:nth-child(7) {
  --star-tail-length: 7.01em;
  --top-offset: 98.05vh;
  --fall-duration: 10.394s;
  --fall-delay: 9.256s;
}
&:nth-child(8) {
  --star-tail-length: 6.69em;
  --top-offset: 5.26vh;
  --fall-duration: 11.378s;
  --fall-delay: 4.263s;
}
&:nth-child(9) {
  --star-tail-length: 6.24em;
  --top-offset: 62.96vh;
  --fall-duration: 6.057s;
  --fall-delay: 8.89s;
}
&:nth-child(10) {
  --star-tail-length: 6.39em;
  --top-offset: 88.66vh;
  --fall-duration: 8.345s;
  --fall-delay: 1.632s;
}
&:nth-child(11) {
  --star-tail-length: 6.98em;
  --top-offset: 60.46vh;
  --fall-duration: 11.815s;
  --fall-delay: 8.836s;
}
&:nth-child(12) {
  --star-tail-length: 6.98em;
  --top-offset: 81.48vh;
  --fall-duration: 8.455s;
  --fall-delay: 1.252s;
}
&:nth-child(13) {
  --star-tail-length: 7.47em;
  --top-offset: 70.49vh;
  --fall-duration: 11.188s;
  --fall-delay: 4.122s;
}
&:nth-child(14) {
  --star-tail-length: 6.15em;
  --top-offset: 23.74vh;
  --fall-duration: 7.902s;
  --fall-delay: 9.121s;
}
&:nth-child(15) {
  --star-tail-length: 5.81em;
  --top-offset: 94.35vh;
  --fall-duration: 9.372s;
  --fall-delay: 7.384s;
}
&:nth-child(16) {
  --star-tail-length: 5.43em;
  --top-offset: 57.92vh;
  --fall-duration: 11.822s;
  --fall-delay: 5.416s;
}
&:nth-child(17) {
  --star-tail-length: 7.48em;
  --top-offset: 20.36vh;
  --fall-duration: 6.06s;
  --fall-delay: 3.897s;
}
&:nth-child(18) {
  --star-tail-length: 5.78em;
  --top-offset: 31.7vh;
  --fall-duration: 7.768s;
  --fall-delay: 6.235s;
}
&:nth-child(19) {
  --star-tail-length: 6.76em;
  --top-offset: 9.47vh;
  --fall-duration: 10.127s;
  --fall-delay: 3.147s;
}
&:nth-child(20) {
  --star-tail-length: 7.36em;
  --top-offset: 13.65vh;
  --fall-duration: 11.499s;
  --fall-delay: 5.216s;
}
&:nth-child(21) {
  --star-tail-length: 6.1em;
  --top-offset: 81.31vh;
  --fall-duration: 7.008s;
  --fall-delay: 1.341s;
}
&:nth-child(22) {
  --star-tail-length: 5.21em;
  --top-offset: 43.55vh;
  --fall-duration: 6.488s;
  --fall-delay: 5.979s;
}
&:nth-child(23) {
  --star-tail-length: 6.09em;
  --top-offset: 83.81vh;
  --fall-duration: 8.377s;
  --fall-delay: 6.349s;
}
&:nth-child(24) {
  --star-tail-length: 5.76em;
  --top-offset: 2.79vh;
  --fall-duration: 11.062s;
  --fall-delay: 6.788s;
}
&:nth-child(25) {
  --star-tail-length: 7.25em;
  --top-offset: 83.47vh;
  --fall-duration: 7.029s;
  --fall-delay: 4.13s;
}
&:nth-child(26) {
  --star-tail-length: 6.28em;
  --top-offset: 48.11vh;
  --fall-duration: 9.261s;
  --fall-delay: 4.614s;
}
&:nth-child(27) {
  --star-tail-length: 5.19em;
  --top-offset: 20.65vh;
  --fall-duration: 11.554s;
  --fall-delay: 6.512s;
}
&:nth-child(28) {
  --star-tail-length: 6em;
  --top-offset: 86.13vh;
  --fall-duration: 9.069s;
  --fall-delay: 3.859s;
}
&:nth-child(29) {
  --star-tail-length: 7.2em;
  --top-offset: 18.53vh;
  --fall-duration: 8.314s;
  --fall-delay: 8.841s;
}
&:nth-child(30) {
  --star-tail-length: 6.36em;
  --top-offset: 84.17vh;
  --fall-duration: 11.647s;
  --fall-delay: 3.305s;
}
&:nth-child(31) {
  --star-tail-length: 6.86em;
  --top-offset: 85.89vh;
  --fall-duration: 10.06s;
  --fall-delay: 5.206s;
}
&:nth-child(32) {
  --star-tail-length: 5.28em;
  --top-offset: 64.69vh;
  --fall-duration: 8.601s;
  --fall-delay: 0.059s;
}
&:nth-child(33) {
  --star-tail-length: 5.7em;
  --top-offset: 44.87vh;
  --fall-duration: 9.175s;
  --fall-delay: 6.44s;
}
&:nth-child(34) {
  --star-tail-length: 7.18em;
  --top-offset: 32.7vh;
  --fall-duration: 9.133s;
  --fall-delay: 5.66s;
}
&:nth-child(35) {
  --star-tail-length: 6.3em;
  --top-offset: 82.35vh;
  --fall-duration: 10.87s;
  --fall-delay: 8.975s;
}
&:nth-child(36) {
  --star-tail-length: 5.48em;
  --top-offset: 3.49vh;
  --fall-duration: 9.05s;
  --fall-delay: 5.684s;
}
&:nth-child(37) {
  --star-tail-length: 5.3em;
  --top-offset: 86.54vh;
  --fall-duration: 7.846s;
  --fall-delay: 0.48s;
}
&:nth-child(38) {
  --star-tail-length: 6.58em;
  --top-offset: 34.28vh;
  --fall-duration: 6.029s;
  --fall-delay: 6.601s;
}
&:nth-child(39) {
  --star-tail-length: 6.72em;
  --top-offset: 71.05vh;
  --fall-duration: 8.689s;
  --fall-delay: 1.427s;
}
&:nth-child(40) {
  --star-tail-length: 5.37em;
  --top-offset: 22.86vh;
  --fall-duration: 11.818s;
  --fall-delay: 5.131s;
}
&:nth-child(41) {
  --star-tail-length: 6.67em;
  --top-offset: 26.76vh;
  --fall-duration: 10.672s;
  --fall-delay: 5.382s;
}
&:nth-child(42) {
  --star-tail-length: 5.5em;
  --top-offset: 43.63vh;
  --fall-duration: 11.593s;
  --fall-delay: 0.539s;
}
&:nth-child(43) {
  --star-tail-length: 5.01em;
  --top-offset: 26.45vh;
  --fall-duration: 10.435s;
  --fall-delay: 3.894s;
}
&:nth-child(44) {
  --star-tail-length: 5.33em;
  --top-offset: 62.18vh;
  --fall-duration: 10.194s;
  --fall-delay: 7.005s;
}
&:nth-child(45) {
  --star-tail-length: 6.76em;
  --top-offset: 70.55vh;
  --fall-duration: 8.464s;
  --fall-delay: 5.803s;
}
&:nth-child(46) {
  --star-tail-length: 5.27em;
  --top-offset: 21.17vh;
  --fall-duration: 9.859s;
  --fall-delay: 3.612s;
}
&:nth-child(47) {
  --star-tail-length: 7.47em;
  --top-offset: 73.28vh;
  --fall-duration: 11.792s;
  --fall-delay: 3.634s;
}
&:nth-child(48) {
  --star-tail-length: 7.33em;
  --top-offset: 33.33vh;
  --fall-duration: 8.666s;
  --fall-delay: 5.275s;
}
&:nth-child(49) {
  --star-tail-length: 5.5em;
  --top-offset: 47.74vh;
  --fall-duration: 7.779s;
  --fall-delay: 1.476s;
}
&:nth-child(50) {
  --star-tail-length: 6.47em;
  --top-offset: 29.38vh;
  --fall-duration: 9.612s;
  --fall-delay: 0.127s;
}
&::before, &::after {
  position: absolute;
  content: "";
  top: 0;
  left: calc(var(--star-width) / -2);
  width: var(--star-width);
  height: 100%;
  background: linear-gradient(45deg, transparent, currentColor, transparent);
  border-radius: inherit;
  -webkit-animation: blink 2s linear infinite;
          animation: blink 2s linear infinite;
}
&::before {
  transform: rotate(45deg);
}
&::after {
  transform: rotate(-45deg);
}

@-webkit-keyframes fall {
  to {
    transform: translate3d(-30em, 0, 0);
  }
}

@keyframes fall {
  to {
    transform: translate3d(-30em, 0, 0);
  }
}
@-webkit-keyframes tail-fade {
  0%, 50% {
    width: var(--star-tail-length);
    opacity: 1;
  }
  70%, 80% {
    width: 0;
    opacity: 0.4;
  }
  100% {
    width: 0;
    opacity: 0;
  }
}
@keyframes tail-fade {
  0%, 50% {
    width: var(--star-tail-length);
    opacity: 1;
  }
  70%, 80% {
    width: 0;
    opacity: 0.4;
  }
  100% {
    width: 0;
    opacity: 0;
  }
}
@-webkit-keyframes blink {
  50% {
    opacity: 0.6;
  }
}
@keyframes blink {
  50% {
    opacity: 0.6;
  }
}
`;

const OuterBox = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 1%;
`;

const PlaceholderDiv = styled.div`
  visibility: hidden;
`;

const Icon = styled.img`
  width: 100%;
  max-width: 30px;
  height: auto;
`;

const Page = styled.div`
  background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
`;

const Hero = () => {
  return (
    <Page>
      <Sky>
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
      </Sky>
      <OuterBox className="container">
        <HeroDiv className="container">
          <h1>Hi, I'm Kevin Wu</h1>
          <FlexDiv>
            <Typing />
            <PlaceholderDiv>|</PlaceholderDiv>
          </FlexDiv>
          <FlexDiv>
            <a
              href="https://github.com/kevinwu15"
              target="_blank"
              rel="noreferrer"
              class="hover:animate-pulse"
            >
              <Icon src={githubLogo} alt="Github Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/kevinwu15/"
              target="_blank"
              rel="noreferrer"
              class="hover:animate-pulse"
            >
              <Icon src={linkedinLogo} alt="Linkedin Icon" />
            </a>
            <a
              href="https://drive.google.com/file/d/1j6QyD0HnZeh2ms28hO3iSt4kxsQf_VbH/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              class="hover:animate-pulse"
            >
              <Icon src={resumeLogo} alt="Resume Icon" />
            </a>
            <a
              href="mailto:kevinhwu15@gmail.com"
              target="_blank"
              rel="noreferrer"
              class="hover:animate-pulse"
            >
              <Icon src={emailLogo} alt="Email Icon" />
            </a>
          </FlexDiv>
        </HeroDiv>
      </OuterBox>
    </Page>
  );
};

export default Hero;
