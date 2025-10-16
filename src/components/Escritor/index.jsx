import styled from "styled-components";

const EscritorContainer = styled.div`
  background-color: #fff;
  margin: 1em auto;
  padding: 1em;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  width: 90%;
  max-width: 600px; /* evita que fique gigante em telas grandes */
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
  font-size: 18px;
  margin-bottom: 0.5em;
`;

const TextoBiografia = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.4;
`;

const LivroDestaque = styled.img`
  height: 150px;
  border-radius: 5px;
`;

const EscritorDestaque = styled.img`
  margin-top: 1em;
  height: 150px;
  border-radius: 8px;
`;

function Escritor({ nome, foto, biografia_resumo }) {
  return (
    <EscritorContainer>
      <EscritorConteudo>
        {/* Lado esquerdo → informações e imagem do autor */}
        <Biografia>
          <TituloDestaque>{nome}</TituloDestaque>
          <TextoBiografia>{ biografia_resumo}</TextoBiografia>
          <EscritorDestaque
            src={`http://localhost:3000/${foto}`}
            alt={nome}
          />
        </Biografia>

        {/* Lado direito → (opcional) poderia ser o livro mais famoso */}
        <LivroDestaque src={`http://localhost:3000/${foto}`} alt="Livro do autor" />
      </EscritorConteudo>
    </EscritorContainer>
  );
}

export default Escritor;
