import styled from "styled-components";

const Hi = () => {
  const Fade = styled.h1`
    animation: fadeIn 5s;
    -webkit-animation: fadeIn 5s;
    -moz-animation: fadeIn 5s;
    -o-animation: fadeIn 5s;
    -ms-animation: fadeIn 5s;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  return <Fade>Hi, I'm Kevin Wu</Fade>;
};

export default Hi;
