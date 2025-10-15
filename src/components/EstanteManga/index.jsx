import styled from "styled-components";
import remia from "../../assets/livros/remia.png";
import frankenstein from "../../assets/livros/frank.png";
import kuuga from "../../assets/livros/kuuga.png";
import punpun from "../../assets/livros/good.png";
import eva from "../../assets/livros/eva.png";
import tomie from "../../assets/livros/tomie.png";

// Estilização
const ListaLivros = styled.ul`
  display: flex;
  background-color: #AF6363;
  margin: 0.3em;
  gap: 0.9em;
  padding: 0.5em;
  list-style: none;

`;

const ItemLivro = styled.li`
  flex: 0 0 auto; /* não encolhe */
`;

const CapaLivro = styled.img`
  height: 70px;
  transition: transform 0.1s;


  }
`;

function EstanteManga() {
  // Array de capas
  const capas = [remia, frankenstein, kuuga, punpun, eva, tomie];

  return (
    <ListaLivros>
      {capas.map((capa, index) => (
        <ItemLivro key={index}>
          <CapaLivro src={capa} alt={`Livro ${index + 1}`} />
        </ItemLivro>
      ))}
    </ListaLivros>
  );
}

export default EstanteManga;
