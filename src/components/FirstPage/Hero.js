import Typing from "./Typing";
import Icons from './Icons';
import Hi from './Hi';
import StarSky from './StarSky';
import styled from "styled-components";

const OuterBox = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexDiv = styled.div`
    display: flex;
    margin-bottom: 1%;
  `;

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlaceholderDiv = styled.div`
  visibility: hidden;
`;

// const Arrow = styled.svg`
//   width: 100%;
//   max-width: 30px;
//   height: auto;
// `

const Page = styled.div`
  background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
`;

const Hero = () => {
  return (
    <Page>
      <StarSky />
      <OuterBox className="container">
        <HeroDiv className="container">
          <Hi />
          <FlexDiv>
            <Typing />
            <PlaceholderDiv>|</PlaceholderDiv>
          </FlexDiv>
          <Icons />
          {/* <Arrow xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </Arrow> */}
        </HeroDiv>
      </OuterBox>
    </Page>
  );
};

export default Hero;
