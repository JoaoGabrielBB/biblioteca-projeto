import styled from "styled-components";
import Logo from "../Logo";
import user from "../../assets/icons/Usuario.png"
import Input from "../Input";
import { useNavigate } from "react-router-dom";



const HeaderContainer = styled.header`
    background-color: #929AAB;
    color: #000; /* garante que o texto fique visível */
    display: flex;
    justify-content: center;
    align-items: center;

@media (min-width: 1024px) {
    justify-content: space-between; // espaço igual entre elementos internos
    align-items: center;
    padding: 0.5em; // mais espaço interno para desktop
  }
`

const UserImg = styled.img`

@media (min-width: 1024px) {
    height: 40px;
  }

` 


function Header(){
    const navigate = useNavigate();
    return(
        <HeaderContainer>
            <Logo  onClick={() => navigate(`/`)}/>
            <Input />
            <UserImg 
                src={user}
            />
        </HeaderContainer>
    );
}

export default Header