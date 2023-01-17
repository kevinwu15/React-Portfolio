import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import Projects from "./components/ProjectsPage/Projects";
import styled from 'styled-components';

function App() {
  const Background = styled.div`
  background-image: radial-gradient(ellipse at bottom,#0d1d31 0%,#0c0d13 100%);
  color: white;
  `

  return (
    <Background>
      <FirstPage />
      <Projects />
    </Background>
  );
}

export default App;
