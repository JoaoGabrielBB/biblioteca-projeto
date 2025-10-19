// Importações do React e bibliotecas
import { useEffect, useState } from "react"; // useEffect: executa efeitos colaterais, useState: estado do componente
import { useParams } from "react-router-dom"; // pega parâmetros da URL (ex: /autor/:id)
import api from "../services/api"; // instância do Axios para fazer requisições à API
import styled from "styled-components"; // para criar componentes estilizados

// Styled-components para estilização do container da ficha do autor
const FichaContainer = styled.div`
  background-color: #393E46; // fundo escuro
  margin: 1em auto; // centraliza horizontalmente e adiciona margem vertical
  padding: 1em; // espaço interno
  display: flex;
  align-items: center; // centraliza itens horizontalmente
  flex-direction: column; // empilha elementos verticalmente
  border-radius: 15px; // cantos arredondados
  width: 90%; // ocupa 90% da largura do container pai
  max-width: 600px; // limita o tamanho máximo para telas grandes
  box-shadow: 0 4px 12px rgba(0,0,0,0.3); // sombra para dar profundidade
  color: #fff; // cor do texto branca
`;

// Nome do autor estilizado
const NomeAutor = styled.h1`
  font-size: 26px; // tamanho da fonte
`;

// Foto do autor estilizada
const FotoAutor = styled.img`
  height: 250px; // altura da imagem
  width: 50%; // largura proporcional
  margin-bottom: 1em; // espaço abaixo da imagem
  border-radius: 5px; // cantos arredondados da imagem

  @media (min-width: 1024px) {
    width: 100%; // largura fixa no desktop
    height: 380px; // altura maior
    object-fit: contain; // mantém proporção sem cortar
  }
`;

// Biografia do autor
const BiografiaAutor = styled.p`
 marginTop: 1em; // adiciona espaço acima do parágrafo
`;

// Componente principal da página de ficha do autor
function FichaAutor() {
  // useParams retorna um objeto com os parâmetros da URL, aqui pegamos o "id"
  const { id } = useParams();

  // Estado para armazenar os dados do autor
  const [autor, setAutor] = useState(null);

  // useEffect executa uma função após o componente ser montado ou quando "id" muda
  useEffect(() => {
    // função assíncrona para buscar os dados do autor
    const carregarAutor = async () => {
      try {
        // faz requisição GET para a API passando o id do autor
        const response = await api.get(`/autores/${id}`);
        console.log("Autor recebido da API:", response.data); // ajuda a debugar
        setAutor(response.data); // atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao carregar autor:", error); // trata erros
      }
    };

    carregarAutor(); // chama a função para carregar os dados
  }, [id]); // o efeito será executado novamente se o "id" mudar

  // enquanto os dados não chegam, mostra uma mensagem de carregando
  if (!autor) return <p>Carregando autor...</p>;

  // Renderiza a ficha do autor quando os dados chegam
  return (
    <FichaContainer>
        <NomeAutor>{autor.nome}</NomeAutor> {/* Nome do autor */}
        <FotoAutor src={`http://localhost:3000/${autor.foto}`} alt={autor.nome} /> {/* Foto */}
      <BiografiaAutor>{autor.biografia}</BiografiaAutor> {/* Biografia */}
    </FichaContainer>
  );
}

// Exporta o componente para ser usado em outras partes do projeto
export default FichaAutor;
