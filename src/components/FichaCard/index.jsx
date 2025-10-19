// Importa hooks do React: useState para armazenar estado, useEffect para efeitos colaterais (como buscar dados da API)
import { useEffect, useState } from "react";
import styled from "styled-components";

// Importa a instância do axios configurada para fazer requisições à API
import api from "../../services/api";
import BotoesAcoes from "../BotoesAcoes";


const FichaCardContainer = styled.div`
  background-color: #393E46;
  margin: 1em auto;
  padding: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  width: 90%;
  max-width: 600px; // evita que fique gigante em telas grandes
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  color: #fff;

`
const LivroTitulo = styled.h1`
  font-size: 26px;
  

`

const CapaLivro = styled.img`
  height: 250px;
  width: 50%;
  margin-bottom: 1em; 
  border-radius: 5px;

  @media (min-width: 1024px) {
    width: 50%; // largura fixa no desktop
    height: 310px; // altura maior
    object-fit: contain; // mantém proporção sem cortar
  }
  
`

const InfoLivro = styled.p`
  margin: 0 5em 0 5em;


`

const SinopseLivro = styled.p`
 marginTop: 1em;

`

// Componente FichaCard recebe uma prop chamada 'id', que indica qual livro deve ser exibido
function FichaCard({ id }) {
  // Cria um estado chamado 'livro' para armazenar os dados do livro buscado da API
  // Inicialmente, ele é 'null' porque ainda não carregamos os dados
  const [livro, setLivro] = useState(null);

  // useEffect é um hook que executa código após o componente ser montado ou quando algo muda
  // Aqui, ele depende de 'id', ou seja, será executado sempre que o id mudar
  useEffect(() => {
    // Função assíncrona para buscar os dados do livro na API
    const carregarLivro = async () => {
      try {
        // Faz requisição GET para a rota `/livros/:id` da API
        const response = await api.get(`/livros/${id}`);
        
        // Atualiza o estado 'livro' com os dados retornados da API
        setLivro(response.data);
      } catch (error) {
        // Se der algum erro na requisição, exibe no console
        console.error("Erro ao carregar livro:", error);
      }
    };

    // Chama a função assim que o useEffect roda
    carregarLivro();
  }, [id]); // <-- o useEffect roda novamente sempre que o 'id' mudar

  // Enquanto o livro não foi carregado, exibe uma mensagem de carregamento
  if (!livro) return <p>Carregando livro...</p>;

  // Renderiza os dados do livro quando ele já foi carregado
  return (
    <FichaCardContainer>
      {/* Exibe o título do livro */}
      <LivroTitulo>{livro.titulo}</LivroTitulo>

      {/* Exibe a imagem do livro */}
      <CapaLivro
        src={`http://localhost:3000/${livro.foto}`} // caminho da imagem retornada pela API
        alt={livro.titulo}                           // alt para acessibilidade
      />

      <InfoLivro>Autor(a): {livro.autor?.nome}</InfoLivro>
      <InfoLivro>Editora: {livro.editora?.nome}</InfoLivro>
      <InfoLivro>Genero: {livro.genero?.nome}</InfoLivro>
      {/* Exibe a sinopse do livro */}
      <SinopseLivro>{livro.sinopse}</SinopseLivro>
      <BotoesAcoes/>
    </FichaCardContainer>
  );
}

// Exporta o componente para que possa ser usado em outras partes do projeto
export default FichaCard;
