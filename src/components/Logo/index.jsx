import styled from "styled-components";
import logo from "../../assets/logo/icon.png"

const LogoContainer = styled.div`
    display: flex;
  


`

const LogoProjeto = styled.img`
    height: 50px;
    
`

function Logo() {
    return(
        <LogoContainer>
            <LogoProjeto 
                src={logo}
            />
        </LogoContainer>

    );
}

export default Logo