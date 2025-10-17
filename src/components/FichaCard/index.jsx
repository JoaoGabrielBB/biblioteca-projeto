// Importa hooks do React: useState para armazenar estado, useEffect para efeitos colaterais (como buscar dados da API)
import { useEffect, useState } from "react";

// Importa a instância do axios configurada para fazer requisições à API
import api from "../../services/api";

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
    <div style={{ padding: "2em" }}>
      {/* Exibe o título do livro */}
      <h1>{livro.titulo}</h1>

      {/* Exibe a imagem do livro */}
      <img
        src={`http://localhost:3000/${livro.foto}`} // caminho da imagem retornada pela API
        alt={livro.titulo}                           // alt para acessibilidade
        style={{ height: "250px", borderRadius: "10px" }} // estilo inline
      />

      {/* Exibe o resumo do livro */}
      <p style={{ marginTop: "1em" }}>{livro.resumo}</p>
    </div>
  );
}

// Exporta o componente para que possa ser usado em outras partes do projeto
export default FichaCard;
