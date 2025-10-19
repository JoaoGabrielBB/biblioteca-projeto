import { useEffect, useState } from "react";
import api from "../../services/api";
import Escritor from "../Escritor";

function Autores() {
  const [autor, setAutor] = useState(null);

  useEffect(() => {
    const carregarAutorAleatorio = async () => {
      try {
        const response = await api.get("/autores");
        const listaAutores = response.data;

        if (listaAutores.length > 0) {
          // Escolhe um autor aleatório
          const indiceAleatorio = Math.floor(Math.random() * listaAutores.length);
          setAutor(listaAutores[indiceAleatorio]);
        }
      } catch (error) {
        console.error("Erro ao carregar autor:", error);
      }
    };

    carregarAutorAleatorio();
  }, []);

  if (!autor) return <p>Carregando autor...</p>;

  return (
    <Escritor
    id={autor.id}
    nome={autor.nome}
    foto={autor.foto}
    biografia_resumo={autor.biografia_resumo}
    />
  );
}

export default Autores;
