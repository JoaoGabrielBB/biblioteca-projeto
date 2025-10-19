import styled from "styled-components";

// Container principal do card
const CardContainer = styled.div`
  background-color: #393E46; // cor de fundo do card
  margin: 1em auto; // margem vertical de 1em e centraliza horizontalmente (auto)
  padding: 1em; // espaço interno do card, aumenta conforto visual
  display: flex; // usa flexbox para organizar o conteúdo interno
  justify-content: center; // centraliza o conteúdo horizontalmente
  border-radius: 15px; // bordas arredondadas
  width: 90%; // largura do card ocupa 95% da tela no mobile
  max-width: 600px; // limita o tamanho máximo do card para não ficar gigante em telas grandes
  box-shadow: 0 4px 12px rgba(0,0,0,0.3); // sombra para dar profundidade



  // Media query para telas maiores que 1024px (desktop)
  @media (min-width: 1024px) {
    max-width: 1000px; // card maior
    padding: 2em; // mais espaço interno para desktop
  }
`;


// Conteúdo interno do card
const CardConteudo = styled.div`
  background-color: rgba(0, 0, 0, 0.6); // fundo semi-transparente
  display: flex; // flexbox para alinhar título, resumo e imagem
  align-items: center; // alinha verticalmente ao centro
  justify-content: space-between; // espaço igual entre elementos internos
  padding: 1em; // padding interno do conteúdo
  color: #fff; // cor do texto
  border-radius: 10px; // borda arredondada do conteúdo
  width: 100%; // ocupa toda a largura do CardContainer
  min-height: 200px; // altura mínima do conteúdo




  @media (min-width: 1024px) {
    min-height: 350px; // aumenta ainda mais para desktop
  }
`;

// Informações do livro (título e resumo)
const InformacoesLivro = styled.div`
  flex: 2; // ocupa 2 partes do espaço disponível em relação à imagem
  padding-right: 1em; // separação da imagem

  @media (min-width: 768px) {
    padding-right: 1em; // mantém o espaçamento
    margin-bottom: 0; // remove espaçamento inferior em desktop/tablet
  }
`;

// Título do livro
const TituloDestaque = styled.h2`
  font-size: 18px; // tamanho da fonte no mobile
  margin-bottom: 0.5em; // espaço abaixo do título

  @media (min-width: 1024px) {
    font-size: 25px; // aumenta a fonte em desktop
  }
`;

// Resumo do livro
const TextoDestaque = styled.p`
  font-size: 12px; // tamanho da fonte no mobile
  line-height: 1.4; // altura da linha
  overflow: hidden; // esconde conteúdo que ultrapassa o limite
  display: -webkit-box; // cria um box flexível para truncar texto
  -webkit-line-clamp: 6; // limita o resumo a 6 linhas
  -webkit-box-orient: vertical; // orienta as linhas verticalmente
  text-overflow: ellipsis; // adiciona "..." no final se truncar

  @media (min-width: 1024px) {
    font-size: 18px; // aumenta fonte em desktop
  }
`;

// Imagem do livro
const LivroDestaque = styled.img`
  height: 150px; // altura da imagem no mobile
  border-radius: 5px; // bordas arredondadas
  object-fit: cover; // mantém proporção e corta se necessário

  @media (min-width: 1024px) {
    width: 180px; // largura fixa no desktop
    height: 300px; // altura maior
    object-fit: contain; // mantém proporção sem cortar
  }
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
