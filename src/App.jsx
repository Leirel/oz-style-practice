import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";

const MainContainer = styled.main`
  background-color: #b59fff;
  min-height: 100vh;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

function App() {
  return (
    <MainContainer>
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </MainContainer>
  );
}

export default App;
