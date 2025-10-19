import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const EscritorContainer = styled.div`
  background-color: #fff;
  margin: 1em auto;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);

    // Media query para telas maiores que 1024px (desktop)
  @media (min-width: 1024px) {
    max-width: 1000px; // card maior
    padding: 2em; // mais espaço interno para desktop
  }
`;

const EscritorConteudo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  width: 100%;
  min-height: 200px; /* altura fixa */

  @media (min-width: 1024px) {
    min-height: 350px; // aumenta ainda mais para desktop
  }
`;

const Biografia = styled.div`
  flex: 2;
  padding-right: 0.5em;

  @media (min-width: 768px) {
    padding-right: 1em; // mantém o espaçamento
    margin-bottom: 0; // remove espaçamento inferior em desktop/tablet
  }
`;

const TituloDestaque = styled.h2`
  font-size: 22px;
  margin-bottom: 0.5em;

  @media (min-width: 1024px) {
    font-size: 25px; // aumenta a fonte em desktop
    cursor: pointer; 
  }
`;

const TextoBiografia = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.4;

  @media (min-width: 1024px) {
    font-size: 20px; // aumenta fonte em desktop
  }
`;


const EscritorDestaque = styled.img`
  margin-top: 1em;
  height: 150px;
  border-radius: 8px;
  position: relative;
  z-index: 1; /* menor que o rodapé */

  @media (min-width: 1024px) {
    width: 250px; // largura fixa no desktop
    height: 360px; // altura maior
    object-fit: contain; // mantém proporção sem cortar
    border-radius: 20px;
  }
`;

function Escritor({ id, nome, foto, biografia_resumo }) {
  const navigate = useNavigate();
  return (
    <EscritorContainer>
      <EscritorConteudo>
        <Biografia>
          <TituloDestaque onClick={() => navigate(`/autor/${id}`)}>
            {nome}
          </TituloDestaque>
          <TextoBiografia>{biografia_resumo}</TextoBiografia>
        </Biografia>
        <EscritorDestaque src={`http://localhost:3000/${foto}`} alt={nome} />
      </EscritorConteudo>
    </EscritorContainer>
  );
}

export default Escritor;
