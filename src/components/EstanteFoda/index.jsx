import styled from "styled-components";
import rato from "../../assets/livros/rato.png";
import chapeu from "../../assets/livros/chapeu.png";
import meta from "../../assets/livros/meta.png";
import pele from "../../assets/livros/pele.png";
import metal from "../../assets/livros/metal.png";
import amigo from "../../assets/livros/amigo.png";

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

function EstanteFoda() {
  // Array de capas
  const capas = [rato, amigo, chapeu, pele, meta, metal];

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

export default EstanteFoda;
