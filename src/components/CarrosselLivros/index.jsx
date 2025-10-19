// Importa os hooks 'useEffect' e 'useState' do React
// - useState: para armazenar e gerenciar os dados (livros)
// - useEffect: para executar ações assim que o componente é montado (carregar livros da API)
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Importa 'styled' do styled-components, usado para criar componentes React com CSS embutido
import styled from "styled-components";

// Importa sua instância do Axios configurada (geralmente com baseURL definida)
import api from "../../services/api";

// =======================
// ESTILIZAÇÃO DO CARROSSEL
// =======================

// ListaLivros → container principal que comporta as capas em formato de lista (<ul>)
// Container do carrossel (ul)
const ListaLivros = styled.ul`
  display: flex;                
  gap: 0.9em;                   
  padding: 0.5em;               
  list-style: none;             
  overflow-x: auto;             
  scroll-behavior: smooth;      
  background-color: #AF6363;    
  margin: 0.3em;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    gap: 1.2em; // mais espaçamento entre capas no tablet
    padding: 1em; // mais padding interno
  }

  @media (min-width: 1024px) {
    gap: 1.5em; 
    padding: 1.5em;
  }
`;

// Cada item (li)
const ItemLivro = styled.li`
  flex: 0 0 auto;               
  scroll-snap-align: center;    

  @media (min-width: 768px) {
    flex: 0 0 auto; // mantém tamanho fixo
  }
`;

// Imagem da capa
const CapaLivro = styled.img`
  height: 90px;                 
  border-radius: 6px;           
  transition: transform 0.2s;   
  cursor: pointer;              

  &:hover {
    transform: scale(1.1);      
  }

  @media (min-width: 768px) {
    height: 130px; // capas maiores em tablet
  }

  @media (min-width: 1024px) {
    height: 180px; // capas ainda maiores em desktop
  }
`;

// =======================
// COMPONENTE PRINCIPAL
// =======================
function CarrosselLivros() {
  // useState cria uma variável 'livros' e uma função 'setLivros' para atualizá-la
  // Começa vazia até os dados serem carregados da API
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

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
          .slice(0, 16);

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
            onClick={() => navigate(`/livro/${livro.id}`)} // ← redireciona ao clicar
          />
        </ItemLivro>
      ))}
    </ListaLivros>
  );
}
export default CarrosselLivros;
