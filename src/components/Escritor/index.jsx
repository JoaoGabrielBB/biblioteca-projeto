import styled from "styled-components";
import jose from "../../assets/livros/jose.png"
import les from "../../assets/livros/les.png"

const EscritorContainer = styled.div`
    background-color: #FFFFFF;
    margin: 1em auto;
    padding: 1em;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    width: 90%; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

const EscritorConteudo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
    width: 100%;
    min-height: 200px; /* altura fixa */
`;

const Biografia = styled.div`
    flex: 2;
    padding-right: 0.5em;
`;

const TituloDestaque = styled.h2`
    font-size: 18px;
    margin-bottom: 0.5em;
`;

const LivroDestaque = styled.img`
    height: 150px;
    border-radius: 5px;
`;

const EscritorDestaque = styled.img`
    margin-top: 1em;
    height: 150px;
`;

function Escritor(){
    return(
        <EscritorContainer>
           <EscritorConteudo>
                <Biografia>
                    <TituloDestaque>
                        José José
                    </TituloDestaque>
                    <EscritorDestaque
                        src = {les}
                    />
                </Biografia>
                <LivroDestaque 
                src = {jose} 
                />
           </EscritorConteudo>
        </EscritorContainer>
    );
}

export default Escritor;
