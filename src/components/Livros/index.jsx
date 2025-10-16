import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../Card";

function Livros() {
  // Estado para armazenar o livro que será exibido
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    // Função responsável por buscar um livro aleatório
    const carregarLivroAleatorio = async () => {
      try {
        // Faz uma requisição GET para buscar todos os livros do banco de dados
        const response = await api.get("/livros");
        const listaLivros = response.data;

        // Verifica se há algum livro na lista
        if (listaLivros.length > 0) {
          // Gera um número aleatório entre 0 e o tamanho da lista
          const indiceAleatorio = Math.floor(Math.random() * listaLivros.length);
          
          // Seleciona o livro correspondente ao índice aleatório
          setLivro(listaLivros[indiceAleatorio]);
        }
      } catch (error) {
        // Caso aconteça algum erro na requisição, ele será mostrado no console
        console.error("Erro ao carregar livro:", error);
      }
    };

    // Chama a função assim que o componente é montado (ao abrir ou atualizar a página)
    carregarLivroAleatorio();
  }, []); 
  // O array vazio [] garante que o useEffect rode apenas uma vez (no carregamento inicial)

  // Enquanto o livro ainda não foi carregado, mostra um texto temporário
  if (!livro) return <p>Carregando...</p>;

  // Quando o livro é carregado, o componente <Card /> exibe os dados dinâmicos
  return (
    <Card
      key={livro.id}        // Identificador único do livro
      titulo={livro.titulo} // Título do livro
      resumo={livro.resumo} // Resumo do livro
      foto={livro.foto}     // Caminho da imagem
    />
  );

  /*
Resumo do funcionamento:
1-Assim que o componente Livros é carregado, ele busca todos os livros da API.
2-Escolhe um aleatório usando Math.random().
3-Guarda esse livro no estado livro.
4-Renderiza um <Card /> com os dados desse livro.
5-Se recarregar a página, outro livro aleatório aparece.
*/
}

export default Livros;
