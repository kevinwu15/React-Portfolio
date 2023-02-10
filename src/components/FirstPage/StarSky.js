import styled from "styled-components";

const StarSky = () => {
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
  --star-color: #0dcaf0;
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
  --top-offset: 44.67vh;
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

  return (
    <Sky>
      <Stars />
      <Stars />
      <Stars />
      <Stars />
      <Stars />
      {/* <Stars />
      <Stars />
      <Stars />
      <Stars />
      <Stars /> */}
      {/* <Stars />
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
      <Stars /> */}
    </Sky>
  );
};

export default StarSky;
