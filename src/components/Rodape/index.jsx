import styled from "styled-components";

const RodapeContainer = styled.footer`
  color: #000000;
  background-color: #929AAB;
  padding: 20px 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  position: relative; /* garante que o z-index funcione */
  z-index: auto; /* fica acima de cards que tiverem z-index menor */
`

const TextoRodape = styled.p`
    font-size: 18px;

`


function Rodape() {
    return(
        <RodapeContainer>
           <TextoRodape>
            Testando essa bosta
           </TextoRodape>
        </RodapeContainer>

    )


}

export default Rodape