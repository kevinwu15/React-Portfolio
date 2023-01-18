import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import Footer from "./components/Footer/Footer";
import styled from 'styled-components';

function App() {
  const Background = styled.div`
    background-image: radial-gradient(ellipse at bottom,#0d1d31 0%,#0c0d13 100%);
    color: white;
    width: 100%;
    overflow-x: hidden;
  `

  return (
    <Background>
      <FirstPage />
      <ProjectsPage />
      <Footer />
    </Background>
  );
}

export default App;
