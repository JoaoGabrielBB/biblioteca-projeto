// Importa hooks do React para gerenciar estado e efeitos colaterais
import { useEffect, useState } from "react"; 

// Importa a instância da API que você configurou para fazer requisições HTTP
import api from "../../services/api";

// Importa o componente Card que vai exibir os dados do livro
import Card from "../Card";

function Livros() {
  // 🔹 Cria um estado local chamado 'livro', inicializado como null
  // Ele vai armazenar os dados do livro que a API retornar
  const [livro, setLivro] = useState(null);

  // 🔹 useEffect é usado para rodar código depois que o componente é renderizado
  // Nesse caso, ele será executado apenas uma vez, pois o array de dependências está vazio
  useEffect(() => {
    // 🔹 Função assíncrona para buscar o livro na API
    const carregarLivro = async () => {
      try {
        // 🔹 Faz uma requisição GET para a rota '/livros/3'
        // Aqui você escolhe o ID do livro que quer buscar
        const response = await api.get("/livros/1");

        // 🔹 Atualiza o estado 'livro' com os dados retornados da API
        setLivro(response.data);
      } catch (error) {
        // 🔹 Caso ocorra algum erro na requisição, ele será exibido no console
        console.error("Erro ao carregar livro:", error);
      }
    };

    // 🔹 Chama a função que busca os dados
    carregarLivro();
  }, []); // 🔹 Array vazio indica que o efeito só roda uma vez ao montar o componente

  // 🔹 Enquanto 'livro' estiver null (dados ainda não chegaram), exibe "Carregando..."
  if (!livro) return <p>Carregando...</p>;

  // 🔹 Renderiza o componente Card passando os dados do livro como props
  // Cada prop corresponde a uma informação que o Card vai exibir
  return (
    <Card
        key={livro.id}       // 🔹 React usa a key para rastrear elementos na renderização
        titulo={livro.titulo} // 🔹 Passa o título do livro para o Card
        resumo={livro.resumo} // 🔹 Passa o resumo do livro para o Card
        foto={livro.foto}     // 🔹 Passa o caminho da foto para o Card
    />
  );
}

// 🔹 Exporta o componente para que ele possa ser usado em outros arquivos
export default Livros;
