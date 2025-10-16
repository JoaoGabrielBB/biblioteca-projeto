// Importa os hooks 'useEffect' e 'useState' do React
// - useState: para armazenar e gerenciar os dados (livros)
// - useEffect: para executar ações assim que o componente é montado (carregar livros da API)
import { useEffect, useState } from "react";

// Importa 'styled' do styled-components, usado para criar componentes React com CSS embutido
import styled from "styled-components";

// Importa sua instância do Axios configurada (geralmente com baseURL definida)
import api from "../../services/api";

// =======================
// ESTILIZAÇÃO DO CARROSSEL
// =======================

// ListaLivros → container principal que comporta as capas em formato de lista (<ul>)
const ListaLivros = styled.ul`
  display: flex;                /* Exibe os itens lado a lado (layout horizontal) */
  gap: 0.9em;                   /* Espaçamento entre cada capa */
  padding: 0.5em;               /* Espaço interno do container */
  list-style: none;             /* Remove os marcadores de lista */
  overflow-x: auto;             /* Habilita rolagem horizontal se o conteúdo ultrapassar a largura */
  scroll-behavior: smooth;      /* Faz a rolagem ficar suave */
  background-color: #AF6363;    /* Cor de fundo */
  margin: 0.3em;                /* Margem externa */

  /* Esconde a barra de rolagem, deixando apenas a rolagem pelo mouse ou toque */
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Cada capa de livro individual (um <li> dentro da <ul>)
const ItemLivro = styled.li`
  flex: 0 0 auto;               /* Garante que o item mantenha tamanho fixo e não encolha */
  scroll-snap-align: center;    /* Faz com que o item se alinhe no centro ao rolar */
`;

// Define o estilo da imagem da capa do livro
const CapaLivro = styled.img`
  height: 90px;                 /* Define a altura da capa (as larguras se ajustam automaticamente) */
  border-radius: 6px;           /* Deixa as bordas levemente arredondadas */
  transition: transform 0.2s;   /* Animações suaves quando algo muda (como hover) */
  cursor: pointer;              /* Mostra o ícone de clique quando o usuário passa o mouse */

  &:hover {
    transform: scale(1.1);      /* Aumenta levemente o tamanho ao passar o mouse */
  }
`;

// =======================
// COMPONENTE PRINCIPAL
// =======================
function CarrosselLivros() {
  // useState cria uma variável 'livros' e uma função 'setLivros' para atualizá-la
  // Começa vazia até os dados serem carregados da API
  const [livros, setLivros] = useState([]);

  // useEffect é executado apenas uma vez (porque o array [] está vazio)
  // Serve para buscar os livros assim que o componente for montado na tela
  useEffect(() => {
    const carregarLivros = async () => {
      try {
        // Faz a requisição GET para a rota /livros da sua API
        const response = await api.get("/livros");

        // Embaralha os livros de forma aleatória (Math.random() - 0.5 gera um número entre -0.5 e 0.5)
        // Depois pega apenas os 9 primeiros do array embaralhado
        const livrosAleatorios = response.data
          .sort(() => Math.random() - 0.5)
          .slice(0, 9);

        // Atualiza o estado 'livros' com o novo array de livros aleatórios
        setLivros(livrosAleatorios);
      } catch (error) {
        // Caso algo dê errado (como erro 404 ou problema de conexão)
        console.error("Erro ao carregar livros:", error);
      }
    };

    // Chama a função que busca e define os livros
    carregarLivros();
  }, []);

  // Renderização condicional: enquanto os livros ainda não foram carregados
  if (livros.length === 0) return <p>Carregando livros...</p>;

return (
    <ListaLivros>
      {livros.map((livro) => (
        <ItemLivro key={livro.id}>
          <CapaLivro
            src={`http://localhost:3000/${livro.foto}`} // Caminho completo da imagem retornada pela API
            alt={livro.titulo}                         // Texto alternativo para acessibilidade
          />
        </ItemLivro>
      ))}
    </ListaLivros>
  );
}
export default CarrosselLivros;
