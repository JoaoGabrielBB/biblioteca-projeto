import styled from "styled-components";
import logo from "../../assets/logo/icon.png"

const LogoContainer = styled.div`
    display: flex;
  


`

const LogoProjeto = styled.img`
    height: 50px;
    @media (min-width: 1024px) {
    height: 100px;
  }
    
`

function Logo({ onClick }) {
    return(
        <LogoContainer>
            <LogoProjeto 
                src={logo}
                onClick={onClick} style={{ cursor: "pointer" }} 
            />
        </LogoContainer>

    );
}

export default Logo