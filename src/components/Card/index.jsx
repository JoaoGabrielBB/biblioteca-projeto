import styled from "styled-components";
import livro from "../../assets/livros/musculos.png"

const CardContainer = styled.div`
    background-color: #393E46;
    margin: 1em auto;
    padding: 1em;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    width: 90%; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

const CardConteudo = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    color: #fff;
    border-radius: 10px;
    width: 100%;
    min-height: 200px; /* altura fixa */
`;

const Biografia = styled.div`
    flex: 2;
    padding-right: 1em;
`;

const TituloDestaque = styled.h2`
    font-size: 18px;
    margin-bottom: 0.5em;
`;

const LivroDestaque = styled.img`
    height: 150px;
    border-radius: 5px;
`;

const TextoDestaque = styled.p`
    font-size: 12px;
    line-height: 1.4;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* número de linhas máximas */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

function Card(){
    return(
        <CardContainer>
           <CardConteudo>
                <Biografia>
                    <TituloDestaque>
                        A Anatomia da Musculação
                    </TituloDestaque>
                    <TextoDestaque>
                        Esse livro é tipo o Google Maps do seu corpo: mostra onde ficam os músculos, como cutucar cada um deles e ainda te 
                        dá 100 exercícios + 104 variações pra você nunca mais reclamar de tédio na academia. 
                    </TextoDestaque>
                </Biografia>
                <LivroDestaque src={livro} />
           </CardConteudo>
        </CardContainer>
    );
}

export default Card;
