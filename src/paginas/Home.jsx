import styled from "styled-components";
import CarrosselLivros from "../components/CarrosselLivros";
import Livros from "../components/Livros";
import Autores from "../components/Autores";

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh; /* permite crescer conforme o conteúdo */
  background: #d9d9d9;
  color: #000;
  display: flex;
  flex-direction: column; /* empilha tudo em coluna */
  text-align: center;
  padding-bottom: 80px; /* espaço extra antes do rodapé */
  
`

const Destaque = styled.h2`
  fontsize: 20px;
`
const EstanteTitulo = styled.h2`
  fontsize: 20px;

`

function Home() {
  return (
    <AppContainer>
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

export default Home;
