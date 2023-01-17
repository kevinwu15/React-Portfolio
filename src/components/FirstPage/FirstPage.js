import Navbar from "./Navbar";
import Hero from "./Hero";
import styled from 'styled-components';

const Page = styled.div`
  height: 100vh;
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
