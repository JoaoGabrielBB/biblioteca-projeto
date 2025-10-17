import styled from "styled-components";

const EscritorContainer = styled.div`
  background-color: #fff;
  margin: 1em auto;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

const EscritorConteudo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  width: 100%;
  min-height: 200px; /* altura fixa */
`;

const Biografia = styled.div`
  flex: 2;
  padding-right: 0.5em;
`;

const TituloDestaque = styled.h2`
  font-size: 22px;
  margin-bottom: 0.5em;
`;

const TextoBiografia = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.4;
`;


const EscritorDestaque = styled.img`
  margin-top: 1em;
  height: 150px;
  border-radius: 8px;
  position: relative;
  z-index: 1; /* menor que o rodapé */
`;

function Escritor({ nome, foto, biografia_resumo }) {
  return (
    <EscritorContainer>
      <EscritorConteudo>
        {/* Lado esquerdo → informações e imagem do autor */}
        <Biografia>
          <TituloDestaque>{nome}</TituloDestaque>
          <TextoBiografia>{ biografia_resumo}</TextoBiografia>
        </Biografia>
                  <EscritorDestaque
            src={`http://localhost:3000/${foto}`}
            alt={nome}
          />
      </EscritorConteudo>
    </EscritorContainer>
  );
}

export default Escritor;
