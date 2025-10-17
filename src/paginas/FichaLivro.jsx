import styled from "styled-components";
import FichaCard from "../components/FichaCard";
import { useParams } from "react-router-dom";


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


function FichaLivro() {
  const { id } = useParams(); // pega o ID da URL
  return (
    
    <AppContainer>
      <FichaCard id={id}/>
    </AppContainer>

  );
}

export default FichaLivro;
