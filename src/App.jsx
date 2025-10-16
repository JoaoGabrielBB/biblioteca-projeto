import styled from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import CarrosselLivros from "./components/CarrosselLivros";
import Escritor from "./components/Escritor";
import Livros from "./components/Livros";
import Autores from "./components/Autores";

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
      <Livros/>
      <EstanteTitulo>
        ESTANTE
      </EstanteTitulo>
    <CarrosselLivros />
    <CarrosselLivros />
    <Destaque>
      ESCRITOR DESTAQUE
    </Destaque>
    <Autores />
    </AppContainer>

  );
}

export default App;
