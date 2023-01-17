import Navbar from "./Navbar";
import Hero from "./Hero";
import styled from 'styled-components';

const Page = styled.div`
  height: 100vh;
  background-image: radial-gradient(ellipse at bottom,#0d1d31 0%,#0c0d13 100%);
`

const FirstPage = () => {
  return (
    <Page>
      <Navbar />
      <Hero />
    </Page>
  );
};

export default FirstPage;
