import styled from "styled-components";

// Container principal do card
const CardContainer = styled.div`
  background-color: #393E46;
  margin: 1em auto;
  padding: 1em;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  width: 90%;
  max-width: 600px; // evita que fique gigante em telas grandes
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);

  }
`;

// Conteúdo interno do card
const CardConteudo = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  color: #fff;
  border-radius: 10px;
  width: 100%;
  min-height: 200px;

 
  }
`;

// Informações do livro (título e resumo)
const InformacoesLivro = styled.div`
  flex: 2;
  padding-right: 1em;


  }
`;

// Título do livro
const TituloDestaque = styled.h2`
  font-size: 18px;
  margin-bottom: 0.5em;

  }
`;

// Imagem do livro
const LivroDestaque = styled.img`
  height: 150px;
  border-radius: 5px;
  object-fit: cover;

  }
`;

// Resumo do livro
const TextoDestaque = styled.p`
  font-size: 12px;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6; 
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;


`;

// Componente Card
function Card({ titulo, resumo, foto }) {
  return (
    <CardContainer>
      <CardConteudo>
        <InformacoesLivro>
          <TituloDestaque>{titulo}</TituloDestaque>
          <TextoDestaque>{resumo}</TextoDestaque>
        </InformacoesLivro>
        <LivroDestaque src={`http://localhost:3000/${foto}`} alt={titulo} />
      </CardConteudo>
    </CardContainer>
  );
}

export default Card;
