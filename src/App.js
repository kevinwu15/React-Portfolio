import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import styled from 'styled-components';

function App() {
  const Background = styled.div`
  background-image: radial-gradient(ellipse at bottom,#0d1d31 0%,#0c0d13 100%);
  color: white;
  `

  return (
    <Background>
      <FirstPage />
      <ProjectsPage />
    </Background>
  );
}

export default App;
