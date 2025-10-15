import styled from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import EstanteManga from "./components/EstanteManga";
import EstanteFoda from "./components/EstanteFoda";
import Escritor from "./components/Escritor";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #D9D9D9
  color: #000
  display: flex;
  align-items: center;
  text-align: center
  
`

const Destaque = styled.h2`
  fontsize: 20px
`
const EstanteTitulo = styled.h2`
  fontsize: 20px

`

function App() {
  return (
    <AppContainer>
      <Header />
      <Destaque>Destaques da Semana</Destaque>
      <Card />
      <EstanteTitulo>
        ESTANTE
      </EstanteTitulo>
    <EstanteManga />
    <EstanteFoda />
    <Destaque>
      ESCRITOR DESTAQUE
    </Destaque>
    <Escritor />
    </AppContainer>

  );
}

export default App;
