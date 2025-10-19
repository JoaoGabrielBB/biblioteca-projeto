import styled from "styled-components";

const BotaoContainer = styled.div`
  display: flex;
  gap: 1em; /* espaço entre os botões */
  margin-top: 1.5em;
`;

const Botao = styled.a`
  padding: 0.8em 1.5em;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
`;

const BotaoLer = styled(Botao)`
  background-color: #22d4fd;
  color: #fff;
`;

const BotaoComprar = styled(Botao)`
  background-color: #ff7f50;
  color: #fff;
`;

function BotoesAcoes({ linkLer, linkComprar }) {
  return (
    <BotaoContainer>
      <BotaoLer href={linkLer} target="_blank" rel="noopener noreferrer">
        Ler Online
      </BotaoLer>
      <BotaoComprar href={linkComprar} target="_blank" rel="noopener noreferrer">
        Comprar
      </BotaoComprar>
    </BotaoContainer>
  );
}

export default BotoesAcoes;
